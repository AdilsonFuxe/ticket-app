import { Ticket } from '@src/domain/models';
import { LoadTickets } from '@src/domain/usecases';
import { HttpRequest } from '@src/interface/protocols';
import { loadTicketsController } from '.';
import { validateFields } from './protocols';

const date = new Date();

const mockTicket = (): Ticket => ({
  id: '62ec5682f730692a7c0152e3',
  title: 'The Witcher 3: Wild Hunt',
  price: '150.75',
  createdAt: date,
  updatedAt: date,
});

const mockHttpRequest = (): HttpRequest => ({
  query: {
    price: '150.75',
    title: 'amazon-ticket',
  },
});

const mockLoadTickets: LoadTickets = async (params: LoadTickets.Params) =>
  await Promise.resolve([mockTicket()]);

const makeSut = () => {
  const loadTickets = jest.fn(mockLoadTickets);
  const sanitize = jest.fn(() => mockHttpRequest().body);
  const sut = loadTicketsController({
    loadTickets,
    sanitize,
  });
  return { sut, loadTickets, sanitize };
};

describe('LoadTicketsController', () => {
  it('Should call sanitize with correct params', async () => {
    const { sut, sanitize } = makeSut();
    const httpRequest = mockHttpRequest();
    await sut(httpRequest);
    expect(sanitize).toHaveBeenCalledWith(httpRequest.query, validateFields);
  });
});
