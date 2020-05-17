import { format } from "date-fns";

interface IFormatToFrDateOptions {
  withHours: boolean;
}

const defaultOptions = {
  withHours: false,
};

export const formatToFrDate = (timestamp: string, options?: Partial<IFormatToFrDateOptions>) => {
  const date = new Date();

  const overrideOptions: IFormatToFrDateOptions = {
    ...defaultOptions,
    ...options,
  };

  const dateFormat = overrideOptions.withHours ? "dd/MM/yyyy à kk:mm:ss" : "dd/MM/yyyy";

  return format(date, dateFormat);
};
