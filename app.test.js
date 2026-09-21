const request = require('supertest');
const app = require('./app');

describe('Pruebas unitarias de la ruta raíz', () => {
  test('Debe retornar un Status 200 OK', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });
});