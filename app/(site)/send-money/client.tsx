import Mode from "@/components/frontend/ui/mode";
import Input from "@/components/frontend/ui/form/input";
import PageLayout from "@/components/frontend/ui/page-layout";

export default function Client() {
  return (
    <PageLayout
      title="Envoyer de l’argent"
      description={
        <span className="font-normal">
          Quel montant souhaitez-vous envoyer sur des portefeuilles mobiles ?
        </span>
      }
    >
      <form className="w-full py-4 space-y-3">
        <div className="gap-1 py-2 grid grid-cols-1">
          <Input
            label="Vous envoyez"
            name="from_amount"
            type="number"
            append={
              <select
                name="currency_from"
                className="bg-transparent block border-0 outline-none p-0 text-reset"
              >
                <option value="eur">EUR</option>
              </select>
            }
            defaultValue="1500.00"
          />
          <Input
            label="Le destinataire reçoit"
            type="number"
            append="XAF"
            readOnly
            defaultValue="1350.00"
          />
        </div>

        <div className="flex justify-between mt-3 font-semibold">
          <span className="text-gray-800">1 EUR = 650,34 XAF*</span>
          <span className="cursor-pointer text-forest-green">
            Afficher les frais
          </span>
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
          <Mode
            id="receiving-mode"
            label="Mode de réception"
            name="receiving_mode"
            options={[
              { value: "momo", children: "MTN Mobile Money" },
              { value: "om", children: "Orange Money" },
              { value: "ym", children: "Yoomee Money" },
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
