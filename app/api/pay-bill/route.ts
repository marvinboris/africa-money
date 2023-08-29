import { PayBillOperation, authenticate, payBill } from "../helpers/mobile-money";

export async function POST(req: Request) {
  try {
    const body: PayBillOperation = await req.json();

    const token = await authenticate();
    const data = await payBill(token, body);

    return data;
  } catch (error) {}
}
