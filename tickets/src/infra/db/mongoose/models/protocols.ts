import { Ticket } from '@src/domain/models';
import { Model, Document } from 'mongoose';

export type TicketDocument = Ticket &
  Document & {
    id: Document['_id'];
  };

export type TicketMongooseModel = Model<TicketDocument> & {
  id: Document['_id'];
};

export enum Schemas {
  tickets = 'tickets',
}
