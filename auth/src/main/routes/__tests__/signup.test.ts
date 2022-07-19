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
});
