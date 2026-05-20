import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

// Load environment file
dotenv.config({
  path: `.env.${process.env.TEST_ENV || 'qa'}`
});

export default defineConfig({

  testDir: './tests',

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 1 : undefined,

  reporter: 'html',

  // Global settings
  use: {

    baseURL: process.env.BASE_URL,

    headless: false,

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    trace: 'retain-on-failure',
  },

  projects: [

    {
      name: 'chromium',

      use: {
        ...devices['Desktop Chrome'],
      },
    },

    // Optional browsers

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],
});