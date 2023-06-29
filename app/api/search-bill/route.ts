import { SearchBillOperation, authenticate, searchBill } from "../helpers";

export async function POST(req: Request) {
  try {
    const body: SearchBillOperation = await req.json();

    const token = await authenticate();
    const data = await searchBill(token, body);

    return data;
  } catch (error) {}
}
