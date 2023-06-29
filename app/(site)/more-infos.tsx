import Info, { InfoProps } from "./info";

export default function MoreInfos({
  infos: moreInfos,
}: {
  infos: InfoProps[];
}) {
  return (
    <section id="more-infos" className="bg-white">
      <div className="container py-10 grid grid-cols-1 gap-3">
        <div className="mt-3 grid grid-cols-1 lg:flex justify-center gap-3 lg:gap-10">
          {moreInfos.map((info) => (
            <Info key={"info-" + info.icon} {...info} />
          ))}
        </div>
      </div>
    </section>
  );
}
