import Image, { ImageProps } from "next/image";

type Props = Omit<ImageProps, "src" | "alt"> & {
  white?: boolean;
};
export default function Logo({ width, height, white, ...props }: Props) {
  return (
    <Image
      width={500}
      height={500}
      src={`/logo${white ? "-white" : ""}.svg`}
      alt="Logo AfricaMoney"
      {...props}
    />
  );
}
