import request from 'supertest';
import app from '@src/main/config/app';

describe('PUT /api/tickets/:id', () => {
  it('Should return 200 on successful update ticket', async () => {
    const {
      body: { id },
    } = await request(app)
      .post('/api/tickets')
      .send({
        price: '135.00',
        title: 'amazon-ticket',
      })
      .expect(201);

    await request(app)
      .put(`/api/tickets/${id}`)
      .send({
        price: '200.00',
        title: 'amazon-ticket2',
      })
      .expect(200);

    const httpResponse = await request(app)
      .get(`/api/tickets/${id}`)
      .expect(200);

    expect(httpResponse.body).toEqual(
      expect.objectContaining({
        id,
        price: '200.00',
        title: 'amazon-ticket2',
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
      })
    );
  });
});
