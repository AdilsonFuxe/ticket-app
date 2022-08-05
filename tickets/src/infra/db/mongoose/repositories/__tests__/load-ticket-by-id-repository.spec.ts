import { MongoHelper } from '@src/infra/db/mongoose/helper';
import { TicketModel } from '@src/infra/db/mongoose/models';
import { addTicketRepository, loadTicketByIdRepository } from '..';

const mockAddTicketParams = () => ({
  price: '135.00',
  title: 'amazon-ticket',
});

describe('LoadTicketByIdRepository', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL);
  });

  afterAll(async () => {
    await MongoHelper.disconnect();
  });

  beforeEach(async () => {
    await TicketModel.deleteMany({});
  });
  it('Should return a valid ticket on success', async () => {
    const { id } = await addTicketRepository(mockAddTicketParams());
    const ticket = await loadTicketByIdRepository(id);
    expect(ticket).toBeDefined();
    expect(ticket).toEqual(expect.objectContaining(mockAddTicketParams()));
  });
});
