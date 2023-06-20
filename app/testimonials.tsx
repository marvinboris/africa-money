"use client";

import Image from "next/image";
import React from "react";

import OwlCarousel from "@/components/frontend/ui/owl-carousel";
import { classNames } from "@/utils/helpers";

type Props = {
  photo: string;
  name: string;
  index: number;
  children: string;
};
function Testimonial(props: Props) {
  return (
    <div
      className={classNames(
        "px-7 py-5 lg:py-10 flex flex-col items-center text-center h-full rounded-lg",
        props.index % 2 === 0 ? "bg-gray-100" : "bg-orange-peel"
      )}
    >
      <div className="text-center">
        <Image
          src={props.photo}
          alt={props.name}
          width={100}
          height={100}
          className="rounded-full w-[100px] h-[100px] object-cover"
        />
      </div>

      <p className="mt-6 text-xs lg:text-base w-[230px] lg:w-full">
        {props.children}
      </p>

      <div className="mt-3 lg:mt-5 text-xs lg:text-base font-semibold">
        {props.name}
      </div>
    </div>
  );
}
export default function Testimonials({
  testimonials: _testimonials,
}: {
  testimonials: Omit<Props, "index">[];
}) {
  const [testimonials, setTestimonials] = React.useState<
    Omit<Props, "index">[]
  >([]);

  React.useEffect(() => {
    setTestimonials(_testimonials);
  }, []);

  return (
    <section id="testimonials" className="bg-white">
      <div className="container py-10 space-y-4 lg:space-y-20">
        <h2 className="font-bold text-zinc-900 text-2xl lg:text-5xl text-center">
          Ce qu’ils disent de nous
        </h2>

        <div className="py-2.5 lg:py-0">
          {testimonials ? (
            <OwlCarousel
              key="testimonials-carousel"
              className="owl-theme"
              role="list"
              responsive={{
                0: { items: 1 },
                640: { items: 2 },
                768: { items: 3 },
                1024: { items: 4 },
              }}
              margin={12}
              stagePadding={24}
            >
              {testimonials.map((testimonial, index) => (
                <Testimonial
                  key={"testimonial-" + index}
                  {...testimonial}
                  index={index}
                />
              ))}
            </OwlCarousel>
          ) : null}
        </div>
      </div>
    </section>
  );
}
