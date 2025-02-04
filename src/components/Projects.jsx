/* eslint-disable react/prop-types */

import image2 from "/images/2.png";
import { motion } from "motion/react";

export default function Projects() {
  const projectData = [
    {
      image: image2,
      title: "Realestate Website",
      description:
        "RealEstate is a leading real estate agency that specializes in helping clients buy, sell, and rent properties in the most desirable neighborhoods. Our team of experienced agents is dedicated to providing exceptional service and making the buying and selling process as smooth as possible.",
      technologies: [
        "Html",
        "Css",
        "Tailwind",
        "JavaScript",
        "React Js",
        "Node Js",
        "Express Js",
        "MongoDB",
      ],
    },
  ];

  const ScrollReveal = ({ children }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {children}
      </motion.div>
    );
  };

  const ProjectCard = ({ project }) => {
    return (
      <ScrollReveal>
        <a target="_blank" href="https://realestate-mern-z6c1.onrender.com/">
          <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
            <img
              src={project.image}
              alt=""
              className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]"
            ></img>

            <div>
              <div className="flex flex-col gap-3">
                <div className="text-xl font-semibold">{project.title}</div>
                <p className="text-gray-400">{project.description}</p>
              </div>

              <div className="flex flex-wrap gap-2 my-10 ">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="rounded-lg bg-black p-2">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </a>
      </ScrollReveal>
    );
  };

  return (
    <div
      id="projects"
      className="flex min-h-screen w-full flex-col items-center
       justify-center gap-16 md:px-14 md:py-24"
    >
      <ScrollReveal>
        <h1 className="text-4xl font-light text-white md:text-6xl">
          My Projects
        </h1>
      </ScrollReveal>
      <div className="flex flex-col w-full max-w-[1000px] gap-16 text-white">
        {projectData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
