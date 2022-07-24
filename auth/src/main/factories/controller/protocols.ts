import { Validation } from '../../../interface/protocols';
import {
  requiredFieldValidation,
  validationComposite,
  emailValidation,
  fieldLengthValidation,
} from '../../../validation/validators';

export const makeSignUpValidation = (): Validation => {
  const validations: Validation[] = [];
  const requiredFields = ['email', 'password'];

  for (const field of requiredFields) {
    validations.push(requiredFieldValidation(field));
  }
  validations.push(emailValidation('email'));
  validations.push(fieldLengthValidation('password', 5, 20));
  return validationComposite(validations);
};

export const makeSignInValidation = (): Validation => {
  const validations: Validation[] = [];
  const requiredFields = ['email', 'password'];

  for (const field of requiredFields) {
    validations.push(requiredFieldValidation(field));
  }
  validations.push(emailValidation('email'));
  validations.push(fieldLengthValidation('password', 5, 20));
  return validationComposite(validations);
};
