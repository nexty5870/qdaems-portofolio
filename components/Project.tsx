import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Project({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative z-0 mx-auto flex h-screen max-w-full flex-col items-center justify-evenly overflow-hidden text-left md:flex-row"
    >
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-[#D2C5B4]">
        Project
      </h3>
      <div className="relative z-20 flex w-full snap-x snap-mandatory overflow-x-scroll overflow-y-hidden scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#2a1a42]">
        {projects.map((project, i) => (
          <div className="flex h-screen w-screen flex-shrink-0 snap-center flex-col items-center justify-center space-y-5 p-20 md:p-44">
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src="https://larainfo.com/storage/canvas/images/Rt7TXCqc3L2ASWKjCRRaVHhiJJIN4oeaT8tgXCMv.png"
              alt=""
              key={i}
            />
            <div className="max-w-6xl space-y-10 px-0 md:px-10">
              <h4 className="text-center text-4xl font-semibold">
                <span className="underline decoration-[#A741D4]/70">
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                UPS Clone
              </h4>
              <p className="text-center text-lg md:text-left">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae, rem.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute top-[35%] left-0 h-[500px] w-full -skew-y-12 bg-[#D2C584]/10" />
    </motion.div>
  );
}

export default Project;
