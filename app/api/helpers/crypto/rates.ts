import { crypto } from "@/utils/config";
import { handleAxiosException } from "@/utils/exceptions";
import { cryptoInstance } from "@/utils/helpers";

// Define the response data structure
export interface RatesResponse {
  status: number;
  data: {
    [transactionType: string]: {
      [cryptocurrency: string]: {
        [fiatCurrency: string]: string;
      };
    };
  };
}

// Make the API request
export async function getCurrencyRates() {
  try {
    const response = await cryptoInstance.get<RatesResponse>(
      `/public/rates?widget_id=${crypto.widgetId}`
    );
    return response.data;
  } catch (error) {
    handleAxiosException(error);
  }
}
