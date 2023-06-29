import Link from "next/link";

import Input from "@/components/ui/form/input";
import PageLayout from "@/components/frontend/ui/page-layout";

export default function Client() {
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
      <form className="w-full py-4 space-y-3">
        <Input
          label="Email :"
          id="email"
          type="email"
          placeholder="Youremail@mail.com"
        />

        <Input
          label="Mot de passe :"
          id="password"
          type="password"
          placeholder="***************"
        />

        <div className="mb-6">
          <button className="btn btn-block">Se Connecter</button>
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
