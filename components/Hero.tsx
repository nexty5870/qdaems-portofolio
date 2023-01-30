import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import qdaems500 from "../public/qdaems500.jpeg";
import Link from "next/link";

type Props = {};

export default function Hero({}: Props) {
  const [heroText, count] = useTypewriter({
    words: [
      "Hi, my name is Quentin",
      "I'm a FrontEnd WebDev",
      "DevOps engineer",
      "Startup Enthousiast",
      "<Coffee-Drinker.tsx />",
      "<Geek />",
    ],
    loop: true,
    deleteSpeed: 100,
    typeSpeed: 20,
  });
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-8 overflow-hidden text-center">
      <BackgroundCircles />
      <Image
        className="relative mx-auto h-32 w-32 rounded-full object-cover"
        alt="Quentin Daems"
        src={qdaems500}
      />
      <div className="z-20">
        <h2 className="pb-5 text-sm uppercase tracking-[15px] text-[#6E430D]">
          Software Engineer
        </h2>
        <h1 className="px-10 text-5xl font-semibold lg:text-6xl">
          <span className="mr-3 text-[#D2C5B4]">{heroText}</span>
          <Cursor cursorColor="#6E430D" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
