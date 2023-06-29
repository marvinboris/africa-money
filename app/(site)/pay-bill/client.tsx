"use client";

import Mode from "@/components/frontend/ui/mode";
import Input from "@/components/frontend/ui/form/input";
import PageLayout from "@/components/frontend/ui/page-layout";

import { handleSubmit } from "./actions";

export default function Client() {
  return (
    <PageLayout
      title="Payer une facture"
      description={
        <span className="font-normal">
          Payez vos factures instantanément depuis le monde entier
        </span>
      }
    >
      <form className="w-full py-4 space-y-3" action={handleSubmit}>
        <input type="hidden" name="payItemId" value="1" />
        <input type="hidden" name="external_id" value="1" />
        <input type="hidden" name="payer_name" value="Boris Ndouma" />
        <input type="hidden" name="payer_email" value="jaris.ultio.21@gmail.com" />
        <input type="hidden" name="tel" value="237655588688" />

        <div className="py-3 grid grid-cols-1 gap-2 font-semibold">
          <Mode
            id="to-country"
            label="Pays"
            name="to_country"
            options={[{ value: "CM", children: "Cameroun" }]}
          />
          <Mode
            id="bill-type"
            label="Choisir une facture"
            name="bill_type"
            options={[
              { value: "eneo", children: "Electricité" },
              { value: "camwater", children: "Eau" },
            ]}
          />
        </div>

        <div className="gap-1 py-2 grid grid-cols-1">
          <Input
            label="Numéro de facture"
            name="bill_number"
            defaultValue="093099828737090"
          />
          <Input
            label="Montant"
            type="number"
            append="XAF"
            name="amount"
            defaultValue="1350"
          />
        </div>

        <div className="mt-3 py-3 grid grid-cols-1 gap-2 font-semibold">
          <Mode
            id="payment-method"
            label="Mode de paiement"
            name="payment_method"
            options={[
              { value: "visa", children: "Visa" },
              { value: "mastercard", children: "Mastercard" },
            ]}
          />
        </div>

        <div className="mt-3">
          <button className="btn btn-block">Continuer</button>
        </div>
      </form>
    </PageLayout>
  );
}
