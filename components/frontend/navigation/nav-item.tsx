"use client";

import { classNames } from "@/utils/helpers";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavItem({ href, children }: React.ComponentProps<"a">) {
  const pathname = usePathname();
  const active = pathname.startsWith(href!);

  return (
    <Link
      href={href!}
      className={classNames(
        "font-medium font-display",
        active ? "text-amber-600" : "text-gray-900"
      )}
    >
      {children}
    </Link>
  );
}
