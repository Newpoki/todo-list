export const composeValidators = <TValue>(
  ...validators: Array<(value: TValue) => string | undefined>
) => (value: TValue) => {
  return validators.reduce((error: string | undefined, validator) => {
    return error || validator(value);
  }, undefined);
};
