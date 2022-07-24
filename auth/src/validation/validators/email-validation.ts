import { Validation } from '../../interface/protocols';
import validator from 'validator';
import { InvalidParamError } from '../../interface/errors';

export const emailValidation =
  (field: string): Validation =>
  (input: any): Error | null => {
    if (!validator.isEmail(input[field])) {
      return new InvalidParamError(`${field}. ${field} must be a valid email`);
    }
    return null;
  };
