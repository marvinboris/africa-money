import Logo from "@/components/ui/logo";
import Link from "next/link";
import React from "react";

const data = {
  blocks: [
    {
      title: "Services",
      links: [
        { href: "/send-money", label: "Envoyer de l’argent" },
        { href: "/generate-link", label: "Générer un lien de paiement" },
        { href: "/pay-bill", label: "Payer une facture" },
      ],
    },
    {
      title: "Société",
      links: [
        { href: "/about", label: "A Propos" },
        { href: "/security", label: "Sécurité" },
      ],
    },
    {
      title: "Support",
      links: [
        { href: "/privacy-policy", label: "Politique de confidentialité" },
        { href: "/terms", label: "Conditions générales" },
      ],
    },
  ],
};

const Block = ({
  title = "",
  links = [
    {
      href: "#",
      label: "",
    },
  ],
}) => (
  <div className="space-y-5">
    <h3 className="text-zinc-900 text-xl lg:text-2xl font-bold">{title}</h3>

    <ul className="grid grid-cols-1 gap-3 text-sm lg:text-base">
      {links.map(({ href, label }) => (
        <li key={href}>
          <Link href={href}>{label}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default function Footer() {
  return (
    <footer>
      <div className="bg-forest-green text-white">
        <div className="container grid grid-cols-2 lg:flex py-10 px-[35px] gap-x-[50px] gap-y-[30px] lg:justify-center">
          <div className="col-span-2">
            <Logo white className="h-8 w-auto" />
          </div>

          {data.blocks.map((block, index) => (
            <div key={"footer-block-" + index} className={index === 0 ? "row-span-2" : ""}>
              <Block title={block.title} links={block.links} />
            </div>
          ))}
        </div>
      </div>

      <div className="text-xs lg:text-base bg-gray-200 text-gray-500 text-center py-3 lg:py-5">
        AfricaMoney. © 2023 Tous droits réservés.
      </div>
    </footer>
  );
}
