import { handleAxiosException } from "@/utils/exceptions";
import { cryptoInstance } from "@/utils/helpers";

export interface GetLibCurrenciesResponse {
  data: {
    config: {
      base: { [stable_coin: string]: string };
      crypto_currencies: {
        currency: string;
        network: string;
        network_label: string;
        show_network_icon: boolean;
      }[];
      default_networks: { [crypto: string]: string };
      display_options: {
        [currency: string]: {
          display_digits: number;
          fullname: string;
          total_digits: number;
        };
      };
      has_withdrawal_fee: {
        [crypto: string]: boolean;
        BTC: true;
        BUSD: false;
        USDT: true;
      };
      icons: {
        [fiat: string]: {
          png: string;
          relative: {
            png: string;
            svg: string;
          };
          svg: string;
        };
      };
      networks: {
        [network: string]: {
          icons: {
            png: string;
            relative: {
              png: string;
              svg: string;
            };
            svg: string;
          };
          name: string;
        };
      };
    };
    crypto: string[];
    fiat: string[];
  };
  status: string;
}

export async function getLibCurrencies() {
  try {
    const response = await cryptoInstance.get<GetLibCurrenciesResponse>(
      "/lib/currencies"
    );
    return response.data;
  } catch (error) {
    handleAxiosException(error);
  }
}
