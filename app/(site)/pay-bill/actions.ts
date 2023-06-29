"use server";

import { PayBillOperation, authenticate, payBill } from "../../api/helpers";

export const handleSubmit = async (data: FormData) => {
  const body: PayBillOperation = {
    payItemId: data.get("payItemId")?.toString()!,
    service_number: data.get("bill_number")?.toString()!,
    service: data.get("bill_type")?.toString()!,
    tel: data.get("tel")?.toString()!,
    amount: data.get("amount")?.toString()!,
    email: data.get("payer_email")?.toString()!,
    name: data.get("payer_name")?.toString()!,
    external_id: data.get("external_id")?.toString()!,
  };

  try {
    const token = await authenticate();
    const res = await payBill(token, body);

    return res;

    // Redirect to /pay-bill/success
    // router.push("/pay-bill/success");
  } catch (error) {
    console.log(error);
  }
};
