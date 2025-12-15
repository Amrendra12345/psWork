import Link from "next/link";
import React from "react";
import Image from "next/image";

const Growth = () => {
  return (
    <section className="px-5 pt-0 pb-10 md:pb-16">
      <div className="max-w-[var(--max-width)] mx-auto">
        <div className="flex items-center justify-between flex-col md:flex-row gap-5">
          <div className="w-full md:w-1/2">
            <h4 className="w-auto md:w-[440px] text-[var(--main-primary-text-color)] text-3xl md:text-5xl mb-6 md:mb-12 font-semibold leading-10 md:leading-14">
              empowering every cancer journey
            </h4>
            <p className="text-[#6E6E6E] mb-6 md:mb-10">
              Providing strength, support, and knowledge at every step—from
              diagnosis to recovery—so no one faces cancer alone.Providing
              strength, support, and knowledge at every step—from diagnosis to
              recovery—so no one faces cancer alone.
            </p>
            <Link
              className="inline-flex rounded-full border border-[var(--main-primary-text-color)] px-8 py-2"
              href="/"
            >
              View
            </Link>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src="/assets/user_satisfaction.svg"
              alt="step_one"
              width={450}
              height={300}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Growth;
