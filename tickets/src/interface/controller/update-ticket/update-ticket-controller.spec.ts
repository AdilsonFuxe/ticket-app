import { Ticket } from '@src/domain/models';
import { LoadTicketById, UpdateTicket } from '@src/domain/usecases';
import { MissingParamError } from '@src/interface/errors';
import {
  badRequest,
  notFoundError,
  serverError,
} from '@src/interface/helpers/http-helper';
import { HttpRequest, Validation } from '@src/interface/protocols';
import { updateTicketController } from '.';
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
  params: {
    id: '62ec5682f730692a7c0152e3',
  },
  body: {
    title: 'amazon-ticket',
    price: '100.99',
  },
});

const mockValidator: Validation = (input: any) => null;
const mockLoadTicketById: LoadTicketById = async (id: string) =>
  await Promise.resolve(mockTicket());
const mockUpdateTicket: UpdateTicket = async (
  id: string,
  params: UpdateTicket.Params
) => await Promise.resolve(mockTicket());

const makeSut = () => {
  const validate = jest.fn(mockValidator);
  const updateTicket = jest.fn(mockUpdateTicket);
  const sanitize = jest.fn().mockReturnValue(mockHttpRequest().body);
  const loadTicketById = jest.fn(mockLoadTicketById);
  const sut = updateTicketController({
    validate,
    loadTicketById,
    updateTicket,
    sanitize,
  });
  return { sut, validate, updateTicket, sanitize, loadTicketById };
};

describe('UpdateTicketController', () => {
  it('Should call validator with correct params', () => {
    const { sut, validate } = makeSut();
    const httpRequest = mockHttpRequest();
    sut(httpRequest);
    expect(validate).toHaveBeenCalledWith(httpRequest.body);
  });

  it('Should return 400 if validator returns an error', async () => {
    const { sut, validate } = makeSut();
    validate.mockReturnValueOnce(new MissingParamError('title'));
    const httpRequest = mockHttpRequest();
    const httpResponse = await sut(httpRequest);
    expect(httpResponse).toEqual(badRequest(new MissingParamError('title')));
  });

  it('Should call sanitize with correct params', () => {
    const { sut, sanitize } = makeSut();
    const httpRequest = mockHttpRequest();
    sut(httpRequest);
    expect(sanitize).toHaveBeenCalledWith(httpRequest.body, validateFields);
  });

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

  it('Should call updateTicket with correct params', async () => {
    const { sut, updateTicket } = makeSut();
    const httpRequest = mockHttpRequest();
    await sut(httpRequest);
    expect(updateTicket).toHaveBeenCalledWith(
      httpRequest.params.id,
      httpRequest.body
    );
  });
});
