import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import 'source-map-support/register';

const hello: ValidatedEventAPIGatewayProxyEvent<string> = async () => {
  return formatJSONResponse({
    message: `Hello Serverless world!`
  });
};

export const main = middyfy(hello);
