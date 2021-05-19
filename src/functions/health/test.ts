import { checkAPI } from '@libs/apiGateway';
import { URL } from 'url';

describe('Health API Test', () => {
  test('Get statusCode 200', async () => {
    const result = await checkAPI(
      'health',
      new URL('http://localhost:3000/dev/health')
    );

    expect(result.statusCode).toBe(200);
  });
});
