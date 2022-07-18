import { model, Schema } from 'mongoose';
import { UserDocument, UserMongooseModel, Schemas } from './protocols';

const UserSchema = new Schema<UserDocument>(
  {
    email: {
      type: String,
      trim: true,
      required: true,
    },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export default model<UserDocument, UserMongooseModel>(
  Schemas.users,
  UserSchema
);
