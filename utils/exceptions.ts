import { AxiosError } from "axios";

export const handleAxiosException = (error: unknown) => {
  const err = <AxiosError>error;
  console.error(err.toJSON());
  throw new Error(err.message);
};
