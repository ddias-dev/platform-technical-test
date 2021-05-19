import middy from '@middy/core';
import middyJsonBodyParser from '@middy/http-json-body-parser';
import { Handler } from 'aws-lambda';
import { LambdaHandler } from './apiGateway';

export const middyfy = (handler: Handler): LambdaHandler<string> => {
  return middy(handler).use(middyJsonBodyParser());
};
