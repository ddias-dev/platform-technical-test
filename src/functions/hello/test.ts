import { checkAPI } from '@libs/apiGateway';
import { URL } from 'url';

describe('Hello API Test', () => {
  test('Get statusCode 200', async () => {
    const result = await checkAPI(
      'hello',
      new URL('http://localhost:3000/dev')
    );

    expect(result.statusCode).toBe(200);
  });
});
