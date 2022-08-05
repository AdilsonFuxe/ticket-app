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
});
