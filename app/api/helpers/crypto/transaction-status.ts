import { crypto } from "@/utils/config";
import { handleAxiosException } from "@/utils/exceptions";
import { cryptoInstance } from "@/utils/helpers";

type TransactionStatusType =
  | "paid"
  | "cancelled"
  | "failed"
  | "order_scheduled"
  | "descriptor_failed";

// Define the request payload
interface TransactionStatusRequest {
  startDate: string;
  endDate: string;
  merchantTransactionId?: string;
  status?: TransactionStatusType[];
  offset?: number;
  limit?: number;
}

// Define the response data structure
interface TransactionStatusResponse {
  status: number;
  total: number;
  next: null;
  prev: null;
  data: {
    [transactionType: string]: {
      id: string;
      transaction_id: string;
      widget_id: string;
      merchant_transaction_id: string;
      fiat_currency: string;
      fiat_amount: string;
      currency: string;
      amount: string;
      status: TransactionStatusType;
      created_at: string;
      updated_at: string;
      email: string;
    };
  }[];
}

// Make the API request
export async function getTransactionStatus(request: TransactionStatusRequest) {
  try {
    const { startDate, endDate, merchantTransactionId, status, offset, limit } =
      request;
    const response = await cryptoInstance.post<TransactionStatusResponse>(
      `/sdk-partner/transactions?widget_id=${
        crypto.widgetId
      }&date_start=${startDate}&date_end=${endDate}${
        merchantTransactionId
          ? `&merchant_transaction_id=${merchantTransactionId}`
          : ""
      }${status ? `&status=${status.join(",")}` : ""}${
        offset ? `&offset=${offset}` : ""
      }${limit ? `&limit=${limit}` : ""}`,
      request
    );
    return response.data;
  } catch (error) {
    handleAxiosException(error);
  }
}
