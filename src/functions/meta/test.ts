import { checkAPI } from '@libs/apiGateway';
import { URL } from 'url';

describe('Meta API Test', () => {
  test('Get statusCode 200', async () => {
    const result = await checkAPI(
      'meta',
      new URL('http://localhost:3000/dev/meta')
    );

    expect(result.statusCode).toBe(200);
  });
});
