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
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        delete ret.password;
      },
    },
  }
);

export default model<UserDocument, UserMongooseModel>(
  Schemas.users,
  UserSchema
);
