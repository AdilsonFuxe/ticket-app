import { AddTicketRepository } from '@src/data/protocols/db';
import { Ticket } from '@src/domain/models';
import { dbAddTicket } from '.';

const date = new Date();

const mockTicket = (): Ticket => ({
  id: '62ec5682f730692a7c0152e3',
  title: 'The Witcher 3: Wild Hunt',
  price: '150.75',
  createdAt: date,
  updatedAt: date,
});

const mockAddTicketParams = () => ({
  price: '150.75',
  title: 'The Witcher 3: Wild Hunt',
});

const mockAddTicketRepository: AddTicketRepository = async (
  params: AddTicketRepository.Params
) => {
  return await Promise.resolve(mockTicket());
};

const makeSut = () => {
  const addTicketRepository = jest.fn(mockAddTicketRepository);
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

  it('Should throw if addTicketRepository throws', async () => {
    const { sut, addTicketRepository } = makeSut();
    addTicketRepository.mockRejectedValue(new Error());
    const result = sut(mockAddTicketParams());
    await expect(result).rejects.toThrow();
  });

  it('Should return a ticket on success', async () => {
    const { sut } = makeSut();
    const result = await sut(mockAddTicketParams());
    expect(result).toEqual(mockTicket());
  });
});
