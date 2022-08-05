import { Validation } from '@src/interface/protocols';
import {
  fieldIsNumberValidation,
  requiredFieldValidation,
  validationComposite,
} from '@src/validation/validators';

export const makeAddTicketValidation = (): Validation => {
  const validations: Validation[] = [];
  const requiredFields = ['title', 'price'];

  for (const field of requiredFields) {
    validations.push(requiredFieldValidation(field));
  }
  validations.push(fieldIsNumberValidation('price'));
  return validationComposite(validations);
};

export const makeUpdateTicketValidation = (): Validation => {
  const validations: Validation[] = [];
  const requiredFields = ['title', 'price'];

  for (const field of requiredFields) {
    validations.push(requiredFieldValidation(field));
  }
  validations.push(fieldIsNumberValidation('price'));
  return validationComposite(validations);
};
