import { handleAxiosException } from "@/utils/exceptions";
import { buildQueryString, cryptoInstance } from "@/utils/helpers";

export interface GetOorBuyRatesRequest {
  from: string;
  to: string;
  amount_from?: string;
  amount_to?: string;
  network?: string;
  payment_alias?: "card" | "iban_exchange" | "iban_invoice";
}

export interface GetOorBuyRatesResponse {
  data: {
    amount: string;
    currency: string;
    fee: {
      [currency: string]: string;
    };
    fiat_amount: string;
    fiat_currency: string;
    rate: string;
    subtotal: {
      [currency: string]: string;
    };
    total: {
      [currency: string]: string;
    };
    trx_token: string;
  };
  status: string;
}

export async function getOorBuyRates(request: GetOorBuyRatesRequest) {
  try {
    // Loop throught all attributes of request parameter and turn them into query string
    const queryString = buildQueryString(request);
    const response = await cryptoInstance.get<GetOorBuyRatesResponse>(
      `/oor/buy-rates${queryString ? `?${queryString}` : ""}`
    );
    return response.data;
  } catch (error) {
    handleAxiosException(error);
  }
}
