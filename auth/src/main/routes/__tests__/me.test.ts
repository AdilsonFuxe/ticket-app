import app from '../../config/app';
import request from 'supertest';

describe('POST /api/users/me', () => {
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
});
