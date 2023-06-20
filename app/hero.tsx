import Input from "@/components/frontend/ui/form/input";

type Props = {
  label: React.ReactNode;
  id: string;
  name: string;
  options: {
    value: string;
    children: React.ReactNode;
  }[];
};
function Mode(props: Props) {
  return (
    <div className="flex items-center justify-between">
      <label htmlFor={props.id}>{props.label}</label>
      <select
        name={props.name}
        id={props.id}
        className="border-[.5px] border-gray-400 rounded py-1 px-4 text-forest-green"
      >
        {props.options.map((o, i) => (
          <option key={"option-" + props.id + "-" + i} {...o} />
        ))}
      </select>
    </div>
  );
}

export default function Hero() {
  return (
    <header>
      <div className="container pt-8 pb-[72px] lg:pt-[120px] lg:pb-[120px] lg:flex justify-between items-center">
        <section className="lg:w-[600px] flex-none">
          <h2 className="text-[32px] lg:text-6xl font-extrabold text-zinc-900">
            Payez ou transférez de l’argent vers l’Afrique
          </h2>

          <p className="mt-3 text-xs lg:text-base">
            {`Envoyez de l’argent de l’Afrique, l'Europe, l'Asie, l'Amérique et l'Océanie vers l’Afrique sur des portefeuilles mobile sur les réseaux populaires, vous pouvez envoyer de l’argent à tout moment depuis n’importe quelle carte Visa ou Mastercard, en toute sécurité.`}
            <br />
            {`Vous pouvez aussi générer des liens de paiement pour vos services et utiliser nos API all in one pour vos E-Commerce.`}
          </p>
        </section>

        <section className="mt-3 pt-10 lg:w-[360px] lg:pb-10 lg:px-4 flex-none">
          <form>
            <div className="gap-1 py-2 grid grid-cols-1">
              <Input
                label="Vous envoyez"
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
                append="XAF"
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
                options={[{ value: "mastercard", children: "Mastercard" }]}
              />
              <Mode
                id="receiving-mode"
                label="Mode de réception"
                name="receiving_mode"
                options={[{ value: "orange-money", children: "Orange Money" }]}
              />
            </div>

            <div className="mt-3">
              <button className="btn btn-block">Continuer</button>
            </div>
          </form>
        </section>
      </div>
    </header>
  );
}
