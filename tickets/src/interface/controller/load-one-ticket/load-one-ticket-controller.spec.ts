import { Ticket } from '@src/domain/models';
import { LoadTicketById } from '@src/domain/usecases';
import { HttpRequest } from '@src/interface/protocols';
import { loadOneTicketController } from '.';

const date = new Date();

const mockTicket = (): Ticket => ({
  id: '62ec5682f730692a7c0152e3',
  title: 'The Witcher 3: Wild Hunt',
  price: '150.75',
  createdAt: date,
  updatedAt: date,
});

const mockHttpRequest = (): HttpRequest => ({
  params: {
    id: '62ec5682f730692a7c0152e3',
  },
});

const mockLoadTicketById: LoadTicketById = async (id: string) =>
  await Promise.resolve(mockTicket());

const makeSut = () => {
  const loadTicketById = jest.fn(mockLoadTicketById);
  const sut = loadOneTicketController({
    loadTicketById,
  });
  return { sut, loadTicketById };
};

describe('LoadOneTicketController', () => {
  it('Should call loadTicketById with correct id', async () => {
    const { sut, loadTicketById } = makeSut();
    const httpRequest = mockHttpRequest();
    await sut(httpRequest);
    expect(loadTicketById).toHaveBeenCalledWith(httpRequest.params.id);
  });
});
