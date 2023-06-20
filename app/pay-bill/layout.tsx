import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Payer une facture | AfricaMoney",
  description: "Payez ou transférez de l’argent vers l’Afrique",
};

export default function SendMoneyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
