"use client";

import OwlCarousel from "@/components/frontend/ui/owl-carousel";
import { classNames } from "@/utils/helpers";
import Image from "next/image";
import React from "react";

const _data = {
  services: [
    {
      icon: "home-service-1",
      children: "Recharge OM & MOMO via Visa et Mastercard",
    },
    { icon: "home-service-2", children: "Lien de paiement généré" },
    { icon: "home-service-3", children: "Paiement de facture" },
  ],
  infos: [
    {
      icon: "home-info-1",
      title: "Une tarification claire",
      children:
        "Vous pouvez toujours consulter les frais exacts et le montant que votre destinataire recevra.",
    },
    {
      icon: "home-info-2",
      title: "Un service client disponible",
      children:
        "Contactez-nous ou visitez notre Aide pour obtenir les réponses et les informations dont vous avez besoin. Nous sommes là pour vous aider.",
    },
  ],
  moreInfos: [
    {
      icon: "home-more-info-1",
      title: "Une plateforme sécurisée",
      children:
        "Nous nous engageons à sécuriser votre transaction en ne partageant pas vos informations financières. Notre système de cryptage et de lutte contre la fraude permet de protéger votre transaction 24h/24, 7j/7.",
    },
    {
      icon: "home-more-info-2",
      title: "Remboursement garanti",
      children:
        "Nous garantissons que l'argent sera crédité sur le compte que vous avez désigné. Sinon, nous vous rembourserons l'intégralité de votre transaction.",
    },
  ],
  testimonials: [
    {
      photo: "/images/home-testimonial-1.png",
      name: "Alexandre",
      children:
        "Grâce à AfricaMoney j’ai pu soutenir ma tante qui avait des soucis de santé et dont les frais médicaux élevés étaient nécessaire à sa guérison",
    },
    {
      photo: "/images/home-testimonial-2.png",
      name: "Rajeesh",
      children:
        "AfricaMoney a été une bouée de sauvetage pour moi qui étudie à l'étranger.",
    },
    {
      photo: "/images/home-testimonial-3.png",
      name: "Alexandre",
      children:
        "Grâce à AfricaMoney j’ai pu soutenir ma tante qui avait des soucis de santé et dont les frais médicaux élevés étaient nécessaire à sa guérison",
    },
    {
      photo: "/images/home-testimonial-4.png",
      name: "Rajeesh",
      children:
        "AfricaMoney a été une bouée de sauvetage pour moi qui étudie à l'étranger.",
    },
  ],
};

type InputProps = React.ComponentProps<"input"> & {
  label: React.ReactNode;
  append: React.ReactNode;
};
const Input = (props: InputProps) => (
  <div className="py-2 px-5 rounded border-[.5px] border-gray-400 gap-3 flex justify-between items-center">
    <div className="space-y-1">
      <label htmlFor={props.id} className="text-[8px] text-gray-400">
        {props.label}
      </label>

      <input
        {...props}
        className="bg-transparent block border-0 outline-none p-0 font-semibold text-reset"
      />
    </div>

    <div className="flex-none h-7 w-[.5px] bg-gray-400" />

    <div className="flex-none w-[60px] h-full px-2 flex items-center text-sm">
      {props.append}
    </div>
  </div>
);

type ModeProps = {
  label: React.ReactNode;
  id: string;
  name: string;
  options: {
    value: string;
    children: React.ReactNode;
  }[];
};
const Mode = (props: ModeProps) => (
  <div className="flex items-center justify-between">
    <label htmlFor={props.id}>{props.label}</label>
    <select
      name={props.name}
      id={props.id}
      className="border-[.5px] border-gray-400 rounded py-1 px-4 text-forest-green"
    >
      {props.options.map((o, i) => (
        <option key={"option-" + props.id + "-" + i} {...o} />
      ))}
    </select>
  </div>
);

type ServiceProps = {
  icon: string;
  children: string;
};
const Service = (props: ServiceProps) => (
  <div className="flex flex-col items-center gap-3 lg:w-[200px]">
    <div className="flex-none h-12">
      <Image
        src={"/images/" + props.icon + ".svg"}
        alt={props.children}
        width={36}
        height={36}
        className="w-auto h-9 lg:h-[50px] object-contain"
      />
    </div>

    <p className="text-center text-xs">{props.children}</p>
  </div>
);

type InfoProps = {
  icon: string;
  title: string;
  children: string;
};
const Info = (props: InfoProps) => (
  <div className="rounded-lg bg-white px-4 lg:px-10 py-6 lg:py-10 flex flex-col gap-3 text-center lg:w-[400px]">
    <Image
      src={"/images/" + props.icon + ".svg"}
      alt={props.title}
      width={80}
      height={80}
      className="h-20 lg:h-[100px] w-auto flex-none mx-auto"
    />

    <div className="text-xl lg:text-[28px] font-bold lg:mt-4">
      {props.title}
    </div>

    <div className="text-xs lg:text-base">{props.children}</div>
  </div>
);

type TestimonialProps = {
  photo: string;
  name: string;
  index: number;
  children: string;
};
const Testimonial = (props: TestimonialProps) => (
  <div
    className={classNames(
      "px-7 py-5 lg:py-10 flex flex-col items-center text-center h-full rounded-lg",
      props.index % 2 === 0 ? "bg-gray-100" : "bg-orange-peel"
    )}
  >
    <div className="text-center">
      <Image
        src={props.photo}
        alt={props.name}
        width={100}
        height={100}
        className="rounded-full w-[100px] h-[100px] object-cover"
      />
    </div>

    <p className="mt-6 text-xs lg:text-base w-[230px] lg:w-full">
      {props.children}
    </p>

    <div className="mt-3 lg:mt-5 text-xs lg:text-base font-semibold">
      {props.name}
    </div>
  </div>
);

export default function Page() {
  const [data, setData] = React.useState<typeof _data | null>(null);

  React.useEffect(() => {
    if (typeof window !== "undefined") setData(_data);
  }, []);

  return data ? (
    <main>
      <header>
        <div className="container pt-8 pb-[72px] lg:pt-[120px] lg:pb-[120px] lg:flex justify-between items-center">
          <section className="lg:w-[600px] flex-none">
            <h2 className="text-[32px] lg:text-6xl font-extrabold text-zinc-900">
              Payez ou transférez de l’argent vers l’Afrique
            </h2>

            <p className="mt-3 text-xs lg:text-base">
              {`Envoyez de l’argent de l’Afrique, l'Europe, l'Asie, l'Amérique et l'Océanie vers l’Afrique sur des portefeuilles mobile sur les réseaux populaires, vous pouvez envoyer de l’argent à tout moment depuis n’importe quelle carte Visa ou Mastercard, en toute sécurité.`}
              <br />
              {`Vous pouvez aussi générer des liens de paiement pour vos services et utiliser nos API all in one pour vos E-Commerce.`}
            </p>
          </section>

          <section className="mt-3 pt-10 lg:w-[360px] lg:pb-10 lg:px-4 flex-none">
            <form>
              <div className="gap-1 py-2 grid grid-cols-1">
                <Input
                  label="Vous envoyez"
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
                  append="XAF"
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
                  options={[{ value: "mastercard", children: "Mastercard" }]}
                />
                <Mode
                  id="receiving-mode"
                  label="Mode de réception"
                  name="receiving_mode"
                  options={[
                    { value: "orange-money", children: "Orange Money" },
                  ]}
                />
              </div>

              <div className="mt-3">
                <button className="btn btn-block">
                  Continuer
                </button>
              </div>
            </form>
          </section>
        </div>
      </header>

      <section id="services">
        <div className="py-7 lg:py-10 grid grid-cols-3 lg:flex gap-3 justify-center lg:gap-10 container">
          {data.services.map((service) => (
            <Service key={"service-" + service.icon} {...service} />
          ))}
        </div>
      </section>

      <section id="cta">
        <div className="bg-black/50 text-white text-center">
          <div className="flex flex-col h-[150px] lg:h-[300px] w-[200px] lg:w-auto justify-center items-center mx-auto gap-1">
            <div className="text-2xl lg:text-5xl font-bold">
              Rapide & sécurisé
            </div>

            <p className="lg:text-xl">En moyenne 2mins par transaction</p>
          </div>
        </div>
      </section>

      <section id="infos" className="bg-gray-100">
        <div className="container py-10 grid grid-cols-1 gap-3 lg:gap-10">
          <h2 className="font-bold text-zinc-900 text-2xl text-center">
            Pourquoi nous choisir ?
          </h2>

          <div className="mt-3 grid grid-cols-1 lg:flex justify-center gap-3 lg:gap-10">
            {data.infos.map((info) => (
              <Info key={"info-" + info.icon} {...info} />
            ))}
          </div>
        </div>
      </section>

      <section id="more-infos" className="bg-white">
        <div className="container py-10 grid grid-cols-1 gap-3">
          <div className="mt-3 grid grid-cols-1 lg:flex justify-center gap-3 lg:gap-10">
            {data.moreInfos.map((info) => (
              <Info key={"info-" + info.icon} {...info} />
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="bg-white">
        <div className="container py-10 space-y-4 lg:space-y-20">
          <h2 className="font-bold text-zinc-900 text-2xl lg:text-5xl text-center">
            Ce qu’ils disent de nous
          </h2>

          <div className="py-2.5 lg:py-0">
            <OwlCarousel
              key="testimonials-carousel"
              className="owl-theme"
              role="list"
              responsive={{
                0: { items: 1 },
                640: { items: 2 },
                768: { items: 3 },
                1024: { items: 4 },
              }}
              margin={12}
              stagePadding={24}
            >
              {data.testimonials.map((testimonial, index) => (
                <Testimonial
                  key={"testimonial-" + index}
                  index={index}
                  {...testimonial}
                />
              ))}
            </OwlCarousel>
          </div>
        </div>
      </section>
    </main>
  ) : null;
}
