import { authenticate, getTransactionStatus } from "../../helpers";

export async function GET(
  req: Request,
  { params }: { params: { internalId: string } }
) {
  try {
    const { internalId } = params;

    const token = await authenticate();
    const data = await getTransactionStatus(token, internalId);

    return data;
  } catch (error) {}
}
