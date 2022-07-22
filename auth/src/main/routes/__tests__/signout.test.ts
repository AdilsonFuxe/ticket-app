import app from '../../config/app';
import request from 'supertest';

describe('POST /api/users/signout', () => {
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
