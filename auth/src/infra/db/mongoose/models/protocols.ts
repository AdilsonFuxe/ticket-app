import { Model, Document } from 'mongoose';
import { User } from '@src/domain/models';

export type UserDocument = User &
  Document & {
    id: Document['_id'];
  };

export type UserMongooseModel = Model<UserDocument> & {
  id: Document['_id'];
};

export enum Schemas {
  users = 'users',
}
