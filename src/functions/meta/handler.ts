import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import { get } from 'https';
import packageInfo from 'package.json';
import 'source-map-support/register';

type GitCommit = {
  commit: {
    author: {
      name: string;
      email: string;
    };
    tree: {
      sha: string;
    };
  };
};

const meta: ValidatedEventAPIGatewayProxyEvent<string> = async () => {
  const lastCommit = await new Promise((resolve) => {
    get(
      'https://api.github.com/repos/ddias-dev/platform-technical-test/commits/main',
      {
        headers: { 'User-Agent': `${packageInfo.name}/${packageInfo.version}` }
      },
      (res) => {
        let rawData: string = '';
        res.on('data', function (data: string) {
          rawData += data;
        });

        res.on('end', () => {
          const gitData: GitCommit = JSON.parse(rawData);
          resolve({
            hash: gitData.commit.tree.sha,
            author: {
              name: gitData.commit.author.name,
              email: gitData.commit.author.email
            }
          });
        });
      }
    );
  });

  return formatJSONResponse({
    name: packageInfo.name,
    description: packageInfo.description,
    version: packageInfo.version,
    lastCommit
  });
};

export const main = middyfy(meta);
