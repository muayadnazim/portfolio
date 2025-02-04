import {
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoNodejs,
  BiLogoReact,
  BiLogoTailwindCss,
} from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { motion } from "motion/react";

export default function Tech() {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div
      id="tech"
      className="flex min-h-[100vh] w-full flex-col items-center justify-center
  gap-16 md:gap-32"
    >
      <motion.h1
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.3 }}
        className="text-4xl font-light text-white md:text-6xl "
      >
        Technologies
      </motion.h1>

      <div className="flex flex-wrap items-center justify-center gap-10 p-5">
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.3 }}
        >
          <BiLogoTailwindCss
            title="Tailwind"
            className="cursor-pointer text-[80px] text-blue-300 transition-all
        duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"
          />
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.3 }}
        >
          <BiLogoJavascript
            title="JavaScript"
            className="cursor-pointer text-[80px] text-yellow-300 transition-all
        duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"
          />
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.3 }}
        >
          <BiLogoReact
            title="React"
            className="cursor-pointer text-[80px] text-sky-300 transition-all
        duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"
          />
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.3 }}
        >
          <BiLogoNodejs
            title="NodeJs"
            className="cursor-pointer text-[80px] text-green-500 transition-all
        duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"
          />
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.3 }}
        >
          <SiExpress
            title="Express"
            className="cursor-pointer text-[80px] text-gray-500 transition-all
        duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"
          />
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.3 }}
        >
          <BiLogoMongodb
            title="Mongodb"
            className="cursor-pointer text-[80px] text-green-500 transition-all
        duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"
          />
        </motion.div>
      </div>
    </div>
  );
}
