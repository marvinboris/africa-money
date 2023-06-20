import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mon Compte | AfricaMoney",
  description: "Payez ou transférez de l’argent vers l’Afrique",
};

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
