const request = require('supertest');
const app = require('../app');

test('GET / should return the correct HTML response', async () => {
    const response = await request(app).get('/');
    expect(response.text).toBe('<h3>Hello World</h3><p>This test page tests Github Action CI</p>');
    expect(response.statusCode).toBe(200);
});
