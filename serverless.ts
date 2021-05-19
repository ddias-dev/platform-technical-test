import * as functions from '@functions/index';
import type { AWS } from '@serverless/typescript';
import { includes } from 'lodash';

const isOffline = includes(process.argv, 'offline');

const serverlessConfiguration: AWS = {
  service: 'platform-technical-test',
  frameworkVersion: '2',
  useDotenv: true,
  plugins: [
    'serverless-pseudo-parameters',
    'serverless-webpack',
    'serverless-offline'
  ],
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      packager: 'yarn'
    }
  },
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    stage: 'dev',
    region: 'ap-southeast-2',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      API_HOST_URL: isOffline
        ? 'http://localhost:3000'
        : 'https://#{ApiGatewayRestApi}.execute-api.#{AWS::Region}.amazonaws.com/${self:provider.stage}'
    },
    lambdaHashingVersion: '20201221'
  },
  package: {
    individually: true,
    patterns: ['node_modules/**'],
    excludeDevDependencies: true
  },
  // import the function via paths
  functions
};

module.exports = serverlessConfiguration;
