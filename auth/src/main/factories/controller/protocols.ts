import { Validation } from '../../../interface/protocols';
import {
  requiredFieldValidation,
  validationComposite,
  emailValidation,
} from '../../../validation/validators';

export const makeSignUpValidation = (): Validation => {
  const validations: Validation[] = [];
  const requiredFields = ['email', 'password'];

  for (const field of requiredFields) {
    validations.push(requiredFieldValidation(field));
  }
  validations.push(emailValidation('email'));
  return validationComposite(validations);
};

export const makeSignInValidation = (): Validation => {
  const validations: Validation[] = [];
  const requiredFields = ['email', 'password'];

  for (const field of requiredFields) {
    validations.push(requiredFieldValidation(field));
  }
  validations.push(emailValidation('email'));
  return validationComposite(validations);
};
