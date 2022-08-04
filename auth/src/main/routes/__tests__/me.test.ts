import request from 'supertest';
import { MongoHelper } from '@src/infra/db/mongoose/helper';
import { UserModel } from '@src/infra/db/mongoose/models';
import app from '@src/main/config/app';

describe('POST /api/users/me', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL);
  });

  afterAll(async () => {
    await MongoHelper.disconnect();
  });

  beforeEach(async () => {
    await UserModel.deleteMany({});
  });
  it('Should responds with details about the current user', async () => {
    const signupResponse = await request(app)
      .post('/api/users/signup')
      .send({
        email: 'teste@test.co.ao',
        password: '12ewddwdwi',
      })
      .expect(201);

    const response = await request(app)
      .get('/api/users/me')
      .set('Cookie', signupResponse.get('Set-Cookie'))
      .expect(200);
    expect(response.body.currentUser.email).toBe('teste@test.co.ao');
  });

  it('Should return 403  if not authenticated', async () => {
    await request(app).get('/api/users/me').expect(403);
  });
});
