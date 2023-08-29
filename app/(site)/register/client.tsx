"use client";

import Link from "next/link";
import React from "react";

import { handleSubmit } from "./actions";

import Input from "@/components/ui/form/input";
import Select from "@/components/ui/form/select";
import PageLayout from "@/components/frontend/ui/page-layout";

type Props = {
  countries: {
    code: string;
    name: string;
  }[];
};
export default function Client({ countries }: Props) {
  const [value, setValue] = React.useState({
    email: "",
    name: "",
    flag: "cm",
    country: "CM",
    phone: "",
    password: "",
    password_confirmation: "",
  });

  const inputChangeHandler = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    e.persist();
    const { name, value } = e.target;
    if (name === "country")
      setValue((state) => ({ ...state, flag: value.toLowerCase() }));
    setValue((state) => ({ ...state, [name]: value }));
  };

  return (
    <PageLayout
      title="Inscription"
      description={
        <>
          Vous avez déjà un compte ?{" "}
          <Link className="text-forest-green" href="/login">
            Se Connecter
          </Link>
        </>
      }
    >
      <form className="w-full py-4 space-y-3" action={handleSubmit}>
        <Input
          label="Email :"
          id="email"
          type="email"
          name="email"
          value={value.email}
          onChange={inputChangeHandler}
          placeholder="Youremail@mail.com"
        />

        <Input
          label="Nom & Prénoms :"
          id="name"
          name="name"
          value={value.name}
          onChange={inputChangeHandler}
          placeholder="Veuillez entrer votre nom"
        />

        <Select
          label="Pays :"
          id="country"
          name="country"
          value={value.country}
          onChange={inputChangeHandler}
          prepend={<span className={"fi fi-" + value.flag} />}
        >
          {countries.map((c) => (
            <option key={"country-option-" + c.code} value={c.code}>
              {c.name}
            </option>
          ))}
        </Select>

        <Input
          label="Téléphone :"
          id="phone"
          type="tel"
          name="phone"
          placeholder="09907089890"
        />

        <Input
          label="Mot de passe :"
          id="password"
          type="password"
          name="password"
          value={value.password}
          onChange={inputChangeHandler}
          placeholder="***************"
        />

        <Input
          label="Confirmez votre mot de passe :"
          id="password-confirmation"
          type="password"
          name="password_confirmation"
          value={value.password_confirmation}
          onChange={inputChangeHandler}
          placeholder="***************"
        />

        <div className="mb-6">
          <button className="btn btn-block">Valider</button>
        </div>
      </form>
    </PageLayout>
  );
}
