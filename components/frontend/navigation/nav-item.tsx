"use client";

import { classNames } from "@/utils/helpers";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavItem({
  href,
  children,
  ...props
}: Omit<React.ComponentProps<"a">, "ref">) {
  const pathname = usePathname();
  const active = pathname.startsWith(href!);

  return (
    <Link
      href={href!}
      className={classNames(
        "font-semibold text-xl",
        active ? "text-forest-green" : "text-black"
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
