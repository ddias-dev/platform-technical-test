import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { checkAPI, formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import 'source-map-support/register';
import { URL } from 'url';

const health: ValidatedEventAPIGatewayProxyEvent<string> = async () => {
  //Hello API Health Check
  const result = await checkAPI('hello', new URL(process.env['API_HOST_URL']));

  return formatJSONResponse(result);
};

export const main = middyfy(health);
