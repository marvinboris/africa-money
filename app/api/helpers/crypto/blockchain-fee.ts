import { crypto } from "@/utils/config";
import { handleAxiosException } from "@/utils/exceptions";
import { cryptoInstance } from "@/utils/helpers";

export interface BlockchainFeeResponse {
  status: number;
  data: {
    [type: string]: {
      [fiat: string]: {
        blockchain_fee: string;
        currency: string;
      };
    };
  };
}

export async function getBlockchainFee() {
  try {
    const response = await cryptoInstance.get<BlockchainFeeResponse>(
      `/widget/blockchain-fee?widget_id=${crypto.widgetId}`
    );
    return response.data;
  } catch (error) {
    handleAxiosException(error);
  }
}
