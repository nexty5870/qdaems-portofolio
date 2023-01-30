import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly px-10 text-center md:flex-row md:text-left"
    >
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-[#D2C5B4]">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        src="qdaemsdubai.png"
        alt="Quentin Daems Dubai"
        className="h-45 md:h-95 -mb-20 w-60 flex-shrink-0 rounded-full object-cover md:mb-0 md:w-64 md:rounded-lg xl:h-[600px] xl:w-[500px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#A741D4]/80">little</span>{" "}
          background
        </h4>
        <p className="text-justify text-base">
          💡 I'm Quentin. Here is a little bit about me... I've always been
          passionate about computers and have been surrounded by technology all
          my life. I come from a networking background and decided to start
          learning to code since 2017 due to the repetitive task that network
          can bring down the line. I always liked building stuff - from DIY to
          Web App. I have been working for the same company for over 15 years,
          from Network Engineer to Project Manager and now holding the position
          of Vice President Operations EMEA & APAC. I'm managing an
          international team. I have a wide variety of skills from networking to
          project management to DevOps (K8s / Cloud Architecture / Linux). I
          like working under pressure & meeting deadlines. I'm a self sufficient
          person, decision maker eager to learn new things.
          <br />
          <br />
          All this brought me to learn WebDev and specialise in FrontEnd.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
