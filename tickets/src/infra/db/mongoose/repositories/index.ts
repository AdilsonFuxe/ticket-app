import {
  AddTicketRepository,
  LoadTicketByIdRepository,
  LoadTicketsRepository,
} from '@src/data/protocols/db';
import { TicketModel } from '@src/infra/db/mongoose/models';
import { MongoHelper } from '@src/infra/db/mongoose/helper';

export const addTicketRepository: AddTicketRepository = async (
  params: AddTicketRepository.Params
): Promise<AddTicketRepository.Response> => {
  const doc = new TicketModel(params);
  await doc.save();
  return MongoHelper.serialize(doc);
};

export const loadTicketsRepository: LoadTicketsRepository = async (
  params: LoadTicketsRepository.Params
): Promise<LoadTicketsRepository.Response> => {
  const result = await TicketModel.find(params);
  const tickets = result.map(MongoHelper.serialize);
  return tickets;
};

export const loadTicketByIdRepository: LoadTicketByIdRepository = async (
  id: string
): Promise<LoadTicketByIdRepository.Response> => {
  const result = await TicketModel.findById(id);
  return MongoHelper.serialize(result);
};
