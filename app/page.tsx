import React from "react";

import CTA from "./cta";
import Hero from "./hero";
import Infos from "./infos";
import MoreInfos from "./more-infos";
import Services from "./services";
import Testimonials from "./testimonials";

function getData() {
  return {
    services: [
      {
        href: "/",
        icon: "home-service-1",
        children: "Recharge OM & MOMO via Visa et Mastercard",
      },
      {
        href: "/generate-link",
        icon: "home-service-2",
        children: "Lien de paiement généré",
      },
      {
        href: "/pay-bill",
        icon: "home-service-3",
        children: "Paiement de facture",
      },
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
}

export default function Page() {
  const data = getData();

  return data ? (
    <main>
      <Hero />

      <Services services={data.services} />

      <CTA />

      <Infos infos={data.infos} />

      <MoreInfos infos={data.moreInfos} />

      <Testimonials testimonials={data.testimonials} />
    </main>
  ) : null;
}
