import React from "react";

export default function Section({ ...props }: React.ComponentProps<"section">) {
  return <section className="py-52" {...props} />;
}
