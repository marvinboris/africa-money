import { handleAxiosException } from "@/utils/exceptions";
import { buildQueryString, cryptoInstance } from "@/utils/helpers";

export interface GetB2bTransactionsRequest {
  merchant_transaction_id?: string;
  date_start?: string;
  date_end?: string;
  status?: string;
  limit?: string;
  offset?: string;
}

export interface GetB2bTransactionsResponse {
  data: {
    address: string;
    created_at: string;
    crypto_amount: string;
    crypto_currency: string;
    fee: string;
    fiat_amount: string;
    fiat_currency: string;
    merchant_transaction_id: string;
    status: string;
    total_amount: string;
    type: string;
    updated_at: string;
    user_uuid: string;
  }[];
  next: string;
  prev: string;
  status: string;
  total: string;
}

export async function getB2bFiatTransactions(
  request: GetB2bTransactionsRequest
) {
  try {
    const queryString = buildQueryString(request);
    const response = await cryptoInstance.get(
      `/b2b/transactions${queryString ? "?" + queryString : ""}`
    );
    return response.data;
  } catch (error) {
    handleAxiosException(error);
  }
}
