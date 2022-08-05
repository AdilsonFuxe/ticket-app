import { Validation } from '@src/interface/protocols';

const params = {
  price: '150.21',
  title: 'any_title',
};

const fieldIsNumberValidation =
  (field: string): Validation =>
  (input: any): Error | null => {
    return null;
  };

describe('FieldIsNumberValidation', () => {
  it('Should return null if field is a number', () => {
    expect(fieldIsNumberValidation('price')(params)).toBeNull();
  });
});
