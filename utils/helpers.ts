import axios, { AxiosRequestConfig } from "axios";
import jwt from "jsonwebtoken";

import { crypto, mobileMoney } from "./config";

export const classNames = (...c: string[]) => c.join(" ");

export const cryptoInstance = axios.create({
  baseURL: crypto.baseUrl,
  validateStatus: () => true,
});

export const mobileMoneyInstance = axios.create({
  baseURL: mobileMoney.baseUrl,
  auth: {
    username: mobileMoney.username,
    password: mobileMoney.password,
  },
});

export const buildQueryString = (request: { [key: string]: any }): string => {
  let queryString = "";
  for (const key in request) {
    if (request.hasOwnProperty(key)) {
      queryString += `${key}=${request[key]}&`;
    }
  }
  return queryString.slice(0, -1); // Removing the trailing '&' character
};

export const signToken = (id: string) => {
  const expiresIn = 60 * 60 * 24 * 7; // 7 days
  const token = jwt.sign({ id }, process.env.JWT_SECRET!, {
    expiresIn,
  });
  return { token, expiresAt: Date.now() + expiresIn * 1000 };
};

export function axiosToCurl(config: AxiosRequestConfig) {
  let curl = "curl";

  // Method
  curl += ` -X ${config.method?.toUpperCase()}`;

  // Headers
  for (const key in config.headers) {
    curl += ` -H "${key}: ${config.headers[key]}"`;
  }

  // Data
  if (config.data) {
    curl += ` -d '${JSON.stringify(config.data)}'`;
  }

  // URL
  curl += ` ${config.url}`;

  return curl;
}
