import { handleAxiosException } from "@/utils/exceptions";
import { cryptoInstance } from "@/utils/helpers";

export interface PostB2bFiatBuyRequest {
  trx_token: string;
  address: string;
  merchant_transaction_id?: string;
  card_id?: string;
  theme?: string;
}

export interface PostB2bFiatBuyResponse {
  data: {
    merchant_transaction_id: string;
    redirect_url: string;
  };
  status: string;
}

export async function postB2bFiatBuy(request: PostB2bFiatBuyRequest) {
  try {
    const response = await cryptoInstance.post<PostB2bFiatBuyResponse>(
      "/b2b/fiat/buy",
      request
    );
    return response.data;
  } catch (error) {
    handleAxiosException(error);
  }
}
