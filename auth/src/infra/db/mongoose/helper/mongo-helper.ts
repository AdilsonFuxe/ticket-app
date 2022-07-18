import mongoose from 'mongoose';

export const MongoHelper = {
  async connect(uri: string): Promise<void> {
    await mongoose.connect(uri);
  },

  async disconnect(): Promise<void> {
    await mongoose.disconnect();
  },

  serialize(data: any): any {
    if (!data) {
      return data;
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { _id, __v, ...dataWithoutIdAndVersion } = data;
    return Object.assign({}, dataWithoutIdAndVersion, { id: _id });
  },
};
