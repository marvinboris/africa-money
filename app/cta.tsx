import Image from "next/image";

export default function CTA() {
  return (
    <section id="cta">
      <div className="bg-black/50 text-white text-center relative">
        <Image
          src="/images/home-cta.webp"
          alt="CTA Background"
          width={2000}
          height={1200}
          className="absolute inset-0 object-cover object-center -z-10"
        />

        <div className="flex flex-col h-[150px] lg:h-[300px] w-[200px] lg:w-auto justify-center items-center mx-auto gap-1">
          <div className="text-2xl lg:text-5xl font-bold">
            Rapide & sécurisé
          </div>

          <p className="lg:text-xl">En moyenne 2mins par transaction</p>
        </div>
      </div>
    </section>
  );
}
