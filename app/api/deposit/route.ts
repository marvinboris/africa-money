import { NextResponse } from "next/server";

import { cashin } from "../helpers/mobile-money/cashin";

export async function GET(req: Request) {
  try {
    // const body = await req.json();

    const data = await cashin({
        amount: 4400,
        recipient_phone_number: '655728725',
        service_id: "CASHINOMCMPART2",
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ message: (<Error>error).message });
  }
}
