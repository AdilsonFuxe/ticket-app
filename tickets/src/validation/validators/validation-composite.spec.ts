import { validationComposite } from './validation-composite';

const mockValidation = () => null;

const makeSut = () => {
  const validations = [
    jest.fn(mockValidation),
    jest.fn(mockValidation),
    jest.fn(mockValidation),
  ];
  const sut = validationComposite(validations);
  return { sut, validations };
};

describe('ValidationComposite', () => {
  it('Should calls  all validations', () => {
    const { sut, validations } = makeSut();
    sut({});
    validations.forEach((validation) => expect(validation).toHaveBeenCalled());
  });
});
