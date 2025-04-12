// eslint-disable no-undef
// eslint-disable no-commonjs
/** @type {import('ts-jest').JestConfigWithTsJest} **/

module.exports = {
  moduleFileExtensions: [
    'js',
    'jsx',
    'ts',
    'tsx',
    'json',
    'node',
  ],
  moduleNameMapper: {
    // '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  preset: 'ts-jest',
  setupFilesAfterEnv: [
    '<rootDir>/jest.setup.ts',
  ],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/coverage',
    '<rootDir>/dist',
  ],
  transform: {
    '^.+.(js|jsx|ts|tsx)?$': 'ts-jest',
  },
  transformIgnorePatterns: [
    '<rootDir>/node_modules/',
  ],
}
