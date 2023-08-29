import axios from "axios";
import { bills } from "@/utils/config";

const { baseUrl, username, password } = bills;

// Function to authenticate and get the access token
export async function authenticate() {
  const url = `${baseUrl}/authenticate`;

  try {
    const response = await axios.post<TokenResp>(url, {
      username,
      password,
    });

    const { status, token } = response.data;
    if (status === '01') {
      return token;
    } else {
      throw new Error("Authentication failed.");
    }
  } catch (error) {
    throw new Error("Failed to authenticate.");
  }
}

// Function to perform airtime top-up
export async function buyAirtime(token: string, body: BuyAirtimeOperationBody) {
  const url = `${baseUrl}/buy_airtime`;

  try {
    const response = await axios.post<BuyAirtimeResponse>(url, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    throw new Error("Failed to perform airtime top-up.");
  }
}

// Function to search bills to be paid
export async function searchBill(token: string, body: SearchBillOperation) {
  const url = `${baseUrl}/search_bill`;

  try {
    const response = await axios.post<SearchBillResponse>(url, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    throw new Error("Failed to search bills.");
  }
}

// Function to pay a bill
export async function payBill(token: string, body: PayBillOperation) {
  const url = `${baseUrl}/pay_bill`;

  try {
    const response = await axios.post<PayBillResponse>(url, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    throw new Error("Failed to pay the bill.");
  }
}

// Function to get the status of a transaction
export async function getTransactionStatus(token: string, internalId: string) {
  const url = `${baseUrl}/iwomipayStatus/${internalId}`;

  try {
    const response = await axios.get<StatusResponse>(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    throw new Error("Failed to get transaction status.");
  }
}

// Interfaces for API request and response objects
export interface TokenResp {
  status: string;
  token: string;
  message: string;
}

export interface BuyAirtimeOperationBody {
  service: string;
  tel: string;
  amount: string;
  external_id: string;
}

export interface BuyAirtimeResponse {
  status: string;
  message: string;
  external_id: string;
  internal_id: string;
}

export interface SearchBillOperation {
  service: string;
  external_id: string;
}

export interface SearchBillResponse {
  status: string;
  message: string;
  external_id: string;
  internal_id: string;
  amount: string;
  customer_id: string;
}

export interface PayBillOperation {
  payItemId: string;
  tel: string;
  amount: string;
  external_id: string;
  service: string;
  service_number: string;
  email: string;
  name: string;
}

export interface PayBillResponse {
  status: string;
  message: string;
  external_id: string;
  internal_id: string;
  amount: string;
}

export interface StatusResponse {
  status: string;
  message: string;
  external_id: string;
  internal_id: string;
  amount: string;
  customer_id: string;
  payment_status: string;
}
