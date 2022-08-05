import { LoadTicketsRepository } from '@src/data/protocols/db';
import { Ticket } from '@src/domain/models';
import { dbLoadTickets } from '.';

const date = new Date();

const mockTicket = (): Ticket => ({
  id: '62ec5682f730692a7c0152e3',
  title: 'The Witcher 3: Wild Hunt',
  price: '150.75',
  createdAt: date,
  updatedAt: date,
});

const mockLoadTicketsParam = () => ({ title: 'The Witcher 3: Wild Hunt' });

const mockLoadTicketsRepository: LoadTicketsRepository = async (
  params: LoadTicketsRepository.Params
): Promise<LoadTicketsRepository.Response> => {
  return await Promise.resolve([mockTicket()]);
};

const makeSut = () => {
  const loadTicketsRepository = jest.fn(mockLoadTicketsRepository);
  const sut = dbLoadTickets({ loadTicketsRepository });
  return { sut, loadTicketsRepository };
};

describe('DbLoadTickets', () => {
  it('Should call loadTicketsRepository with correct params', async () => {
    const { sut, loadTicketsRepository } = makeSut();
    const params = mockLoadTicketsParam();
    await sut(params);
    expect(loadTicketsRepository).toHaveBeenCalledWith(params);
  });

  it('Should throw if loadTicketsRepository throws', async () => {
    const { sut, loadTicketsRepository } = makeSut();
    loadTicketsRepository.mockRejectedValue(new Error());
    const result = sut(mockLoadTicketsParam());
    await expect(result).rejects.toThrow();
  });

  it('Should return a ticket on success', async () => {
    const { sut } = makeSut();
    const result = await sut(mockLoadTicketsParam());
    expect(result).toEqual([mockTicket()]);
  });
});
