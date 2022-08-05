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
    sut({ field: 'any_value' });
    validations.forEach((validation) => expect(validation).toHaveBeenCalled());
  });

  it('Should return  an error if an validation fails', () => {
    const { sut, validations } = makeSut();
    const error = new Error('any_error');
    validations[0].mockReturnValueOnce(error);
    const result = sut({ field: 'any_value' });
    expect(result).toEqual(error);
  });
});
