import { InvalidParamError } from '@src/interface/errors';
import { fieldIsNumberValidation } from '.';

const params = {
  price: '150.21',
  title: 'any_title',
};

describe('FieldIsNumberValidation', () => {
  it('Should return null if field is a number', () => {
    expect(fieldIsNumberValidation('price')(params)).toBeNull();
  });

  it('Should return InvalidParamError if field is not a number', () => {
    expect(fieldIsNumberValidation('title')(params)).toEqual(
      new InvalidParamError('title')
    );
  });
});
