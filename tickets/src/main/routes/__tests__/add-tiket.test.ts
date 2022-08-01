import request from 'supertest';
import app from '../../config/app';

describe('POST /api/tickets', () => {
  it('Should return 201 on successful add ticket', async () => {
    await request(app)
      .post('/api/tickets')
      .send({
        price: '135.00',
        title: 'amfasd',
      })
      .expect(201);
  });
});
