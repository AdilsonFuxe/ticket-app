import request from 'supertest';
import app from '@src/main/config/app';
import { MongoHelper } from '@src/infra/db/mongoose/helper';
import { UserModel } from '@src/infra/db/mongoose/models';

describe('POST /api/users/signout', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL);
  });

  afterAll(async () => {
    await MongoHelper.disconnect();
  });

  beforeEach(async () => {
    await UserModel.deleteMany({});
  });
  it('Should clear the cookie after signing out', async () => {
    const signupResponse = await request(app)
      .post('/api/users/signup')
      .send({
        email: 'teste@test.co.ao',
        password: '12ewddwdwi',
      })
      .expect(201);

    const response = await request(app)
      .post('/api/users/signout')
      .set('Cookie', signupResponse.get('Set-Cookie'))
      .expect(204);
    expect(response.get('Set-Cookie')).toBeDefined();
  });
});
