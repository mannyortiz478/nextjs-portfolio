import React from "react";
import Image from "next/image";
import { FaSchool, FaPencilAlt, FaGraduationCap } from "react-icons/fa";

const educationDetails = {
  university: "Penn State University",
  location: "University Park, PA",
  college: "Information Sciences and Technology",
  major: "Enterprise Technology Integration",
  year: "Junior"
};

const EducationSection = () => {
  return (
    <section id="education">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          Education
          <hr className="w-10 h-1 mx-auto my-4 bg-sky-400 border-0 rounded" />
        </h1>

        <div className="flex flex-col space-y-10 items-center justify-center md:flex-row md:space-x-10 md:space-y-0 md:p-4">
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/penn-state-logo.png"
              alt="Penn State logo"
              width={250}
              height={250}
              className="rounded-full"
            />
          </div>

          <div className="md:w-1/2">
            <div className="text-center md:text-left mb-6">
              <h2 className="text-2xl font-bold text-sky-500">
                {educationDetails.university}
              </h2>
              <p className="text-xl text-neutral-800 dark:text-neutral-100 mb-3">{educationDetails.location}</p>
              <p className="text-xl text-neutral-800 dark:text-neutral-100">
                <FaSchool className="inline-block mr-2" />
                {educationDetails.college}
              </p>
              <p className="text-xl text-neutral-800 dark:text-neutral-100">
                <FaPencilAlt className="inline-block mr-2" />
                {educationDetails.major}
              </p>
              <p className="text-xl text-neutral-800 dark:text-neutral-100">
                <FaGraduationCap className="inline-block mr-2" />
                {educationDetails.year}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
