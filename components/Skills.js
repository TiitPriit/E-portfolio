import { motion } from "framer-motion";
import { FaHtml5, FaPhp, FaPython, FaCss3Alt, FaNode, FaReact, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiMysql } from "react-icons/si";

const Skills = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          scale: 0.8,
          opacity: 0,
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: 2.0,
          },
        },
      }}
    >
      <div className="w-full pb-32">
        <div className="mx-auto flex flex-col justify-center">
          <p className=" font-bold text-blue-900 pb-4 text-center">Skills</p>

          <ul className="flex justify-start items-center flex-row flex-wrap gap-8 mb-2 bg-blue-50 p-8 rounded-2xl">
            <span className="text-blue-500 text-2xl w-full text-center md:w-fit">Backend</span>

            <li className=" text-xl font-bold flex justify-center items-center flex-col">
              <FaPython size={40} />
              Python
            </li>
            <li className=" text-xl font-bold flex justify-center items-center flex-col">
              <FaNode size={40} />
              Node Js
            </li>
            <li className=" text-xl font-bold flex justify-center items-center flex-col">
              <SiMysql size={40} />
              Mysql
            </li>
            <li className=" text-xl font-bold flex justify-center items-center flex-col">
              <FaPhp size={40} />
              Php
            </li>
          </ul>

          <ul className="flex justify-start items-center flex-row gap-8 flex-wrap mb-2 bg-blue-50 p-8 rounded-2xl">
            <span className="text-blue-500 text-2xl w-full text-center md:w-fit">Frontend</span>
            <li className=" text-xl font-bold flex justify-center items-center flex-col">
              <FaReact size={40} />
              React
            </li>
            <li className=" text-xl font-bold flex justify-center items-center flex-col">
              <FaHtml5 size={40} />
              HTML
            </li>
            <li className=" text-xl font-bold flex justify-center items-center flex-col">
              <FaCss3Alt size={40} />
              CSS
            </li>
            <li className=" text-xl font-bold flex justify-center items-center flex-col">
              <SiTailwindcss size={40} />
              Tailwind CSS
            </li>
          </ul>

          <ul className="flex items-center flex-row gap-8 flex-wrap mb-2 bg-blue-50 p-8 rounded-2xl">
            <span className="text-blue-500 text-2xl w-full text-center lg:w-fit">Other</span>
            <li className="text-xl font-bold flex justify-center items-center flex-col">
              <FaGithub size={40} />
              GitHub
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
