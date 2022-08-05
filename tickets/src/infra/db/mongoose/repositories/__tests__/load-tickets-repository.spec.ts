import { MongoHelper } from '@src/infra/db/mongoose/helper';
import { TicketModel } from '@src/infra/db/mongoose/models';
import {
  addTicketRepository,
  loadTicketsRepository,
} from '@src/infra/db/mongoose/repositories';

const mockAddTicketParams1 = () => ({
  price: '135.00',
  title: 'amazon-ticket',
});

const mockAddTicketParams2 = () => ({
  price: '200.00',
  title: 'zap-ticket',
});

describe('LoadTicketsRepository', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL);
  });

  afterAll(async () => {
    await MongoHelper.disconnect();
  });

  beforeEach(async () => {
    await TicketModel.deleteMany({});
  });

  it('Should return a list of two tickets on success', async () => {
    await Promise.all([
      addTicketRepository(mockAddTicketParams1()),
      addTicketRepository(mockAddTicketParams2()),
    ]);
    const result = await loadTicketsRepository({});
    expect(result.length).toBe(2);
  });

  it('Should return an empty list of tickets on success', async () => {
    const result = await loadTicketsRepository({});
    expect(result.length).toBe(0);
  });
});
