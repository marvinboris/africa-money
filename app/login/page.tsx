import Link from "next/link";

import Input from "@/components/ui/form/input";

export default function Page() {
  return (
    <main>
      <div className="w-full max-w-[360px] mx-auto pt-[100px] pb-[200px] flex flex-col items-center gap-3">
        <h1 className="text-6xl font-extrabold text-zinc-900">Connexion</h1>

        <p className="font-semibold text-center">
          Nouveau ?{" "}
          <Link className="text-forest-green" href="/register">
            Créer un compte
          </Link>
        </p>

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
            <button className="btn btn-block" type="button">
              Se Connecter
            </button>
          </div>
        </form>

        <p className="text-gray-800 text-center">
          <Link
            className="text-forest-green font-semibold"
            href="/forgot-password"
          >
            Mot de passe oublié ?
          </Link>
        </p>
      </div>
    </main>
  );
}
