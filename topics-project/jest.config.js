const nextJest = require('next/jest')

/** @type {import('jest').Config} */
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
const config = {
  coverageProvider: 'v8',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['__e2e__'],
  collectCoverageFrom: [
    'app/**/*.{js,jsx,ts,tsx}', // Test the client components and pages code
    'src/**/*.{js,jsx,ts,tsx}', // Test the src folder files
    '!src/**/*.test.{js,jsx,ts,tsx}', // Exclude test files
    '!src/**/*.d.ts', // Exclude TypeScript declaration files
    '!src/**/_app.{js,jsx,ts,tsx}', // Exclude Next.js specific files like _app and _document if needed
    '!src/**/_document.{js,jsx,ts,tsx}',
    // Add any other files or directories you wish to exclude
  ],
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(config)