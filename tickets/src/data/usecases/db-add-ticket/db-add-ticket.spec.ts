import { AddTicket } from '@src/domain/usecases';
import { dbAddTicket } from '.';

const mockAddTicketParams = (): AddTicket.Params => ({
  price: '109.99',
  title: 'any_title',
});

const makeSut = () => {
  const addTicketRepository = jest.fn();
  const sut = dbAddTicket({ addTicketRepository });
  return { sut, addTicketRepository };
};

describe('DbAddTicket', () => {
  it('Should call addTicketRepository() with correct params', async () => {
    const { sut, addTicketRepository } = makeSut();
    const params = mockAddTicketParams();
    await sut(params);
    expect(addTicketRepository).toHaveBeenCalledWith(params);
  });
});
