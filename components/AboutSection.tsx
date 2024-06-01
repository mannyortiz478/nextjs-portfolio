import React from "react";
import Image from "next/image";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaPython, FaJava, FaGitAlt, FaGithub, FaCloud } from "react-icons/fa";
import { SiTypescript, SiMysql, SiJson, SiNextdotjs, SiTailwindcss, SiVercel, SiFirebase, SiJupyter, SiLinux, SiGooglecloud, SiMicrosoftazure, SiVirtualbox, SiTensorflow } from "react-icons/si";

const skills = [
  { skill: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
  { skill: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
  { skill: "JavaScript", icon: <FaJsSquare />, color: "#F7DF1E" },
  { skill: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
  { skill: "Python", icon: <FaPython />, color: "#3776AB" },
  { skill: "Java", icon: <FaJava />, color: "#007396" },
  { skill: "MySQL", icon: <SiMysql />, color: "#4479A1" },
  { skill: "JSON", icon: <SiJson />, color: "#000000" },
  { skill: "React", icon: <FaReact />, color: "#61DAFB" },
  { skill: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
  { skill: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
  { skill: "Git", icon: <FaGitAlt />, color: "#F05032" },
  { skill: "GitHub", icon: <FaGithub />, color: "#181717" },
  { skill: "Vercel", icon: <SiVercel />, color: "#000000" },
  { skill: "Prompt Engineering", icon: null, color: "#FF5733" },
  { skill: "AI", icon: null, color: "#4CAF50" },
  { skill: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
  { skill: "Jupyter Notebooks", icon: <SiJupyter />, color: "#F37626" },
  { skill: "Linux", icon: <SiLinux />, color: "#FCC624" },
  { skill: "Google Cloud", icon: <SiGooglecloud />, color: "#4285F4" },
  { skill: "Azure", icon: <SiMicrosoftazure />, color: "#0089D6" },
  { skill: "Virtual Box", icon: <SiVirtualbox />, color: "#183A61" },
  { skill: "TensorFlow", icon: <SiTensorflow />, color: "#FF6F00" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-10 h-1 mx-auto my-4 bg-sky-400 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl text-sky-600 font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p className="text-lg">
              Hi, my name is Manny and I am a{" "}
              <span className="font-bold text-sky-400 ">{"highly ambitious"}</span>,
              <span className="font-bold text-sky-400 ">{" self-motivated"}</span>,
              <span className="font-bold text-sky-400 ">{" curiosity driven"}</span>, and 
              <span className="font-bold text-sky-400 ">{" adaptable"}</span> developer
              based in PA.
            </p>
            <br />
            <p className="text-lg">
              I am currently pursuing an undergraduate Bachelor of Science in Enterprise Technology Integration at Penn State University.
            </p>
            <br />
            <p className="text-lg">
              I have a wide range of hobbies and passions that keep me busy.
              From reading, playing sports, to traveling,
              I am always seeking new experiences and love to keep myself
              engaged and learning new things.
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-sky-400">
                have a growth mindset
              </span>{" "}
              and that&#39;s what I strive to do. I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and am
              always open to new opportunities.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl text-sky-600 font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <div
                    key={idx}
                    className="flex items-center bg-gray-200 px-4 py-2 mr-2 mt-2 rounded font-semibold"
                    style={{ backgroundColor: item.color }}
                  >
                    {item.icon && <span className="mr-2 text-white">{item.icon}</span>}
                    <p className="text-white">{item.skill}</p>
                  </div>
                );
              })}
            </div>
            <Image
              src="/hero-image2.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
