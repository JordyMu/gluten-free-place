import { test, expect } from "bun:test";
import { vancouverRestaurants } from "./vancouverRestaurants.ts";

test("Iki menu keeps the photographed CAD prices and portion sizes", () => {
  const iki = vancouverRestaurants.find((restaurant) => restaurant.slug === "iki-japanese-restaurant");
  const items = iki?.fullMenu?.flatMap((section) => section.items) ?? [];
  expect(items.find((item) => item.name === "Yam Fry")?.price).toBe("CA$4.95 / CA$8.95");
  expect(items.find((item) => item.name === "Tuna Sashimi")?.description).toBe("4 / 8 pieces");
  expect(items.find((item) => item.name === "Power Sushi Bowl")?.price).toBe("CA$14.95");
  expect(items.find((item) => item.name === "Spider Roll")?.price).toBe("CA$13.75");
  expect(items.find((item) => item.name === "Extra Gluten-Free Ginger")?.price).toBe("CA$0.50");
});