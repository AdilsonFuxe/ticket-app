import request from 'supertest';
import app from '@src/main/config/app';

describe('GET /api/tickets', () => {
  it('Should return 200 and a list with two tickets on get tickets success', async () => {
    await request(app)
      .post('/api/tickets')
      .send({
        price: '135.00',
        title: 'ebay-ticket',
      })
      .expect(201);
    await request(app)
      .post('/api/tickets')
      .send({
        price: '140.00',
        title: 'amazon-ticket',
      })
      .expect(201);

    const httpResponse = await request(app).get('/api/tickets').expect(200);
    expect(httpResponse.body.length).toBe(2);
    expect(httpResponse.body).toEqual(
      expect.arrayContaining([
        {
          id: expect.any(String),
          price: '140.00',
          title: 'amazon-ticket',
          createdAt: expect.any(String),
          updatedAt: expect.any(String),
        },
        {
          id: expect.any(String),
          price: '135.00',
          title: 'ebay-ticket',
          createdAt: expect.any(String),
          updatedAt: expect.any(String),
        },
      ])
    );
  });
});
