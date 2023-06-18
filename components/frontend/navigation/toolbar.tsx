import Logo from "@/components/ui/logo";
import NavItem from "./nav-item";

const data = {
  links: [
    { href: "/", children: "Accueil" },
    { href: "/gallery", children: "Galerie" },
    { href: "/authors", children: "Auteurs" },
    { href: "/interviews", children: "Interviews" },
    { href: "/cards", children: "Cartes" },
    { href: "/blog", children: "Actualités" },
    { href: "/contact", children: "Contact" },
  ],
};

export default function Toolbar() {
  return (
    <header className=" z-30 top-0 bg-white py-4">
      <div className="container flex items-center justify-between">
        <Logo className="h-[26px] w-auto flex-none" />

        <nav className="hidden md:flex gap-8">
          {data.links.map((item, i) => (
            <NavItem key={"nav-item-" + i} {...item} />
          ))}
        </nav>
      </div>
    </header>
  );
}
