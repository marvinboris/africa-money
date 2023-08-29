import axios from "axios";

// Define the request payload
interface SellRequest {
  widget_id: string;
  type: "sell";
  amount: number;
  currency: string;
  fiat_amount?: number;
  fiat_currency?: string;
  return_url?: string;
}

// Define the response data structure
interface SellResponse {
  id: string;
  payment_url: string;
}

// Make the API request
async function sellCryptocurrency(request: SellRequest): Promise<SellResponse> {
  try {
    const response = await axios.post<SellResponse>(
      "/public/widget/sell",
      request
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to initiate cryptocurrency sale");
  }
}
