import React from "react";
import { motion } from "framer-motion";
import SkillIcons from "./SkillIcons";

type Props = {};

function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative mx-auto flex h-screen min-h-screen max-w-[2000px] flex-col items-center justify-center text-center md:text-left xl:flex-row xl:space-y-0 xl:px-10"
    >
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-[#D2C5B4]">
        Skills
      </h3>
      <h3 className="absolute top-36 text-sm uppercase tracking-[3px] text-[#D2C5B4]/30">
        Hover over a skill to find out more
      </h3>
      <div className="grid grid-cols-4 gap-5">
        <SkillIcons />
        <SkillIcons />
        <SkillIcons />
        <SkillIcons />
        <SkillIcons />
        <SkillIcons />
        <SkillIcons />
        <SkillIcons />
        <SkillIcons />
        <SkillIcons />
        <SkillIcons />
        <SkillIcons />
      </div>
    </motion.div>
  );
}

export default Skills;
