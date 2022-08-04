import { LoadTicketByIdRepository } from '@src/data/protocols/db';
import { Ticket } from '@src/domain/models';

const date = new Date();

const mockTicket = (): Ticket => ({
  id: '62ec5682f730692a7c0152e3',
  title: 'The Witcher 3: Wild Hunt',
  price: '150.75',
  createdAt: date,
  updatedAt: date,
});

const mockLoadTicketByIdRepository: LoadTicketByIdRepository = async (
  id: string
): Promise<LoadTicketByIdRepository.Response> => {
  return await Promise.resolve(mockTicket());
};

const makeSut = () => {
  const loadTicketByIdRepository = jest.fn(mockLoadTicketByIdRepository);
  const sut = loadTicketByIdRepository;
  return { sut, loadTicketByIdRepository };
};

describe('DbLoadTicketById', () => {
  it('Should call loadTicketByIdRepository with correct id', async () => {
    const { sut, loadTicketByIdRepository } = makeSut();
    const id = '62ec5682f730692a7c0152e3';
    await sut(id);
    expect(loadTicketByIdRepository).toHaveBeenCalledWith(id);
  });
});
