import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Connexion | AfricaMoney",
  description: "Payez ou transférez de l’argent vers l’Afrique",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
