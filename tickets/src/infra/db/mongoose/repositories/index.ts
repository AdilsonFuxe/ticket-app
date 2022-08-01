import { AddTicketRepository } from '@src/data/protocols/db';
import { TicketModel } from '@src/infra/db/mongoose/models';
import { MongoHelper } from '@src/infra/db/mongoose/helper';

export const addTicketRepository: AddTicketRepository = async (
  params: AddTicketRepository.Params
): Promise<AddTicketRepository.Response> => {
  const doc = new TicketModel(params);
  await doc.save();
  return MongoHelper.serialize(doc);
};
