"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import Input from "@/components/frontend/ui/form/input";
import Mode from "@/components/frontend/ui/mode";
import { classNames } from "@/utils/helpers";

const FormBlock = ({ active = false, children = <></> }) => (
  <div
    className={classNames(
      "absolute w-full",
      active ? "opacity-100 z-0" : "opacity-0 -z-10"
    )}
  >
    {children}
  </div>
);

export default function Hero() {
  const [page, setPage] = React.useState(1);
  const [value, setValue] = React.useState({
    to_country: "",
  });

  const inputChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (name === "to_country") setPage(2);
    setValue((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <header>
      <div className="container pt-8 pb-8 lg:pt-[120px] lg:pb-[120px] lg:flex justify-between items-center">
        <section className="lg:w-[600px] flex-none">
          <h2 className="text-[32px] lg:text-6xl font-extrabold text-zinc-900 text-center lg:text-left">
            Payez ou transférez de l’argent vers l’Afrique
          </h2>

          <p className="mt-3 text-sm lg:text-base">
            {`Envoyez de l’argent de l'Europe, l’Afrique , l'Asie, l'Amérique et l'Océanie vers l’Afrique sur des portefeuilles mobile sur les réseaux populaires, vous pouvez envoyer de l’argent à tout moment depuis n’importe quelle Visa ou Mastercard, en toute sécurité.`}
          </p>
        </section>

        <section className="mt-3 lg:w-[360px] lg:pb-10 lg:px-4 flex-none">
          <form className="relative h-[375px]">
            <FormBlock active={page === 1}>
              <div className="flex flex-col items-center gap-3">
                <div className="w-[300px] mx-auto">
                  <Image
                    src="/images/home-hero.svg"
                    alt="Hero"
                    width={300}
                    height={296.31}
                    className="w-full h-auto"
                  />
                </div>

                <div className="grid gap-1">
                  <div className="py-3 px-5 border-[.5px] border-gray-700 rounded">
                    <select
                      name="to_country"
                      id="to-country"
                      value={value.to_country}
                      onChange={inputChangeHandler}
                      className="bg-transparent outline-none p-0 m-0 text-reset text-xl"
                    >
                      <option value="">Envoyer de l’argent vers</option>
                      <option value="CM">Cameroun</option>
                    </select>
                  </div>

                  <div className="text-[8px] flex justify-between">
                    <span>Nouvel utilisateur ?</span>

                    <Link
                      className="text-forest-green font-bold"
                      href="/register"
                    >
                      Créer un compte
                    </Link>
                  </div>
                </div>
              </div>
            </FormBlock>

            <FormBlock active={page === 2}>
              <div className="pt-10">
                <div className="gap-1 py-2 grid grid-cols-1">
                  <Input
                    label="Vous envoyez"
                    name="from_amount"
                    type="number"
                    append={
                      <select
                        name="currency_from"
                        className="bg-transparent block border-0 outline-none p-0 text-reset"
                      >
                        <option value="eur">EUR</option>
                      </select>
                    }
                    defaultValue="1500.00"
                  />
                  <Input
                    label="Le destinataire reçoit"
                    type="number"
                    append="XAF"
                    readOnly
                    defaultValue="1350.00"
                  />
                </div>

                <div className="flex justify-between mt-3 font-semibold">
                  <span className="text-gray-800">1 EUR = 650,34 XAF*</span>
                  <span className="cursor-pointer text-forest-green">
                    Afficher les frais
                  </span>
                </div>

                <div className="mt-3 py-3 grid grid-cols-1 gap-2 font-semibold">
                  <Mode
                    id="payment-method"
                    label="Mode de paiement"
                    name="payment_method"
                    options={[
                      { value: "visa", children: "Visa" },
                      { value: "mastercard", children: "Mastercard" },
                    ]}
                  />
                  <Mode
                    id="receiving-mode"
                    label="Mode de réception"
                    name="receiving_mode"
                    options={[
                      { value: "momo", children: "MTN Mobile Money" },
                      { value: "om", children: "Orange Money" },
                      { value: "ym", children: "Yoomee Money" },
                    ]}
                  />
                </div>

                <div className="mt-3">
                  <button className="btn btn-block">Continuer</button>
                </div>
              </div>
            </FormBlock>
          </form>
        </section>
      </div>
    </header>
  );
}
