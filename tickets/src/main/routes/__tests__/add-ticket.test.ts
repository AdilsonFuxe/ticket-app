import request from 'supertest';
import app from '@src/main/config/app';
import { MongoHelper } from '@src/infra/db/mongoose/helper';
import { TicketModel } from '@src/infra/db/mongoose/models';

describe('POST /api/tickets', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL);
  });

  afterAll(async () => {
    await MongoHelper.disconnect();
  });

  beforeEach(async () => {
    await TicketModel.deleteMany({});
  });
  it('Should return 201 on successful add ticket', async () => {
    const httpResponse = await request(app)
      .post('/api/tickets')
      .send({
        price: '135.00',
        title: 'amazon-ticket',
      })
      .expect(201);
    expect(httpResponse.body).toEqual(
      expect.objectContaining({
        price: '135.00',
        title: 'amazon-ticket',
        id: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
      })
    );
  });

  it('Should return 400 with missing price or title', async () => {
    await request(app)
      .post('/api/tickets')
      .send({
        price: '135.00',
      })
      .expect(400);

    await request(app)
      .post('/api/tickets')
      .send({ title: 'amazon' })
      .expect(400);
  });
});
