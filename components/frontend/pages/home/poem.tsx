import Image from "next/image";
import React from "react";

export default function HomePoem() {
  return (
    <div className="mt-20 container flex items-stretch">
      <div className="w-80 flex-none">
        <Image
          src="/images/poem.webp"
          alt="poem"
          width={500}
          height={500}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="flex-1 px-20 pb-20">
        <h3 className="text-2xl font-medium text-amber-600">
          Le peuple et ses élus
        </h3>

        <div className="mt-16 grid grid-cols-8 gap-5 text-gray-700">
          <div className="col-span-3 space-y-8">
            <div>
              <div>Des campagnes animées</div>
              <div>Des débats télévisés</div>
              <div>Des citoyens enthousiasmés</div>
            </div>

            <div>
              <div>Des députés à l’Assemblée</div>
              <div>Des ministères sollicités</div>
              <div>Des mairies convoitées</div>
            </div>

            <div>
              <div>Le président encensé</div>
              <div>L’espoir un temps restauré</div>
            </div>

            <div>
              <div>Les élections sont passées</div>
              <div>La vérité est dévoilée</div>
              <div>Le quotidien ne s’est pas amélioré</div>
              <div>Les prix n’ont pas baissé</div>
              <div>Les loyers ont encore augmenté</div>
              <div>La portion du riz a diminué</div>
            </div>
          </div>

          <div className="col-span-3 space-y-8">
            <div>
              <div>Le peuple a été bercé</div>
              <div>Le peuple s’est fait piéger</div>
              <div>Le peuple s’est peut-être trompé</div>
              <div>Dorénavant je suis avisé</div>
              <div>Des promesses je me méfierai</div>
              <div>Abusé je l’ai été</div>
              <div>Aujourd’hui enfin décidé</div>
            </div>

            <div>
              <div>Mon destin tout à moi confié</div>
              <div>Ma vie va enfin changer</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
