import {
  AddUserRepository,
  LoadOneUserRepository,
} from '../../../../data/protocols/db';
import { UserModel } from '../models';
import { MongoHelper } from '../helper';

export const addUserRepository: AddUserRepository = async (
  params: AddUserRepository.Params
): Promise<AddUserRepository.Response> => {
  const doc = new UserModel(params);
  await doc.save();
  return MongoHelper.serialize(doc);
};

export const loadOneUserRepository: LoadOneUserRepository = async ({
  email,
  id,
}) => {
  const query = {};
  if (email) {
    Object.assign(query, { email });
  }
  if (id) {
    Object.assign(query, { _id: id });
  }
  const user = await UserModel.findOne(query).lean();
  return MongoHelper.serialize(user);
};
