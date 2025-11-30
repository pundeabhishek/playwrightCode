
import { defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
    testDir: './tests',

    reporter: 'html',

    timeout: 30000,
    expect: {
        timeout: 10000 // 10 seconds for expect assertions
    },
    use: {
        browserName: 'chromium',
        headless: false,
        actionTimeout: 10000,      // 10 seconds for each action
        navigationTimeout: 20000,  // 20 seconds for each page load
        launchOptions: {
            slowMo: 500,     // slow down by 500ms each step
        },
    },

});

