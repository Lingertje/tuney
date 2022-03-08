/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
	preset: "ts-jest",
	testEnvironment: "jsdom",
	setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"], // Run this file before each test
	testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/coverage", "<rootDir>/build"],
	moduleDirectories: ["<rootDir>/node_modules", "<rootDir>/src"], // Needed to make Jest work with the imports we use e.q. 'components/Button' which is possible due to the baseUrl in the tsconfig.json
	moduleNameMapper: {
		"\\.(scss)$": "identity-obj-proxy", // Needed to make Jest work with CSS modules
		"src/(.*)": "<rootDir>/src/$1",
	},
	collectCoverage: true,
	transform: {"\\.ts$": ["ts-jest"]}
};
