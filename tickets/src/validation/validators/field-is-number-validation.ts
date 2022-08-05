import { InvalidParamError } from '@src/interface/errors';
import { Validation } from '@src/interface/protocols';

export const fieldIsNumberValidation =
  (field: string): Validation =>
  (input: any): Error | null => {
    if (isNaN(parseFloat(input[field]))) {
      return new InvalidParamError(field);
    }
    return null;
  };
