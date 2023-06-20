"use client";

import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";
import React from "react";
import { FaBars, FaTimesCircle } from "react-icons/fa";

import NavItem from "./nav-item";
import Logo from "@/components/ui/logo";

const data = {
  links: [
    { href: "/send-money", children: "Envoyer de l’argent" },
    { href: "/generate-link", children: "Générer un lien de paiement" },
    { href: "/pay-bill", children: "Payer une facture" },
  ],
  mobileLinks: [
    { href: "/login", children: "Se connecter" },
    { href: "/send-money", children: "Envoyer de l’argent" },
    { href: "/generate-link", children: "Générer un lien de paiement" },
    { href: "/pay-bill", children: "Payer une facture" },
    { href: "/faq", children: "Aide" },
  ],
};

type MobileNavItemProps = {
  item: {
    children: string;
    href: string;
  };
  close: () => void;
};
const MobileNavItem = ({ item, close }: MobileNavItemProps) => (
  <Link
    href={item.href}
    onClick={close}
    className="flex items-center border-b-[.5px] border-gray-400 py-4 px-2"
  >
    <span className="text-xl font-semibold">{item.children}</span>
  </Link>
);

export default function Toolbar() {
  return (
    <Popover className=" z-30 top-0 bg-white py-4">
      {({ close }) => (
        <>
          <div className="container flex items-center">
            <div className="lg:hidden mr-3">
              <span className="sr-only">Menu</span>

              <Popover.Button className="h-6 w-6 flex items-center justify-center outline-none">
                <span className="sr-only">Ouvrir le menu</span>
                <FaBars className="flex-none h-4 w-4 text-zinc-800" />
              </Popover.Button>
            </div>

            <Link href="/">
              <Logo className="h-[26px] w-auto flex-none" />
            </Link>

            <nav className="hidden lg:flex items-center gap-7 ml-auto">
              {data.links.map((item, i) => (
                <NavItem key={"nav-item-" + i} {...item} />
              ))}

              <select
                name="locale"
                id="locale"
                className="bg-transparent text-gray-700 font-semibold"
              >
                <option value="fr">FR</option>
              </select>

              <NavItem href="/faq">?</NavItem>

              <NavItem href="/login" className="btn inline-block">
                Se Connecter
              </NavItem>
            </nav>
          </div>

          <Popover.Overlay className="fixed inset-x-0 top-0 z-40 h-screen bg-black/20 backdrop-blur-sm backdrop-filter dark:bg-zinc-900/80 md:hidden" />
          <Transition
            as={React.Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="duration-200 ease-in"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Popover.Panel
              focus
              className="fixed inset-x-0 top-0 z-50 md:hidden"
            >
              <div className="px-4 pb-8 bg-white">
                <div className="py-4 flex items-center justify-between">
                  <Link href="/" className="flex-none">
                    <Logo className="h-[26px] w-auto" />
                  </Link>

                  <Popover.Button className="flex h-6 w-6 items-center justify-center outline-none">
                    <span className="sr-only">Fermer le menu</span>
                    <FaTimesCircle className="h-6 w-6 text-zinc-900" aria-hidden="true" />
                  </Popover.Button>
                </div>

                <nav className="grid">
                  {data.mobileLinks.map((item) => (
                    <MobileNavItem
                      key={`mobile-nav-item-${item.href}`}
                      item={item}
                      close={close}
                    />
                  ))}
                </nav>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
