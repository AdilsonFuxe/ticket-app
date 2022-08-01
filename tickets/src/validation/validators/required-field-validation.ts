import { MissingParamError } from '@src/interface/errors';
import { Validation } from '@src/interface/protocols';

export const requiredFieldValidation =
  (field: string): Validation =>
  (input: any): Error | null => {
    if (!input[field]) {
      return new MissingParamError(field);
    }
    return null;
  };
