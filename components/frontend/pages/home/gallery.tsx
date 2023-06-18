import Image from "next/image";
import Link from "next/link";
import React from "react";

import SectionTitle from "../../ui/section/title";
import Section from "../../ui/section/layout";

const GalleryImage = ({ rank = "" }) => (
  <Image
    width={500}
    height={500}
    src={"/images/gallery-" + rank + ".webp"}
    alt="gallery"
    className="w-full h-full object-cover"
  />
);

export default function HomeGallery() {
  return (
    <Section id="gallery-section">
      <div className="container">
        <SectionTitle
          title="Une collection d’œuvres"
          subtitle="Nous croyons que l'art africain est un moyen puissant de raconter l'histoire et la culture de l'Afrique, ainsi que de promouvoir la compréhension et l'appréciation de cette région du monde."
        />

        <div className="grid grid-cols-8 grid-rows-5 gap-5">
          <div className="col-span-3 row-span-3">
            <GalleryImage rank="1" />
          </div>
          <div className="col-span-3 row-span-2">
            <GalleryImage rank="2" />
          </div>
          <div className="col-span-2 row-span-2">
            <GalleryImage rank="3" />
          </div>
          <div className="col-span-5 row-span-3">
            <GalleryImage rank="5" />
          </div>
          <div className="col-span-3 row-span-2">
            <GalleryImage rank="4" />
          </div>
        </div>

        <div className="mt-20 text-center">
          <Link
            href="/gallery"
            className="btn btn-amber"
          >
            parcourir notre galerie
          </Link>
        </div>
      </div>
    </Section>
  );
}
