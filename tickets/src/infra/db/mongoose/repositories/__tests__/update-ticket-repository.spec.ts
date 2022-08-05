import { MongoHelper } from '@src/infra/db/mongoose/helper';
import { TicketModel } from '@src/infra/db/mongoose/models';
import {
  addTicketRepository,
  loadTicketByIdRepository,
  updateTicketRepository,
} from '@src/infra/db/mongoose/repositories';

const mockAddTicketParams = () => ({
  price: '135.00',
  title: 'amazon-ticket',
});

describe('UpdateTicketRepository', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL);
  });

  afterAll(async () => {
    await MongoHelper.disconnect();
  });

  beforeEach(async () => {
    await TicketModel.deleteMany({});
  });

  it('Should update a ticket on success', async () => {
    const { id } = await addTicketRepository(mockAddTicketParams());
    const ticketBeforeUpdate = await loadTicketByIdRepository(id);
    expect(ticketBeforeUpdate).toEqual(
      expect.objectContaining(mockAddTicketParams())
    );
    const newData = {
      price: '200.00',
      title: 'zap-ticket',
    };
    const result = await updateTicketRepository(id, newData);
    const ticketAfterUpdate = await loadTicketByIdRepository(id);
    expect(ticketAfterUpdate).toEqual(
      expect.objectContaining(ticketAfterUpdate)
    );
    expect(result).toBeDefined();
  });
});
