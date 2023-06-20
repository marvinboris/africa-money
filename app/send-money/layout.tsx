import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Envoyer de l'argent | AfricaMoney",
  description: "Payez ou transférez de l’argent vers l’Afrique",
};

export default function SendMoneyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
