import Client from "./client";
import { TransactionStatus } from "@/components/frontend/ui/transaction";

function getData() {
  return {
    transactions: [
      {
        number: "B1X23456",
        status: TransactionStatus.Pending,
        date: new Date(),
        name: "John Doe",
        country: "Cameroun",
        fromAmount: "500€",
        paymentMode: "VISA/Mastercard",
        toAmount: "312 565 XAF",
        paymentMethod: "Orange Money",
      },
      {
        number: "S7M89012",
        status: TransactionStatus.Completed,
        date: new Date(),
        name: "Jane Smith",
        country: "Cameroun",
        fromAmount: "250€",
        paymentMode: "VISA/Mastercard",
        toAmount: "134 725 XAF",
        paymentMethod: "Orange Money",
      },
    ],
  };
}

export default function Page() {
  const data = getData();

  return <Client transactions={data.transactions} />;
}
