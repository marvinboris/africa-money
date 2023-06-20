import { Metadata } from "next";

import "./globals.css";
import "flag-icons/css/flag-icons.min.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export const metadata: Metadata = {
  title: "AfricaMoney",
  description: "Payez ou transférez de l’argent vers l’Afrique",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
