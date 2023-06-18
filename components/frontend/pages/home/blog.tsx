import React from "react";
import Section from "../../ui/section/layout";
import SectionTitle from "../../ui/section/title";
import Image from "next/image";
import Link from "next/link";

const data = {
  posts: [
    {
      title: "L’homme derrière la scène",
      description:
        "Mon engouement pour la poésie remonte à mon enfance et aux découvertes des poèmes des Maitres africains et d’ailleurs.",
      slug: "homme-derriere-scene",
      image: "/images/blog-1.webp",
    },
    {
      title: "Salon des Arts Africains",
      description:
        "Il rassemble chaque année au début du mois de septembre une cinquantaine de galeries spécialisées dans les arts d’Afrique",
      slug: "salon-arts-africains",
      image: "/images/blog-2.webp",
    },
  ],
};
const Post = ({
  title,
  description,
  slug,
  image,
}: {
  title: string;
  description: string;
  slug: string;
  image: string;
}) => (
  <div className="p-6 gap-3.5 bg-gray-50 shadow-md rounded-lg flex-shrink flex flex-col items-stretch w-[448px] flex-none">
    <Image
      src={image}
      alt={title}
      width={500}
      height={500}
      className="h-[225px] w-full object-cover"
    />
    <h3 className="text-gray-800 font-bold">{title}</h3>
    <p className="text-gray-400 text-sm/relaxed line-clamp-2">{description}</p>
    <p>
      <Link href={"/blog/" + slug} className="btn btn-sm btn-amber">
        Lire la suite
      </Link>
    </p>
  </div>
);

export default function HomeBlog() {
  return (
    <Section id="blog-section">
      <div className="container">
        <SectionTitle
          title="Actualité"
          subtitle="Découvrez toutes les dernières nouvelles sur la culture Africaine"
        />

        <div className="flex justify-center gap-16">
          {data.posts.map((post, i) => (
            <Post key={"post-" + i} {...post} />
          ))}
        </div>
      </div>
    </Section>
  );
}
