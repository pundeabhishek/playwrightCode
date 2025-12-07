import { defineConfig, devices } from "@playwright/test";

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: "./tests",
  workers: 9,
  fullyParallel: true,

  reporter: "html",

  timeout: 60000,
  expect: {
    timeout: 10000, // 10 seconds for expect assertions
  },
  projects: [
    {
      name: "chromium",
      use: { browserName: "chromium" },
    },
    // {
    //   name: "firefox",
    //   use: { browserName: "firefox" },
    // },
    // {
    //   name: "webkit",
    //   use: { browserName: "webkit" },
    // },
  ],
  use: {
    // browserName: 'chromium',
    headless: false,
    actionTimeout: 10000, // 10 seconds for each action
    navigationTimeout: 20000, // 20 seconds for each page load
    launchOptions: {
      slowMo: 500, // slow down by 500ms each step
    },
  },
});
