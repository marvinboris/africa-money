import { crypto } from "@/utils/config";
import { handleAxiosException } from "@/utils/exceptions";
import { cryptoInstance } from "@/utils/helpers";

type SupportedCurrenciesResponse = {
  status: number;
  data: {
    fiat: string[];
    crypto: string[];
    config: {
      base: { [crypto: string]: string };
      has_withdrawal_fee: { [crypto: string]: boolean };
      display_options: {
        [fiat: string]: {
          fullname: string;
          total_digits: number;
          display_digits: number;
        };
      };
      icons: {
        [fiat: string]: {
          svg: string;
          relative: { svg: string; png: string };
          png: string;
        };
      };
      networks: {
        [network: string]: {
          name: string;
          icons: {
            svg: string;
            relative: { svg: string; png: string };
            png: string;
          };
        };
      };
      crypto_currencies: {
        currency: string;
        network: string;
        show_network_icon: boolean;
        network_label: string;
        contract: string;
        network_ud?: string;
      }[];
      default_networks: {
        [crypto: string]: string;
      };
    };
  };
};

interface CurrenciesResponse {
  status: number;
  data: string[];
}

interface MinOrMaxLimitsRequest {
  from: string; // Fiat
  to: string; // Crypto
  type: "buy" | "sell";
}

interface MinOrMaxLimitsResponse {
  status: number;
  code: number;
  message: string;
  data: {
    [currency: string]: {
      max: string;
      min: string;
    };
  };
}

export async function getSupportedCurrencies() {
  try {
    const response = await cryptoInstance.get<SupportedCurrenciesResponse>(
      `/lib/currencies`
    );
    return response.data;
  } catch (error) {
    handleAxiosException(error);
  }
}

export async function getBuyableCurrencies() {
  try {
    const response = await cryptoInstance.get<CurrenciesResponse>(
      `/public/currencies-buy`
    );
    return response.data;
  } catch (error) {
    handleAxiosException(error);
  }
}

export async function getSellableCurrencies() {
  try {
    const response = await cryptoInstance.get<CurrenciesResponse>(
      `/public/currencies-sell`
    );
    return response.data;
  } catch (error) {
    handleAxiosException(error);
  }
}

export async function getMinOrMaxLimits(request: MinOrMaxLimitsRequest) {
  try {
    const { from, to, type } = request;
    const response = await cryptoInstance.get<MinOrMaxLimitsResponse>(
      `/public/currency-limits?from=${from}&to=${to}&type=${type}&widget_id=${crypto.widgetId}`
    );
    return response.data;
  } catch (error) {
    handleAxiosException(error);
  }
}
