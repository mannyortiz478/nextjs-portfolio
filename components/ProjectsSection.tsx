import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "WIREDIN Website",
    description: "Simple user friendly website that illustrates the student organizations image. Includes features such as light/dark mode, interactive calendar and contact form.",
    image: "/wiredin-screen.png",
    github: "https://github.com/mannyortiz478/wiredin",
    link: "https://wiredin-gules.vercel.app/"
  },
  {
    name: "Tagging Question",
    description: "A web component that presents a question along with a selection of styled tags or chips for the user to drag and drop into an answer area. It includes features like an optional image with the question, a check answer button that highlights correct and incorrect responses, and the ability for users to reset and try again.",
    image: "/tagging-question.png",
    github: "https://github.com/mannyortiz478/tagging-question",
    link: "https://tagging-question-number.vercel.app/",
  },
  {
    name: "Party-Ui Component",
    description:
      "Web Component for adding and managing users visually represented as RPG characters within HAX sites. Integrated with DDD design system for consistent styling. Implemented JavaScript logic to restrict input, add/remove users, and trigger confetti animation on save.",
    image: "/party-ui.png",
    github: "https://github.com/mannyortiz478/haxcms-party-ui",
    link: "https://polaris-chip-5vak.vercel.app/",
  },
  {
    name: "React-Firebase Chat App",
    description: "A basic chat application, where users are authenticated first and create their own chat room and type messages. Exposing myself to various technologies, applying new skills and enhancing the application.",
    image: "/hero-image2.png",
    github: "https://github.com/mannyortiz478/react-firebase-chat",
    link: "#",
  },
  {
    name: "AI Article Summarizer",
    description: "An AI program that takes in a newspaper article and summarizes it for you. It uses NLP, and ML libraries such as textblob, nltk, newsaper. One cool feature is it gives you sentiment anaylsis and states whether positive or negative.",
    image: "/article-1.png",
    github: "https://github.com/mannyortiz478/Article-Summarizer-Ai/tree/main",
    link: "#",
  }
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-10 h-1 mx-auto my-4 bg-sky-400 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
