import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

type Props = {};

function Experience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative mx-auto flex h-screen max-w-full flex-col items-center justify-evenly overflow-hidden px-10 text-left md:flex-row"
    >
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-[#D2C5B4]">
        Experience
      </h3>
      <div className="flex w-full snap-x snap-mandatory space-x-5 overflow-x-scroll p-10 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#2a1a42]/80">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  );
}

export default Experience;
