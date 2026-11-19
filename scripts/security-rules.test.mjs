import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createClient } from "@supabase/supabase-js";

const envText = readFileSync(new URL("../.env", import.meta.url), "utf8");
const env = Object.fromEntries(
  envText.split(/\r?\n/).filter((line) => line && !line.startsWith("#")).map((line) => {
    const separator = line.indexOf("=");
    const value = line.slice(separator + 1).trim();
    return [line.slice(0, separator), value.replace(/^(['"])(.*)\1$/, "$2")];
  }),
);
const sessionFile = process.env.LOVABLE_AUTH_SESSION_FILE || `${process.env.HOME}/.cache/lovable-auth/session.json`;
const minted = JSON.parse(readFileSync(sessionFile, "utf8"));
const accessToken = minted.session.access_token;
const userId = minted.session.user.id;
const supabaseUrl = env.VITE_SUPABASE_URL;
const anonKey = env.VITE_SUPABASE_PUBLISHABLE_KEY;
const anon = createClient(supabaseUrl, anonKey);
const authenticated = createClient(supabaseUrl, anonKey, {
  global: { headers: { Authorization: `Bearer ${accessToken}` } },
});

test("anonymous users cannot read private profile emails", async () => {
  const { data, error } = await anon.from("profiles").select("id, email").limit(1);
  assert.ok(error || data.length === 0, "Private profile rows must not be returned anonymously");

  const { data: publicProfiles, error: publicError } = await anon
    .from("public_profiles")
    .select("*")
    .limit(1);
  assert.equal(publicError, null);
  assert.ok(publicProfiles.length > 0, "Public reviewer profiles should remain available");
  assert.deepEqual(Object.keys(publicProfiles[0]).sort(), ["avatar_url", "display_name", "id"]);
});

test("public listing and review content remains available without administration data", async () => {
  const { data: privateHiddenRows, error: privateHiddenError } = await anon
    .from("hidden_restaurants")
    .select("hidden_by")
    .limit(1);
  assert.ok(privateHiddenError || privateHiddenRows.length === 0);

  const { error: publicHiddenError } = await anon
    .from("public_hidden_restaurants")
    .select("id, restaurant_slug, restaurant_city, restaurant_country, reason, created_at")
    .limit(1);
  assert.equal(publicHiddenError, null);

  const { error: reviewsError } = await anon
    .from("reviews")
    .select("id, restaurant_name, rating, comment")
    .limit(1);
  assert.equal(reviewsError, null);
});

test("users can read their own email but not another account's email", async () => {
  const { data: ownProfile, error: ownError } = await authenticated
    .from("profiles")
    .select("email")
    .eq("id", userId)
    .single();
  assert.equal(ownError, null);
  assert.equal(ownProfile.email, minted.session.user.email);

  const { data: otherProfiles, error: otherError } = await authenticated
    .from("profiles")
    .select("email")
    .neq("id", userId)
    .limit(1);
  assert.equal(otherError, null);
  assert.equal(otherProfiles.length, 0);
});

test("users cannot read or self-approve restaurant claims", async () => {
  const { data, error } = await authenticated.from("restaurant_claims").select("*").limit(1);
  assert.ok(error || data.length === 0, "Claim codes must not be visible to clients");

  const { data: updated, error: updateError } = await authenticated
    .from("restaurant_claims")
    .update({ verified: true })
    .eq("user_id", userId)
    .select("id");
  assert.ok(updateError || updated.length === 0, "A user must not be able to approve their own claim");
});

test("unapproved users cannot upload restaurant files or photo records", async () => {
  const filePath = `${userId}/security-test/Security City/nonexistent-restaurant/${crypto.randomUUID()}.png`;
  const onePixelPng = Buffer.from("iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=", "base64");
  const { error: storageError } = await authenticated.storage
    .from("restaurant-photos")
    .upload(filePath, onePixelPng, { contentType: "image/png" });
  assert.ok(storageError, "Storage must reject an upload without approved ownership");

  const { error: photoError } = await authenticated.from("restaurant_photos").insert({
    restaurant_slug: "nonexistent-restaurant",
    restaurant_city: "Security City",
    restaurant_country: "security-test",
    photo_url: "https://example.com/not-allowed.png",
    uploaded_by: userId,
  });
  assert.ok(photoError, "Photo records must reject an upload without approved ownership");
});
