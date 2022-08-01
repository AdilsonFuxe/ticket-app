import { model, Schema } from 'mongoose';
import { TicketDocument, TicketMongooseModel, Schemas } from './protocols';

const TicketSchema = new Schema<TicketDocument>(
  {
    title: {
      type: String,
      trim: true,
      required: true,
    },
    price: {
      type: String,
      trim: true,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model<TicketDocument, TicketMongooseModel>(
  Schemas.tickets,
  TicketSchema
);
