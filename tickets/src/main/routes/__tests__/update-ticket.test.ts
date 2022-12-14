import request from 'supertest';
import app from '@src/main/config/app';
import { MongoHelper } from '@src/infra/db/mongoose/helper';
import { TicketModel } from '@src/infra/db/mongoose/models';

describe('PUT /api/tickets/:id', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL);
  });

  afterAll(async () => {
    await MongoHelper.disconnect();
  });

  beforeEach(async () => {
    await TicketModel.deleteMany({});
  });
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

  it('Should return 400 with missing price or title', async () => {
    const id = '62e80af3cbd956bb5606c560';
    await request(app)
      .put(`/api/tickets/${id}`)
      .send({ price: '135.00' })
      .expect(400);

    await request(app)
      .put(`/api/tickets/${id}`)
      .send({ title: 'amazon' })
      .expect(400);
  });

  it('Should return 404 if ticket is not found', async () => {
    const id = '62e80af3cbd956bb5606c560';
    await request(app)
      .put(`/api/tickets/${id}`)
      .send({
        price: '200.00',
        title: 'amazon-ticket2',
      })
      .expect(404);
  });
});
