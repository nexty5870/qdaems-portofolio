import React from "react";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconMail,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

function Header({}: Props) {
  return (
    <header className="sticky top-0 z-20 mx-auto flex max-w-7xl items-start justify-between p-5 py-3 xl:items-center">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.4 }}
        className="flex flex-row items-center"
      >
        {/* Social Icons */}
        <Link href="https://github.com/nexty5870" target="_blank">
          <IconBrandGithub className="mr-5 hover:text-black" size={30} />
        </Link>
        <Link href="https://www.linkedin.com/in/quentin-daems/" target="_blank">
          <IconBrandLinkedin
            className=" mr-5 cursor-pointer hover:text-[#0966c2]"
            size={30}
          />
        </Link>
        <Link href="https://twitter.com/ShvzFR" target="_blank">
          <IconBrandTwitter
            className="cursor-pointer hover:text-[#0966c2]"
            size={30}
          />
        </Link>
      </motion.div>
      <Link href="#contact">
        <motion.div
          initial={{ x: 500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex cursor-pointer flex-row items-center"
        >
          <IconMail className="mr-2 hover:text-[D2C5B4]" size={30} />
          <p className=" hidden text-sm uppercase text-gray-400 hover:text-[#D2C5B4]/40 md:inline-flex">
            Get In touch
          </p>
        </motion.div>
      </Link>
    </header>
  );
}

export default Header;
