"use server";

import { postB2bFiatBuy } from "@/app/api/helpers/crypto/b2b/fiat/buy";
import { getB2bUserCards } from "@/app/api/helpers/crypto/b2b/user-cards";
import { BuyRequest, buyCryptocurrency } from "@/app/api/helpers/crypto/buy";
import { getFiatBuyMethods } from "@/app/api/helpers/crypto/b2b/fiat/buy-methods";
import { getLibCurrencies } from "@/app/api/helpers/crypto/lib/currencies";
import {
  GetOorBuyRatesRequest,
  getOorBuyRates,
} from "@/app/api/helpers/crypto/oor/buy-rates";
import { fetchExchangeRates } from "@/app/api/helpers/exchange-rates";
import { CashinRequest, cashin } from "@/app/api/helpers/mobile-money/cashin";

export const handleSubmit = async (data: FormData) => {
  const buyBody: BuyRequest = {
    from: data.get("fiat")?.toString()!,
    to: "USDT",
    amount: +data.get("amount")?.toString()!,
    network: "TRON",
  };

  try {
    const libCurrencies = await getLibCurrencies();
    if (!libCurrencies) return;
    console.log("libCurrencies", libCurrencies);

    const fiatBuyMethods = await getFiatBuyMethods();
    if (!fiatBuyMethods) return;
    console.log("fiatBuyMethods", fiatBuyMethods);

    const fiatBuyMethodsCard = fiatBuyMethods.data.find(
      (method) => method.payment_alias === "card"
    );
    if (!fiatBuyMethodsCard) return;
    console.log("fiatBuyMethodsCard", fiatBuyMethodsCard);

    const buyRates = await getOorBuyRates({
      from: buyBody.from,
      to: "USDT",
      amount_from: buyBody.amount.toString(),
      network: "TRON",
      payment_alias:
        fiatBuyMethodsCard.payment_alias as GetOorBuyRatesRequest["payment_alias"],
    });
    if (!buyRates) return;
    console.log("buyRates", buyRates);

    const userCards = await getB2bUserCards();
    if (!userCards) return;
    console.log("userCards", userCards);

    const fiatBuyOperation = await postB2bFiatBuy({
      address: buyRates.data.subtotal.address,
      trx_token: buyRates.data.trx_token,
      card_id: userCards.data[0].card_id,
    });
    if (!fiatBuyOperation) return;
    console.log("fiatBuyOperation", fiatBuyOperation);
    return;

    const exchangeRates = await fetchExchangeRates("XAF");

    const rate = (1 / 1.01 / exchangeRates[buyBody.from]).toFixed(2);
    const xafAmount = (buyBody.amount * +rate).toFixed(2);

    const amount = +xafAmount;
    const recipient_phone_number = data
      .get("recipient_phone_number")
      ?.toString()!;
    const service_id = data
      .get("receiving_mode")
      ?.toString()! as CashinRequest["service_id"];

    const cashinBody: CashinRequest = {
      amount,
      recipient_phone_number,
      service_id,
    };

    const res = await cashin(cashinBody);
    console.log("cashin", res);
  } catch (error) {
    console.log(error);
  }
};
