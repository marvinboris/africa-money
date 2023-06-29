import Image from "next/image";

import PageLayout from "@/components/frontend/ui/page-layout";
import Transaction, {
  TransactionProps,
} from "@/components/frontend/ui/transaction";

interface InfoLineProps {
  label: string;
  value: string;
}
const InfoLine = ({ label, value }: InfoLineProps) => (
  <div className="text-xs flex justify-between">
    <span>{label}</span>
    <span className="text-forest-green font-bold">{value}</span>
  </div>
);

export default function Client({
  transactions,
}: {
  transactions: TransactionProps[];
}) {
  return (
    <PageLayout
      title="Mon Compte"
      description={
        <span className="font-normal">
          Payez vos factures instantanément depuis le monde entier
        </span>
      }
    >
      <div className="py-5 grid gap-3">
        <div className="flex flex-col items-center gap-1 text-center">
          <Image
            src="/images/profile-pic.png"
            alt="Profile picture"
            width={200}
            height={200}
            className="w-[97px] rounded-full aspect-square object-cover flex-none"
          />

          <div className="text-gray-400 text-sm">Votre nom</div>

          <div className="text-xl text-gray-800 font-semibold">
            Edward Newgate
          </div>
        </div>

        <div className="py-3 grid gap-2 w-full">
          <InfoLine label="Nationalité" value="Cameroun" />
          <InfoLine label="Téléphone" value="667895335" />
        </div>

        <div className="w-full">
          <button className="btn btn-block">
            Modifier mes informations personnelles
          </button>
        </div>
      </div>

      <div className="mt-10 grid gap-4">
        <h2 className="font-bold text-2xl text-zinc-900">
          Historique des transactions
        </h2>

        {transactions.map((transaction) => (
          <Transaction
            key={"transaction-" + transaction.number}
            {...transaction}
          />
        ))}

        <button className="btn btn-block">
          Consulter l’historique des transactions
        </button>
      </div>
    </PageLayout>
  );
}
