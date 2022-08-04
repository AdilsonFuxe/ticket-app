import request from 'supertest';
import { MongoHelper } from '@src/infra/db/mongoose/helper';
import { UserModel } from '@src/infra/db/mongoose/models';
import app from '@src/main/config/app';

describe('POST /api/users/signin', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL);
  });

  afterAll(async () => {
    await MongoHelper.disconnect();
  });

  beforeEach(async () => {
    await UserModel.deleteMany({});
  });
  it('Should return 200 on successful signin', async () => {
    await request(app)
      .post('/api/users/signup')
      .send({
        email: 'any_mail@mail.co.ao',
        password: '12ewddwdwi',
      })
      .expect(201);

    await request(app)
      .post('/api/users/signin')
      .send({
        email: 'any_mail@mail.co.ao',
        password: '12ewddwdwi',
      })
      .expect(200);
  });

  it('Should return 401 when an email that not exists is provided', async () => {
    await request(app)
      .post('/api/users/signin')
      .send({
        email: 'any_mail@mail.co.ao',
        password: '12ewddwdwi',
      })
      .expect(401);
  });

  it('Should return 401 when an incorrect password is provided', async () => {
    await request(app)
      .post('/api/users/signup')
      .send({
        email: 'any_mail@mail.co.ao',
        password: '12ewddwdwi',
      })
      .expect(201);

    await request(app)
      .post('/api/users/signin')
      .send({
        email: 'any_mail@mail.co.ao',
        password: '13e28383s',
      })
      .expect(401);
  });

  it('Should set a cookie when given valid credentials', async () => {
    await request(app)
      .post('/api/users/signup')
      .send({
        email: 'any_mail@mail.co.ao',
        password: '12ewddwdwi',
      })
      .expect(201);

    const response = await request(app)
      .post('/api/users/signin')
      .send({
        email: 'any_mail@mail.co.ao',
        password: '12ewddwdwi',
      })
      .expect(200);
    expect(response.get('Set-Cookie')).toBeDefined();
  });
});
