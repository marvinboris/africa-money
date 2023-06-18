import { classNames } from "@/utils/helpers";
import Image from "next/image";
import React from "react";

const data = {
  cards: [
    {
      super: "selection d’afrik",
      title: "Proverbe",
      children: (
        <ul className="list-disc">
          <li>Aussi haut que vole un oiseau, il finit par se poser</li>
          <li>C’est avec l’eau du corps qu’on tire celle du puits</li>
          <li>Ce n’est pas le jour de la chasse qu’il faut élever un chien</li>
        </ul>
      ),
    },
    {
      super: "selection d’afrik",
      title: "Proverbe",
      children: (
        <ul className="list-disc">
          <li>Aussi haut que vole un oiseau, il finit par se poser</li>
          <li>C’est avec l’eau du corps qu’on tire celle du puits</li>
          <li>Ce n’est pas le jour de la chasse qu’il faut élever un chien</li>
        </ul>
      ),
    },
    {
      super: "selection d’afrik",
      title: "Proverbe",
      children: (
        <ul className="list-disc">
          <li>Aussi haut que vole un oiseau, il finit par se poser</li>
          <li>C’est avec l’eau du corps qu’on tire celle du puits</li>
          <li>Ce n’est pas le jour de la chasse qu’il faut élever un chien</li>
        </ul>
      ),
    },
  ],
};
const CardText = ({
  rank,
  super: superText,
  title,
  children,
}: {
  rank: number;
  super: string;
  title: string;
  children: React.ReactNode;
}) => (
  <div
    className={classNames(
      "space-y-8 py-20 text-gray-800",
      rank % 2 === 0 ? "pr-20" : "pl-20"
    )}
  >
    <header className="space-y-4">
      <div className="uppercase">{superText}</div>

      <div className="font-bold text-2xl text-amber-600">{title}</div>
    </header>

    <div className="pl-5">{children}</div>
  </div>
);

const CardImage = ({ rank }: { rank: number }) => (
  <Image
    width={500}
    height={500}
    src={"/images/cards-" + rank + ".webp"}
    alt="cards"
    className={classNames(
      "h-full min-w-[49.4vw] absolute top-0 object-cover",
      rank % 2 === 1 ? "right-0" : "left-0"
    )}
  />
);

export default function HomeCards() {
  return (
    <section id="cards-section">
      <div className="container">
        <div className="grid grid-cols-2">
          <div className="col-span-1">
            <CardText rank={0} {...data.cards[0]} />
          </div>
          <div className="col-span-1 relative">
            <CardImage rank={0} />
          </div>
          <div className="col-span-1 relative">
            <CardImage rank={1} />
          </div>
          <div className="col-span-1">
            <CardText rank={1} {...data.cards[1]} />
          </div>
          <div className="col-span-1">
            <CardText rank={2} {...data.cards[2]} />
          </div>
          <div className="col-span-1 relative">
            <CardImage rank={2} />
          </div>
        </div>
      </div>
    </section>
  );
}
