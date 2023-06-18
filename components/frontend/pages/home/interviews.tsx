import React from "react";
import Section from "../../ui/section/layout";
import SectionTitle from "../../ui/section/title";
import Link from "next/link";

export default function HomeInterviews() {
  return (
    <Section id="interviews-section">
      <div className="container">
        <SectionTitle
          title="Parcourez des Interviews et Documentaires"
          subtitle="Des vidéos d’interviews exclusifs avec ceux et celles qui façonnent l’art africain"
        />

        <div className="mx-auto max-w-5xl aspect-video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/T993Aw-SsPo"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        <div className="mt-20 text-center">
          <Link href="/interviews" className="btn btn-amber">
            Consulter la vidéothèque
          </Link>
        </div>
      </div>
    </Section>
  );
}
