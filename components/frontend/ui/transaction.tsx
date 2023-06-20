import { classNames } from "@/utils/helpers";

export enum TransactionStatus {
  Pending = "En cours",
  Completed = "Réussie",
  Failed = "Echouée",
}

const Item = ({ up = "", down = "" }) => (
  <div className="py-2 grid gap-1 border-b border-gray-400 text-gray-800">
    <div className="text-xs font-semibold">{up}</div>
    <div className="text-[10px]">{down}</div>
  </div>
);

export type TransactionProps = {
  number: string;
  status: TransactionStatus;
  date: Date;
  name: string;
  country: string;
  fromAmount: string;
  paymentMode: string;
  toAmount: string;
  paymentMethod: string;
};
export default function Transaction({
  number,
  status,
  date,
  name,
  country,
  fromAmount,
  paymentMode,
  toAmount,
  paymentMethod,
}: TransactionProps) {
  return (
    <div
      className={classNames(
        "py-3 px-5",
        status === TransactionStatus.Pending ? "" : "bg-gray-100"
      )}
    >
      <div className="py-2 grid gap-1 border-b border-gray-400">
        <div
          className={classNames(
            "text-xl font-bold",
            status === TransactionStatus.Pending
              ? "text-orange-peel"
              : status === TransactionStatus.Completed
              ? "text-forest-green"
              : "text-red-600"
          )}
        >
          {number}
        </div>

        <div className="text-[10px] text-gray-800">{status}</div>
      </div>
      <Item up={date.toLocaleDateString()} down={date.toLocaleTimeString()} />
      <Item up={name} down={country} />
      <Item up={fromAmount} down={paymentMode} />
      <Item up={toAmount} down={paymentMethod} />
    </div>
  );
}
