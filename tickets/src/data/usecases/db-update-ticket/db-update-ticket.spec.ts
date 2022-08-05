import { UpdateTicketRepository } from '@src/data/protocols/db';
import { Ticket } from '@src/domain/models';
import { dbUpdateTicket } from '.';

const date = new Date();

const mockTicket = (): Ticket => ({
  id: '62ec5682f730692a7c0152e3',
  title: 'The Witcher 3: Wild Hunt',
  price: '150.75',
  createdAt: date,
  updatedAt: date,
});

const id = '62ec5682f730692a7c0152e3';
const mockUpdateTicketParams = () => ({ title: 'The Witcher 3: Wild Hunt' });

const mockUpdateTicketRepository: UpdateTicketRepository = async (
  id: string,
  params: UpdateTicketRepository.Params
): Promise<UpdateTicketRepository.Response> => {
  return await Promise.resolve(mockTicket());
};

const makeSut = () => {
  const updateTicketRepository = jest.fn(mockUpdateTicketRepository);
  const sut = dbUpdateTicket({ updateTicketRepository });
  return { sut, updateTicketRepository };
};

describe('DbUpdateTicket', () => {
  it('Should call updateTicketRepository with correct params', async () => {
    const { sut, updateTicketRepository } = makeSut();
    await sut(id, mockUpdateTicketParams());
    expect(updateTicketRepository).toHaveBeenCalledWith(
      id,
      mockUpdateTicketParams()
    );
  });
});
