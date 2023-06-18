import React from "react";

export default function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="text-center space-y-4 mb-20">
      <h2 className="font-display font-bold text-6xl text-gray-800">{title}</h2>

      <p className="text-lg">{subtitle}</p>
    </div>
  );
}
