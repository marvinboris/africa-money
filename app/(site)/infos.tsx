import Info, { InfoProps } from "./info";

export default function Infos({ infos }: { infos: InfoProps[] }) {
  return (
    <section id="infos" className="bg-gray-100">
      <div className="container py-10 grid grid-cols-1 gap-3 lg:gap-10">
        <h2 className="font-bold text-zinc-900 text-2xl text-center">
          Pourquoi nous choisir ?
        </h2>

        <div className="mt-3 grid grid-cols-1 lg:flex justify-center gap-3 lg:gap-10">
          {infos.map((info) => (
            <Info key={"info-" + info.icon} {...info} />
          ))}
        </div>
      </div>
    </section>
  );
}
