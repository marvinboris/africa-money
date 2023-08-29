import axios from "axios";

import { exchangeRateProvider } from "@/utils/config";

interface ExchangeRatesResponse {
  result: string;
  documentation: string;
  terms_of_use: string;
  time_last_update_unix: number;
  time_last_update_utc: string;
  time_next_update_unix: number;
  time_next_update_utc: string;
  base_code: string;
  conversion_rates: { [fiat: string]: number };
}

const cache: {
  [date: string]: {
    [baseCurrency: string]: { [targetCurrency: string]: number };
  };
} = {};

function isSameWeek(date1: Date, date2: Date): boolean {
  const oneWeek = 7 * 24 * 60 * 60 * 1000; // One week in milliseconds
  const diff = Math.abs(date1.getTime() - date2.getTime());
  return diff < oneWeek;
}

export async function fetchExchangeRates(baseCurrency: string) {
  const currentDate = new Date().toISOString().slice(0, 10); // Get current date in 'YYYY-MM-DD' format

  // Check if rates for the current date are already cached
  if (cache[currentDate] && cache[currentDate][baseCurrency]) {
    console.log("Using cached exchange rate");
    return cache[currentDate][baseCurrency];
  }

  // Check if the cache needs to be cleared
  const cacheDates = Object.keys(cache);
  if (cacheDates.length > 0) {
    const lastCachedDate = new Date(cacheDates[cacheDates.length - 1]);
    const today = new Date();
    if (!isSameWeek(lastCachedDate, today)) {
      console.log("Clearing cache");
      Object.keys(cache).forEach((date) => {
        delete cache[date];
      });
    }
  }

  try {
    const response = await axios.get<ExchangeRatesResponse>(
      `https://v6.exchangerate-api.com/v6/${exchangeRateProvider.apiKey}/latest/${baseCurrency}`
    );

    const exchangeRates = response.data.conversion_rates;

    // Cache the exchange rate for the current date
    if (!cache[currentDate]) {
      cache[currentDate] = {};
    }

    cache[currentDate][baseCurrency] = exchangeRates;

    return exchangeRates;
  } catch (error) {
    console.error(`Error fetching exchange rates:`, error);
    throw error;
  }
}
