import React from "react"
import Image from "next/image"
import SlideUp from "./SlideUp"

const workExperience = [
  {
    company: "Columbia University",
    location: "New York City",
    role: "Research Internship",
    duration: "May 2024 - August 2024",
    logo: "/columbia-1.jpg",
    description: "Collaborated with Dr. Junfeng Yang in the Software Systems Lab at Columbia University, where I generated deepfake audio using open-source text-to-speech models with large datasets and evaluated the robustness of these models through comprehensive benchmark tests. I developed an audio deepfake detection model utilizing LSTM architecture and tested it on the generated deepfake datasets. Additionally, I created and managed Linux servers on Google Cloud Platform, employing various Linux commands and optimizing resource usage. I also wrote Python scripts to download deepfake audio, split them into smaller segments, and incorporate them into a new dataset for lab research.",
    skillsUsed: ["Deepfakes", "AI", "Linux", "Google Cloud", "JSON", "PyTorch", "Teamwork", "Communication", "Prompt Engineering"]
  },
  {
    company: "Achievify LLC",
    location: "State College, PA",
    role: "Software Developer",
    duration: "November 2023 - Present",
    logo: "/path-quester-logo.png",
    description: "I engineered and implemented AI-driven career pathways using OpenAI’s ChatGPT, leveraging data from the US Bureau of Labor Statistics and ONET through prompt engineering. Created a comprehensive career guidance system offering three distinct pathways for each career: Classic Path, Out of the Box Path, and Budget-Friendly Path. Each pathway includes detailed, step-by-step guidance with checkboxes for user progress tracking. Developed a user-friendly job board, similar to Indeed, to facilitate job searches, allowing users to efficiently search and apply for jobs. Currently developing an AI chatbot that serves as a Career Readiness Assistant, helping users with inquiries such as optimizing LinkedIn profiles for job searches, drafting SMART goals, and standing out to potential employers. Continuously improving user experience by integrating advanced AI technologies and providing personalized career advice and job search assistance.",
    skillsUsed: ["Javascript", "Next.JS", "Typescript", "Node.js", "Google Cloud", "Prompt Engineering", "Azure", "Machine Learning", "Teamwork", "Communication"]
  },
  {
    company: "University of Nevada, Reno",
    location: "Reno, Nevada",
    role: "Research Internship",
    duration: "June 2023 - July 2023",
    logo: "/nevada-logo.png",
    description: "In collaboration with Dr. Rui Hu and graduate student Zikai Zhang, I contributed to research on attacking and defending the Federated Learning AI system, assessing the efficacy and vulnerabilities of different methods. I organized weekly meetings with the principal investigator to report progress and refine objectives, while also creating informative slides to communicate findings to diverse audiences. Additionally, I mentored a high school student, facilitating their integration into the project and providing guidance on various tasks. Working within the program, I engaged with a substantial codebase, utilizing Python and Pytorch for machine learning tasks, managing models on remote servers, and collaborating on algorithm development with fellow graduate students.",
    skillsUsed: ["Linux", "Problem Solving", "Debugging", "Deep Learning", "Troubleshooting", "AI", "Teamwork", "Github", "PyTorch", "Python", "Git", "Excel"]
  }, 
  {
    company: "Penn State University",
    location: "Remote",
    role: "Research Assitant",
    duration: "July 2022 - November 2022",
    logo: "/penn-state-logo.png",
    description: "I collaborated in a human-computer interaction lab at Penn State on a project that utilized smart-camera prosthetics to aid visually impaired individuals in navigating their daily lives with the assistance of a virtual assistant. The team conducted remote interviews to gather feedback on the product. A significant milestone was drafting a research paper to present the team's findings, which involved synthesizing current and past research and adapting writing conventions to effectively communicate with the scientific community.",
    skillsUsed: ["Computer Vision", "Interviewing", "Teamwork", "Research Skills", "Analytical", "Excel", "Teamwork", "Communication"]
  },
  
]

const ExperienceSection = () => {
  return (
    <section id="experience">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          Work Experience
          <hr className="w-10 h-1 mx-auto my-4 bg-sky-400 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-center justify-center p-4">
          {workExperience.map((job, idx) => (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col items-center mb-10">
                  <div className="mb-6">
                    <Image
                      src={job.logo}
                      alt={`${job.company} logo`}
                      width={125}
                      height={125}
                      className="rounded-full"
                    />
                  </div>

                  <div className="">
                    <div className="text-center">
                      <h2 className="text-2xl font-bold text-sky-500">{job.company}</h2>
                      <p className="text-xl text-neutral-800 dark:text-neutral-100">{job.location}</p>
                      <p className="text-xl text-neutral-800 dark:text-neutral-100">Role: {job.role}</p>
                      <p className="text-xl text-neutral-800 dark:text-neutral-100">Duration: {job.duration}</p>
                      <p className="text-lg text-neutral-800 dark:text-neutral-100 mt-4">{job.description}</p>
                      <div className="flex flex-wrap justify-center mt-4">
                        {job.skillsUsed.map((skill, index) => (
                          <div key={index} className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold">
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
