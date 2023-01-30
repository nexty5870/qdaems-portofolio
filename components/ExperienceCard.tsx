import React from "react";
import { motion } from "framer-motion";

type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <article className="flex w-[500px] flex-shrink-0 cursor-pointer snap-center flex-col items-center space-y-7 overflow-hidden rounded-lg bg-[#32145c] p-10 opacity-40 transition-opacity duration-300 hover:opacity-100 md:w-[600px] xl:w-[900px]">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src="gtklogo.png"
        className="h-32 w-32 rounded-full object-cover object-center xl:h-[180px] xl:w-[180px]"
        alt="logo"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">
          Vice President EMEA & APAC Operations
        </h4>
        <p className="mt-1 text-2xl font-bold">GuestTek</p>
        <div className="my-2 flex space-x-2">
          <img
            className="h-10 w-10 rounded-full"
            src="skills/ts.png"
            alt="typescript logo"
          />
          {/* Tech used */}
          {/* Tech used */}
          {/* Tech used */}
        </div>
        <p className="py-5 uppercase text-gray-300">
          Srtated work ... - Ended...
        </p>
        <ul className="ml-5 list-disc space-y-4 text-lg">
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
