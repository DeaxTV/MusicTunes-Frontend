import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
	await page.goto("https://MusicTunes.ml/home");
	await page.getByRole("button", { name: "Search" }).click();
	await page.getByPlaceholder("Search").fill("Korn");
	await page.getByPlaceholder("Search").press("Enter");
});
