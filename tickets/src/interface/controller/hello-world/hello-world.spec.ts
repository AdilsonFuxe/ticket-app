import { HttpRequest } from '@src/interface/protocols';
import { helloWordController } from '.';


export const mockHttpRequest = (): HttpRequest => ({
  body: {}
});

const makeSut = () => {
  const sut = helloWordController();
  return { sut };
};

describe('HelloWorldController', () => {
  it('Should return 200 on success', async() => {
      const { sut } = makeSut();
      const httpResponse = await sut(mockHttpRequest());
      expect(httpResponse.statusCode).toBe(200);
  });
});