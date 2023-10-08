/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  extensionsToTreatAsEsm: ['.ts'],
  preset: 'ts-jest/presets/default-esm',
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
    '^(\\.{1,2}/.*)\\.ts$': '$1',
  },
  transform: {
    '^.+\\.[tj]sx?$': [
      'esbuild-jest',
      {
        format: 'esm',
        target: 'es2022',
        sourcemap: true,
      },
    ],
  },
  setupFiles: [
    './test/setup/dotenv.ts',
  ],
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
  testEnvironment: 'node',
  testRegex: '(\\/test\\/|.*)(test|spec)\\.[jt]sx?$',
  verbose: true,
};
