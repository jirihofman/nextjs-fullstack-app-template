module.exports = {
    // Indicates whether the coverage information should be collected while executing the test
    collectCoverage: true,
    // The directory where Jest should output its coverage files
    coverageDirectory: 'jest-coverage',
    setupFilesAfterEnv: ['./jest.setup.js'],
    // The test environment that will be used for testing
    testEnvironment: 'node',
    testMatch: ['**/__tests__/**/*.[jt]s?(x)'],
};
