"use client";

import Link from "next/link";
import React from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

import Input from "@/components/ui/form/input";
import PageLayout from "@/components/frontend/ui/page-layout";
import axios from "axios";

function Button() {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending} className="btn btn-block">
      {pending ? "Chargement..." : "Se Connecter"}
    </button>
  );
}

export default function Client() {
  const [value, setValue] = React.useState({
    email: "",
    password: "",
  });

  const inputChangeHandler = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    e.persist();
    const { name, value } = e.target;
    setValue((state) => ({ ...state, [name]: value }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios.post("/api/login", value).then((res) => {
      console.log(res);

      if (res.status === 200) {
        window.location.href = "/";

        return;
      } else {
        alert("Erreur");
      }
    });
  };

  return (
    <PageLayout
      title="Connexion"
      description={
        <>
          Nouveau ?{" "}
          <Link className="text-forest-green" href="/register">
            Créer un compte
          </Link>
        </>
      }
    >
      <form onSubmit={onSubmit} className="w-full py-4 space-y-3">
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
          label="Mot de passe :"
          id="password"
          type="password"
          name="password"
          value={value.password}
          onChange={inputChangeHandler}
          placeholder="***************"
        />

        <div className="mb-6">
          <Button />
        </div>
      </form>

      <p className="text-gray-800 text-center text-xs lg:text-base">
        <Link
          className="text-forest-green font-semibold"
          href="/forgot-password"
        >
          Mot de passe oublié ?
        </Link>
      </p>
    </PageLayout>
  );
}
