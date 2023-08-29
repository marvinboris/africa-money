import { NextResponse } from "next/server";

import { postB2bFiatBuy } from "../helpers/crypto/b2b/fiat/buy";
import { getFiatBuyMethods } from "../helpers/crypto/b2b/fiat/buy-methods";
import {
  GetOorBuyRatesRequest,
  getOorBuyRates,
} from "../helpers/crypto/oor/buy-rates";
import { getB2bUserCards } from "../helpers/crypto/b2b/user-cards";
import { BuyRequest } from "../helpers/crypto/buy";

export async function GET(req: Request) {
  try {
    // const body = await req.json();

    const buyBody: BuyRequest = {
      from: "USD",
      to: "USDT",
      amount: 10,
      network: "TRON",
    };

    console.log("getFiatBuyMethods -> start");
    const fiatBuyMethods = await getFiatBuyMethods();
    if (!fiatBuyMethods) return;
    console.log("getFiatBuyMethods -> end", fiatBuyMethods);

    const fiatBuyMethodsCard = fiatBuyMethods.data.find(
      (method) => method.payment_alias === "card"
    );
    if (!fiatBuyMethodsCard) return;

    console.log("getOorBuyRates -> start");
    const buyRates = await getOorBuyRates({
      from: buyBody.from,
      to: "USDT",
      amount_from: buyBody.amount.toString(),
      network: "TRON",
      payment_alias:
        fiatBuyMethodsCard.payment_alias as GetOorBuyRatesRequest["payment_alias"],
    });
    if (!buyRates) return;
    console.log("getOorBuyRates -> end", buyRates);

    console.log("getB2bUserCards -> start");
    const userCards = await getB2bUserCards();
    if (!userCards) return;
    console.log("getB2bUserCards -> end", userCards);

    console.log("postB2bFiatBuy -> start");
    const fiatBuyOperation = await postB2bFiatBuy({
      address: buyRates.data.subtotal.address,
      trx_token: buyRates.data.trx_token,
      card_id: userCards.data[0].card_id,
    });
    if (!fiatBuyOperation) return;
    console.log("postB2bFiatBuy -> end", fiatBuyOperation);

    return NextResponse.json({ message: "Done" });
  } catch (error) {
    return NextResponse.json({ message: (<Error>error).message });
  }
}
