import Image from "next/image";

export type InfoProps = {
  icon: string;
  title: string;
  children: string;
};
export default function Info(props: InfoProps) {
  return (
    <div className="rounded-lg bg-white px-4 lg:px-10 py-6 lg:py-10 flex flex-col gap-3 text-center lg:w-[400px]">
      <Image
        src={"/images/" + props.icon + ".svg"}
        alt={props.title}
        width={80}
        height={80}
        className="h-20 lg:h-[100px] w-auto flex-none mx-auto"
      />

      <div className="text-xl lg:text-[28px] font-bold lg:mt-4">
        {props.title}
      </div>

      <div className="text-xs lg:text-base">{props.children}</div>
    </div>
  );
}
