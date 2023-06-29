import { BuyAirtimeOperationBody, authenticate, buyAirtime } from "../helpers";

export async function POST(req: Request) {
  try {
    const body: BuyAirtimeOperationBody = await req.json();

    const token = await authenticate();
    const data = await buyAirtime(token, body);

    return data;
  } catch (error) {}
}
