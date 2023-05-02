import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
    verbose: true,
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    testResultsProcessor: './node_modules/jest-html-reporter',
    testTimeout: 10000,
};

export default config;
