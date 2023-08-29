import { getSupportedCurrencies } from "@/app/api/helpers/crypto/currencies";
import Client from "./client";
import { fetchExchangeRates } from "@/app/api/helpers/exchange-rates";

async function getCurrencies() {
  const response = await getSupportedCurrencies();
  if (!response) return [];
  return response.data.fiat;
}

export default async function Page() {
  const currencies = await getCurrencies();
  const exchangeRates = await fetchExchangeRates("XAF");

  return <Client currencies={currencies} exchangeRates={exchangeRates} />;
}
