import { Validation } from '../../interface/protocols';

export const validationComposite =
  (validations: Validation[]): Validation =>
  (input: any): Error | null => {
    for (const validation of validations) {
      const error = validation(input);
      if (error) {
        return error;
      }
    }
    return null;
  };
