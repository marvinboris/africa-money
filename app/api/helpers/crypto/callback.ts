type TransactionType = "buy" | "sell" | "withdraw" | "deposit";
type TransactionStatus =
  | "new"
  | "pending"
  | "cancelled"
  | "paid"
  | "order_failed"
  | "order_scheduled"
  | "failed"
  | "descriptor_failed";

interface CallbackResponse {
  payload: {
    data: {
      id: string; // Event ID
      card: {
        number: string; // Card's last 4 numbers
      };
      tx: {
        id: string; // Blockchain transaction ID
        address: string; // Blockchain address
      };
      type: TransactionType; // Transaction type
      user: {
        uuid4: string; // User's UUID V4
        country_code: string; // User's country code
      };
      amount: string; // Transaction crypto amount
      status: TransactionStatus; // Transaction status
      currency: string; // Transaction cryptocurrency
      created_at: string; // Transaction start date (YYYY-MM-DD hh:mm:ss)
      updated_at: string; // Transaction last update date (YYYY-MM-DD hh:mm:ss)
      fiat_amount: string; // Transaction fiat amount
      created_at_ts: number; // Transaction creation timestamp
      fiat_currency: string; // Transaction fiat currency
      updated_at_ts: number; // Transaction last update timestamp
      merchant_transaction_id: string; // Merchant transaction ID
    };
  };
}
