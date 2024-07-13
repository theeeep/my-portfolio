import { MovingBorderBtn } from "@/components/ui/moving-border";
import Link from "next/link";
import React from "react";

export default function HeroSection() {
  return (
    <div className="min-h-[60vh] flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center justify-between">
      <div className="space-y-10 text-center lg:text-left">
        <h1 className="text-4xl lg:text-7xl font-bold">
          Nice to meet you! 👋🏼 <br />{" "}
          <span className="underline underline-offset-8 decoration-green-500">
            {"I'm Deepak."}
          </span>
        </h1>
        <p className="md:w-96 text-lg text-gray-300">
          {
            "Based in India 🇮🇳, I'm a Fullstack developer passionate about building modern Applications that users love."
          }
        </p>
        <MovingBorderBtn
          borderRadius="0.6rem"
          className="p-3 font-semibold text-xl hover:italic hover:text-slate-400"
        >
          <Link href={"mailto:itz.deeepak@gmail.com"}>
            <p>
              Open to work
              <span className="underline underline-offset-8 decoration-green-500">
                {"  <Let's Connect 📬 />"}
              </span>
            </p>
          </Link>
        </MovingBorderBtn>
      </div>
      <div className="relative">
        <div className="size-72 space-y-3 -rotate-[30deg] relative">
          <div className="flex gap-3 translate-x-8">
            <div className="size-32 rounded-2xl bg-violet-600"></div>

            <div className="size-32 rounded-full bg-pink-600"></div>
          </div>
          <div className="flex gap-3 -translate-x-8">
            <div className="size-32 rounded-2xl bg-pink-600"></div>

            <div className="size-32 rounded-full bg-violet-600"></div>
          </div>
          <div className="glow absolute top-[40%] right-1/2 -z-10"></div>
        </div>
      </div>
    </div>
  );
}
