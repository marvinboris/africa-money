import { crypto } from "@/utils/config";
import { handleAxiosException } from "@/utils/exceptions";
import { cryptoInstance } from "@/utils/helpers";

// Define the request payload
export interface BuyRequest {
  from: string; // Fiat currency
  to: string; // Cryptocurrency
  amount: number; // Fiat amount
  type?: string; // Transaction type
  network?: string; // Cryptocurrency network
}

// Define the response data structure
interface BuyResponse {
  status: number;
  data: {
    buy_token: string;
    currency: string;
    amount: string; // Cryptocurrency amount
    fiat_amount: string; // Fiat amount
    fiat_currency: string; // Fiat currency
    rate: string; // Crypto/Fiat rate
    fee: {
      [currencyOrFiat: string]: string;
    };
    subtotal: {
      [currencyOrFiat: string]: string;
    };
    total: {
      [currencyOrFiat: string]: string;
    };
    kyc_limit_exceeded: boolean;
  };
}

// Make the API request
export async function buyCryptocurrency(request: BuyRequest) {
  try {
    const { from, to, amount, network } = request;
    const response = await cryptoInstance.post<BuyResponse>(
      `/widget/buy/rate?from=${from}&to=${to}&amount=${amount}&widget_id=${
        crypto.widgetId
      }${network ? `&network=${network}` : ""}`,
      request
    );
    return response.data;
  } catch (error) {
    handleAxiosException(error);
  }
}
