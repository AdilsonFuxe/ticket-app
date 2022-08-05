import { Ticket } from '@src/domain/models';
import { AddTicket } from '@src/domain/usecases';
import { MissingParamError } from '@src/interface/errors';
import { badRequest } from '@src/interface/helpers/http-helper';
import { HttpRequest, Validation } from '@src/interface/protocols';
import { addTicketController } from '.';
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
  body: {
    title: 'amazon-ticket',
    price: '100.99',
  },
});

const mockValidator: Validation = (input: any) => null;
const mockAddTicket: AddTicket = async (params: AddTicket.Params) =>
  await Promise.resolve(mockTicket());

const makeSut = () => {
  const validate = jest.fn(mockValidator);
  const addTicket = jest.fn(mockAddTicket);
  const sanitize = jest.fn().mockReturnValue(mockHttpRequest().body);
  const sut = addTicketController({
    validate,
    addTicket,
    sanitize,
  });
  return { sut, validate, addTicket, sanitize };
};

describe('AddTicketController', () => {
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

  it('Should calls addTicket with correct params', async () => {
    const { sut, addTicket } = makeSut();
    const httpRequest = mockHttpRequest();
    await sut(httpRequest);
    expect(addTicket).toHaveBeenCalledWith(httpRequest.body);
  });
});
