import Logo from "@/components/ui/logo";
import NavItem from "./nav-item";

const data = {
  links: [
    { href: "/send-money", children: "Envoyer de l’argent" },
    { href: "/generate-link", children: "Générer un lien de paiement" },
    { href: "/pay-bill", children: "Payer une facture" },
  ],
};

export default function Toolbar() {
  return (
    <header className=" z-30 top-0 bg-white py-4">
      <div className="container flex items-center justify-between">
        <Logo className="h-[26px] w-auto flex-none" />

        <nav className="hidden lg:flex items-center gap-7">
          {data.links.map((item, i) => (
            <NavItem key={"nav-item-" + i} {...item} />
          ))}

          <select name="locale" id="locale" className="bg-transparent text-gray-700 font-semibold">
            <option value="fr">FR</option>
          </select>

          <NavItem href="/faq">?</NavItem>

          <NavItem href="/login" className="btn inline-block">
            Se Connecter
          </NavItem>
        </nav>
      </div>
    </header>
  );
}
