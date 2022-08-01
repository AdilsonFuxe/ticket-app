export const findInputs = (text: string | object): string[] => {
  const inputs = [];
  const textString = typeof text === 'object' ? JSON.stringify(text) : text;
  const inputParams = textString.match(/(?<={{)(.*?)(?=}})/g);
  if (inputParams) {
    Object.assign(inputs, inputParams);
  }

  return [...new Set(inputs)];
};

export const mergeArrays = (current, incoming, key): object => {
  const reduced = current.filter(
    (aitem) =>
      !incoming.find((bitem) => aitem[key].toString() === bitem[key].toString())
  );
  return reduced.concat(incoming);
};

export const split = (x: string): string[] => (x ? x.split(',') : []);
