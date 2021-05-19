import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import { execSync } from 'child_process';
import packageInfo from 'package.json';
import 'source-map-support/register';

const meta: ValidatedEventAPIGatewayProxyEvent<string> = async () => {
  const gitLastCommitHash = execSync('git rev-parse HEAD').toString().trim();

  return formatJSONResponse({
    name: packageInfo.name,
    description: packageInfo.description,
    version: packageInfo.version,
    author: packageInfo.author,
    commit: gitLastCommitHash
  });
};

export const main = middyfy(meta);
