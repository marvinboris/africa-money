import { handleAxiosException } from "@/utils/exceptions";
import { cryptoInstance } from "@/utils/helpers";

export interface GetFiatBuyMethods {
  data: {
    currencies: string[];
    payment_alias: string;
    title: string;
  }[];
  status: string;
}

export async function getFiatBuyMethods() {
  try {
    const response = await cryptoInstance.get<GetFiatBuyMethods>(
      "/b2b/fiat/buy-methods"
    );
    return response.data;
  } catch (error) {
    handleAxiosException(error);
  }
}
