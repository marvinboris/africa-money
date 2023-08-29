"use client";

import Mode from "@/components/frontend/ui/mode";
import Input from "@/components/frontend/ui/form/input";
import PageLayout from "@/components/frontend/ui/page-layout";
import React from "react";
import { handleSubmit } from "./actions";

export default function Client({
  currencies,
  exchangeRates,
}: {
  currencies: string[];
  exchangeRates: { [targetCurrency: string]: number };
}) {
  const [value, setValue] = React.useState({
    fiat: "EUR",
    amount: "100.00",
    recipient_phone_number: "612345678",
    payment_method: "visa",
    receiving_mode: "CASHINMTNCMPART",
  });
  const rate = (1 / 1.01 / exchangeRates[value.fiat]).toFixed(2);

  // Handlers
  const inputChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setValue((prev) => ({ ...prev, [name]: value }));
  };

  // Options
  const fiatOptions = currencies.map((fiat) => (
    <option key={"fiat-" + fiat} value={fiat}>
      {fiat}
    </option>
  ));

  return (
    <PageLayout
      title="Envoyer de l’argent"
      description={
        <span className="font-normal">
          Quel montant souhaitez-vous envoyer sur des portefeuilles mobiles ?
        </span>
      }
    >
      <form className="w-full py-4 space-y-3" action={handleSubmit}>
        <div className="gap-1 py-2 grid grid-cols-1">
          <Input
            label="Vous envoyez"
            name="amount"
            type="number"
            append={
              <select
                name="fiat"
                className="bg-transparent block border-0 outline-none p-0 text-reset"
                onChange={inputChangeHandler}
                value={value.fiat}
              >
                {fiatOptions}
              </select>
            }
            onChange={inputChangeHandler}
            value={value.amount}
          />
          <Input
            label="Le destinataire reçoit"
            type="number"
            append="XAF"
            readOnly
            value={(+value.amount * +rate).toFixed(2)}
          />
        </div>

        <div className="flex justify-between mt-3 font-semibold">
          <span className="text-gray-800">
            1 {value.fiat} = {rate} XAF*
          </span>
          <span className="cursor-pointer text-forest-green">
            Afficher les frais
          </span>
        </div>

        <div className="mt-3 py-3 grid grid-cols-1 gap-2 font-semibold">
          <Mode
            id="payment-method"
            label="Mode de paiement"
            name="payment_method"
            onChange={inputChangeHandler}
            value={value.payment_method}
            options={[
              { value: "visa", children: "Visa" },
              { value: "mastercard", children: "Mastercard" },
            ]}
          />
          <Mode
            id="receiving-mode"
            label="Mode de réception"
            name="receiving_mode"
            onChange={inputChangeHandler}
            value={value.receiving_mode}
            options={[
              { value: "CASHINMTNCMPART", children: "MTN Mobile Money" },
              { value: "CASHINOMCMPART2", children: "Orange Money" },
              { value: "CM_CASHIN_YOOMEE_PART", children: "Yoomee Money" },
            ]}
          />
          <Input
            label="Numéro de téléphone"
            name="recipient_phone_number"
            onChange={inputChangeHandler}
            value={value.recipient_phone_number}
          />
        </div>

        <div className="mt-3">
          <button className="btn btn-block">Continuer</button>
        </div>
      </form>
    </PageLayout>
  );
}
