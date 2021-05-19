import type {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Handler
} from 'aws-lambda';
import http from 'http';
import https from 'https';
import type { FromSchema } from 'json-schema-to-ts';
import 'source-map-support/register';
import { URL } from 'url';

type ApiStatus = {
  function: string;
  endpoint: string;
  statusCode: number;
};

export type Response = {
  statusCode: number;
  body: string;
};

type ValidatedAPIGatewayProxyEvent<S> = Omit<APIGatewayProxyEvent, 'body'> & {
  body: FromSchema<S>;
};

export type LambdaHandler<S> = Handler<
  ValidatedAPIGatewayProxyEvent<S>,
  APIGatewayProxyResult
>;

export type ValidatedEventAPIGatewayProxyEvent<S> = LambdaHandler<S>;

export const formatJSONResponse = (
  response: Record<string, unknown>
): Response => {
  return {
    statusCode: 200,
    body: JSON.stringify(response)
  };
};

export const checkAPI = async (name: string, url: URL): Promise<ApiStatus> =>
  await new Promise((resolve) => {
    const client = url.protocol === 'https:' ? https : http;
    client.get(url.href, (res) => {
      res.on('data', function (data: string) {
        process.stdout.write(data);
      });
      res.on('end', () => {
        resolve({
          function: name,
          endpoint: url.href,
          statusCode: res.statusCode
        });
      });
    });
  });
