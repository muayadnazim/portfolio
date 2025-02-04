import image from "/public/muayad.jpg";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <div
      id="home"
      className="px-16 flex min-h-screen
  w-full items-center justify-center py-28 md:px-32"
    >
      <div
        className="flex flex-col items-center justify-center gap-12
    text-white"
      >
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <img
            src={image}
            alt=""
            className="w-[200px] cursor-pointer rounded-full 
            shadow-xl shadow-indigo-900 transition-all duration-300
            hover:-translate-y-5 hover:scale-105 hover:shadow-2xl
            hover:shadow-indigo-600 md:w-[250px] "
          />
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex max-w-[600px] flex-col items-center justify-center
        gap-5 text-center"
        >
          <h1
            className="bg-gradient-to-r  
      from-blue-500 to-pink-500 bg-clip-text text-transparent 
      text-3xl  transition-all duration-300 hover:opacity-100 font-light
      md:text-5xl
      "
          >
            Muayad Nazim
          </h1>
          <h3
            className="bg-gradient-to-r  
      from-pink-500 to-blue-500 bg-clip-text text-transparent 
      text-xl  transition-all duration-300 hover:opacity-100 md:text-2xl
      "
          >
            Web Developer
          </h3>
          <p className="md:text-base text-pretty text-xs text-gray-400">
            Software Engineer in web application design,testing, and
            maintenance. Proficient in basic programming and eager to expand
            expertise across various platforms and languages .Demonstrates a
            strong ability to learn and adapt ,with a commitment to colaborative
            teamwork and problem-solving.Actively engaged in professional growth
            through hands-on experience in web technologies
          </p>
        </motion.div>
      </div>
    </div>
  );
}
