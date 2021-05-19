import { hello } from '@functions';
import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { checkAPI, formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import { first } from 'lodash';
import 'source-map-support/register';
import { URL } from 'url';

const health: ValidatedEventAPIGatewayProxyEvent<string> = async (events) => {
  //Hello API Health Check
  const result = await checkAPI(
    'hello',
    new URL(
      events.requestContext.stage + first(hello.events).http.path,
      process.env['API_HOST_URL']
    )
  );

  return formatJSONResponse(result);
};

export const main = middyfy(health);
