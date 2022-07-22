import request from 'supertest';
import app from '../../config/app';

describe('POST /api/users/signin', () => {
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
});
