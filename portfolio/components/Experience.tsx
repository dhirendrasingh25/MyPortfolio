import React from "react";
import { Button } from "./ui/moving-border";

const Experience = () => {
  return (
    <div className="py-20 w-full">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="w-full flex flex-col mt-12 lg:grid-cols-4 grid-cols-1 gap-10">
        <div className="flex flex-col space-y-4">
          <Button
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className=" flex flex-col text-black dark:text-white border-neutral-200 dark:border-slate-800"
          > 
            <div className="flex sm:flex-row flex-col justify-aroundw w-full space-x-4 p-6">
              <div className="w-full flex justify-center py-4 sm:flex-none sm:w-[30%] sm:py-0">
                <img
                  src='/exp1.svg'
                  className="lg:w-32 md:w-20 w-16"
                />
              </div>
              <div className="px-4 sm:w-[70%] w-auto">
                <h1 className="text-start text-lg md:text-xl font-bold pb-2">
                  Frontend Developer Intern - Vighnesh Inc
                </h1>
                <div>
                  <ul className="list-disc text-left text-base font-medium">
                    <li>Collaborated with the team to refine a startup idea and brainstorm UI/UX design with designers.</li>
                    <li>Led frontend development using ReactJs with state management powered by React Redux.</li>
                    <li>Optimized code performance through React RTK Query and API calls using memoization.</li>
                    <li>Successfully developed the first prototype of Inventory management System and enhanced it into a fully ready-to-use product.</li>
                  </ul>
                </div>
              </div>
            </div>

          </Button>
          <Button
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className=" flex flex-col text-black dark:text-white border-neutral-200 dark:border-slate-800"
          > 
          <div className="flex sm:flex-row flex-col justify-around space-x-4 p-6 w-full ">
            <div className="w-full flex justify-center py-4 sm:flex-none  sm:w-[30%] sm:py-0">
              <img
                src='/exp4.svg'
                className="lg:w-32 md:w-20 w-16"
              />
            </div>
            <div className="px-4 sm:w-[70%] w-auto">
              <h1 className="text-start text-lg md:text-xl font-bold pb-2">
                Full Stack Developer Intern - Vighnesh Inc
              </h1>
              <div>
                <ul className="list-disc text-left text-base font-medium">
                  <li>Developed an Inventory Management System for 5 educational institutes using the MERN stack.</li>
                  <li>Contributed to ERP and LMS systems with PostgreSQL, Node.js, and ReactJs as key technologies.</li>
                  <li>Created backend controllers and APIs, ensuring smooth frontend integration.</li>
                  <li>Designed MVC architecture and developed frontend/backend features simultaneously using MERN stack.</li>
                  <li>Deployed the backend on Amazon EC2 and led frontend development.</li>
                  <li>Successfully completed phase 2 of the IVM Software, meeting deadlines efficiently.</li>
                  <li>Played a key role in the successful development of the ERP softwares.</li>
                </ul>
              </div>
            </div>
          </div>
          </Button>
          <Button
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className=" flex flex-col text-black dark:text-white border-neutral-200 dark:border-slate-800"
          > 
            <div className="flex sm:flex-row flex-col justify-around w-full space-x-4 p-6">
              <div className="w-full flex justify-center py-4 sm:flex-none sm:w-[30%] sm:py-0">
              <img
                src='/exp3.svg'
                className="lg:w-32 md:w-20 w-16"
              />
              </div>
              <div className="px-4 sm:w-[70%] w-auto">
                <h1 className="text-start text-lg md:text-xl font-bold pb-2">
                  Business Development Intern - JKB Education & IT Services
                </h1>
                <div>
                  <ul className="list-disc text-left text-base font-medium">
                    <li>Refined the startup idea through in-depth market research and CAC calculation.</li>
                    <li>Developed SEO strategies to enhance online visibility and product placement.</li>
                    <li>Created product placement and merchandising strategies to improve market presence.</li>
                    <li>Successfully conducted market research and refined the business idea to align with market demands.</li>
                    <li>Formulated comprehensive marketing strategies across email, social media and SEO.</li>
                  </ul>
                </div>
              </div>
            </div>

          </Button>
      </div>
      </div>
    </div>
  );
};

export default Experience;
