import { Validation } from '@src/interface/protocols';
import {
  requiredFieldValidation,
  validationComposite,
} from '@src/validation/validators';

export const makeSignUpValidation = (): Validation => {
  const validations: Validation[] = [];
  const requiredFields = ['email', 'password'];

  for (const field of requiredFields) {
    validations.push(requiredFieldValidation(field));
  }
  return validationComposite(validations);
};

export const makeSignInValidation = (): Validation => {
  const validations: Validation[] = [];
  const requiredFields = ['email', 'password'];

  for (const field of requiredFields) {
    validations.push(requiredFieldValidation(field));
  }
  return validationComposite(validations);
};
