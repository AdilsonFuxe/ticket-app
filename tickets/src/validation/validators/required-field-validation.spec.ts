import { MissingParamError } from '@src/interface/errors';
import { requiredFieldValidation } from './required-field-validation';

const params = {
  title: 'any_title',
  price: 'any_price',
};

describe('RequiredFieldValidation', () => {
  it('should return null if all parameters are sent', () => {
    expect(requiredFieldValidation('title')(params)).toBeNull();
    expect(requiredFieldValidation('price')(params)).toBeNull();
  });

  it('should return MissingParamError if any parameter is missing', () => {
    expect(requiredFieldValidation('title')({ price: 'any_price' })).toEqual(
      new MissingParamError('title')
    );
    expect(requiredFieldValidation('price')({ title: 'any_title' })).toEqual(
      new MissingParamError('price')
    );
  });
});
