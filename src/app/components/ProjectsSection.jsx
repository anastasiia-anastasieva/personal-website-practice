"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Project 1",
    description: "Website Design",
    image: "/images/projects/1.png",
    tag: ["All", "Website Design"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Project 2",
    description: "App mobile design",
    image: "/images/projects/2.png",
    tag: ["All", "App mobile design"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Project 3",
    description: "App desktop",
    image: "/images/projects/3.png",
    tag: ["All", "App desktop"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Project 4",
    description: "Braiding",
    image: "/images/projects/4.png",
    tag: ["All", "Braiding"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Project 5",
    description: "Website Design",
    image: "/images/projects/5.png",
    tag: ["All", "Website Design"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Project 6",
    description: "App mobile design",
    image: "/images/projects/6.png",
    tag: ["All", "App mobile design"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section className="py-8 sm:py-16 " id="projects">
      <h2 className="text-center text-3xl sm:text-4xl font-bold text-white mb-4 md:mb-8">
        Portfolio
      </h2>
      <div className="text-white flex flex-row justify-center items-center flex-wrap gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Website Design"
          isSelected={tag === "Website Design"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="App mobile design"
          isSelected={tag === "App mobile design"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="App desktop"
          isSelected={tag === "App desktop"}
        />
        <ProjectTag
            onClick={handleTagChange}
            name="Braiding"
            isSelected={tag === "Braiding"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
