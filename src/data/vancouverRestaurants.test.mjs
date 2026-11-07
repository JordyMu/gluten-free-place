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

test("Gluten Free Epicurean menu keeps CAD prices and never shows 'Out of stock'", () => {
  const epicurean = vancouverRestaurants.find((r) => r.slug === "gluten-free-epicurean-street-food");
  const sections = epicurean?.fullMenu ?? [];
  const items = sections.flatMap((section) => section.items);

  expect(sections.map((section) => section.category)).toEqual([
    "Bread Menu",
    "Sourdough",
    "Cakes",
    "Fresh Baked",
    "Frozen / Take & Bake",
    "Mixes",
  ]);
  expect(items.find((item) => item.name === "Potato Buns (4 pack)")?.price).toBe("CAD$10.50");
  expect(items.find((item) => item.name === "Seeded Danish 'Rye' Sourdough")?.price).toBe("CAD$20.50");
  expect(items.find((item) => item.name === "Whole Bundt Cake")?.price).toBe("CAD$60.00");
  expect(items.find((item) => item.name === "Double Layer Cake 9x13\" (16–22 servings)")?.price).toBe("CAD$130.00");
  expect(items.find((item) => item.name === "Premium Pancake / Waffle Mix")?.price).toBe("CAD$20.00");
  expect(items.some((item) => `${item.name} ${item.description ?? ""}`.includes("Out of stock"))).toBe(false);
});