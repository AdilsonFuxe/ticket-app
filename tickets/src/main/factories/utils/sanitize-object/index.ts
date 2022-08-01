import { SanitizeObj } from '@src/interface/protocols';

export const sanitizeObject: SanitizeObj = (
  data: any,
  allowedFields: string[]
): any => {
  const sanitizedData = allowedFields.reduce((acc, key) => {
    if (data[key]) return { ...acc, [key]: data[key] };
    return acc;
  }, {});
  return sanitizedData;
};
