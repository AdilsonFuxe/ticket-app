import { Ticket } from '@src/domain/models';
import { LoadTicketById } from '@src/domain/usecases';
import {
  notFoundError,
  ok,
  serverError,
} from '@src/interface/helpers/http-helper';
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

  it('Should return 404 if loadTicketById returns null', async () => {
    const { sut, loadTicketById } = makeSut();
    loadTicketById.mockReturnValueOnce(null);
    const httpRequest = mockHttpRequest();
    const httpResponse = await sut(httpRequest);
    expect(httpResponse).toEqual(notFoundError('ticket'));
  });

  it('Should return 500 if loadTicketById throws', async () => {
    const { sut, loadTicketById } = makeSut();
    loadTicketById.mockRejectedValueOnce(new Error());
    const httpRequest = mockHttpRequest();
    const httpResponse = await sut(httpRequest);
    expect(httpResponse).toEqual(serverError(new Error()));
  });

  it('Should return 200 success', async () => {
    const { sut } = makeSut();
    const httpRequest = mockHttpRequest();
    const httpResponse = await sut(httpRequest);
    expect(httpResponse).toEqual(ok(mockTicket()));
  });
});
