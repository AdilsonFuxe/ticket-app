import { Ticket } from '@src/domain/models';
import { LoadTicketById, UpdateTicket } from '@src/domain/usecases';
import { HttpRequest, Validation } from '@src/interface/protocols';
import { updateTicketController } from '.';

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
});
