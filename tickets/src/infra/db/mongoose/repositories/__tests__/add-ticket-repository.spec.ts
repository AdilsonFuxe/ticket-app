import { MongoHelper } from '@src/infra/db/mongoose/helper';
import { TicketModel } from '@src/infra/db/mongoose/models';
import { addTicketRepository } from '@src/infra/db/mongoose/repositories';

const mockAddTicketParams = () => ({
  price: '135.00',
  title: 'amazon-ticket',
});

describe('AddTicketRepository', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL);
  });

  afterAll(async () => {
    await MongoHelper.disconnect();
  });

  beforeEach(async () => {
    await TicketModel.deleteMany({});
  });

  it('Should add a ticket on success', async () => {
    const result = await addTicketRepository(mockAddTicketParams());
    expect(result).toEqual({
      ...mockAddTicketParams(),
      id: expect.any(String),
      createdAt: expect.any(String),
      updatedAt: expect.any(String),
    });
  });
});
