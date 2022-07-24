import { Validation } from '../../interface/protocols';
import { InvalidParamError } from '../../interface/errors';

export const fieldLengthValidation =
  (field: string, min: number, max: number): Validation =>
  (input: any): Error | null => {
    if (input[field]) {
      const length = input[field].length;
      if (length < min || length > max) {
        return new InvalidParamError(
          `${field}. ${field} must be between ${min} and ${max} characters`
        );
      }
    }
    return null;
  };
