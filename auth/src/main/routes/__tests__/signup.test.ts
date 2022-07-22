import request from 'supertest';
import app from '../../config/app';

describe('POST /api/users/signup', () => {
  it('Should return 201 on successful signup', async () => {
    await request(app)
      .post('/api/users/signup')
      .send({
        email: 'teste@test.co.ao',
        password: '12ewddwdwi',
      })
      .expect(201);
  });

  it('Should return 400 with missing email or password', async () => {
    await request(app)
      .post('/api/users/signup')
      .send({
        email: 'any_email@mail.co.ao',
      })
      .expect(400);

    await request(app)
      .post('/api/users/signup')
      .send({ password: 'anusd2wuh' })
      .expect(400);
  });
});
