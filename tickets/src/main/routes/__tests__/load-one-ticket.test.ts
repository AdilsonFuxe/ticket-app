import request from 'supertest';
import app from '@src/main/config/app';

describe('GET /api/tickets/:id', () => {
  it('Should return 200 and ticket information on success', async () => {
    const {
      body: { id },
    } = await request(app)
      .post('/api/tickets')
      .send({
        price: '135.00',
        title: 'ebay-ticket',
      })
      .expect(201);

    const httpResponse = await request(app)
      .get(`/api/tickets/${id}`)
      .expect(200);
    expect(httpResponse.body).toEqual(
      expect.objectContaining({
        id,
        price: '135.00',
        title: 'ebay-ticket',
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
      })
    );
  });

  it('Should return 404 if ticket is not found', async () => {
    const id = '62e80af3cbd956bb5606c560';
    await request(app).get(`/api/tickets/${id}`).expect(404);
  });
});
