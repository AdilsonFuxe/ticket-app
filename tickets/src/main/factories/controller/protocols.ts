import { Validation } from '@src/interface/protocols';
import {
  requiredFieldValidation,
  validationComposite,
} from '@src/validation/validators';

export const makeAddTicketValidation = (): Validation => {
  const validations: Validation[] = [];
  const requiredFields = ['title', 'price'];

  for (const field of requiredFields) {
    validations.push(requiredFieldValidation(field));
  }

  return validationComposite(validations);
};
