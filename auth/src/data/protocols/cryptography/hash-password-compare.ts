export type HashPasswordCompare = (
  value: string,
  hash: string
) => Promise<boolean>;
