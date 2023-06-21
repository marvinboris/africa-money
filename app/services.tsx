import Image from "next/image";
import Link from "next/link";

type Props = {
  href: string;
  icon: string;
  children: string;
};
function Service(props: Props) {
  return (
    <Link
      href={props.href}
      className="flex flex-col items-center gap-3 lg:w-[200px]"
    >
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
    </Link>
  );
}

export default function Services({ services }: { services: Props[] }) {
  return (
    <section id="services">
      <div className="py-7 lg:py-10 grid grid-cols-3 lg:flex gap-3 justify-center lg:gap-10 container">
        {services.map((service) => (
          <Service key={"service-" + service.icon} {...service} />
        ))}
      </div>
    </section>
  );
}
