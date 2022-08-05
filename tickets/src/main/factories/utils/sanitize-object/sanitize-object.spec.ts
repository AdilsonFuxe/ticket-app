import { sanitizeObject } from '.';

const data = {
  price: 'any_price',
  title: 'any_title',
};

describe('SanitizeObject', () => {
  it('Should return only allowed fields on success', () => {
    const result = sanitizeObject(
      {
        ...data,
        id: 'any_id',
      },
      ['price', 'title']
    );
    expect(result).toEqual(data);
  });
});
