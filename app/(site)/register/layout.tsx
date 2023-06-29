import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inscription | AfricaMoney",
  description: "Payez ou transférez de l’argent vers l’Afrique",
};

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
