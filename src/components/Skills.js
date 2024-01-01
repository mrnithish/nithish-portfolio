import React from "react";
// import 'boxicons';
import { LiaPython } from "react-icons/lia";
import Layout from "@/components/layout";
import { Python, SkillsIcon } from "./Icons";

const Skills = () => {
  return (
    <>
      <Layout className="pt-30">
        <h2 className="font-bold text-8xl mt-35 w-full text-center min-h-[auto] pb-28 md:text-6xl md:mt-32">
          Skills
        </h2>
        <div className="grid w-full grid-row-8 gap-16">
        
          <div className="flex-[1_1_40rem]">
            <h3 className="text-[2.5rem] mt-0 mb-6 mx-0 font-semibold md:text-[2rem]">
              Coding Skills
            </h3>
            <div className="relative border-[color:var(--main-color)] z-[1] overflow-hidden px-6 py-2 rounded-[0.6rem] border-[0.2rem] border-solid">
              <div>
                <div className="flex justify-between mb-1">
                  <h3 className="text-base font-medium">Python</h3>
                  <h3>
                    <span className="text-sm font-medium">75%</span>
                  </h3>
                </div>
                <div className="w-full mb-5 h-4 overflow-hidden rounded-full bg-gray-200">
                  <div
                    className="h-4 animate-pulse rounded-full bg-gradient-to-r from-green-500 to-blue-500"
                    style={{ width: "75%" }}
                  ></div>
                </div>

                <div className="flex justify-between mt-3">
                  <h3 className="text-base font-medium">Java</h3>
                  <h3>
                    <span className="text-sm font-medium">70%</span>
                  </h3>
                </div>
                <div className="w-full mb-5 h-4 overflow-hidden rounded-full bg-gray-200">
                  <div
                    className="h-4 animate-pulse rounded-full bg-gradient-to-r from-green-500 to-blue-500"
                    style={{ width: "70%" }}
                  ></div>
                </div>

                <div className="flex justify-between mt-3">
                  <h3 className="text-base font-medium">C</h3>
                  <h3>
                    <span className="text-sm font-medium">60%</span>
                  </h3>
                </div>
                <div className="w-full mb-5 h-4 overflow-hidden rounded-full bg-gray-200">
                  <div
                    className="h-4 animate-pulse rounded-full bg-gradient-to-r from-green-500 to-blue-500"
                    style={{ width: "60%" }}
                  ></div>
                </div>

                <div className="flex justify-between mt-3">
                  <h3 className="text-base font-medium">SQL</h3>
                  <h3>
                    <span className="text-sm font-medium">68%</span>
                  </h3>
                </div>
                <div className="w-full mb-5 h-4 overflow-hidden rounded-full bg-gray-200">
                  <div
                    className="h-4 animate-pulse rounded-full bg-gradient-to-r from-green-500 to-blue-500"
                    style={{ width: "68%" }}
                  ></div>
                </div>

                <div className="flex justify-between mt-3">
                  <h3 className="text-base font-medium">Tableu</h3>
                  <h3>
                    <span className="text-sm font-medium">75%</span>
                  </h3>
                </div>
                <div className="w-full mb-5 h-4 overflow-hidden rounded-full bg-gray-200">
                  <div
                    className="h-4 animate-pulse rounded-full bg-gradient-to-r from-green-500 to-blue-500"
                    style={{ width: "75%" }}
                  ></div>
                </div>

                <div className="flex justify-between mt-3">
                  <h3 className="text-base font-medium">Advanced Excel</h3>
                  <h3>
                    <span className="text-sm font-medium">77%</span>
                  </h3>
                </div>
                <div className="w-full mb-5 h-4 overflow-hidden rounded-full bg-gray-200">
                  <div
                    className="h-4 animate-pulse rounded-full bg-gradient-to-r from-green-500 to-blue-500"
                    style={{ width: "77%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-[1_1_40rem] mt-20px my-63">
            <h3 className="text-[2.5rem] mt-5 mb-6 mx-0 font-semibold md:text-[2rem]">
              Professional Skills
            </h3>
            <div className=" relative border-[color:var(--main-color)] z-[1] overflow-hidden px-6 py-2 rounded-[0.6rem] border-[0.2rem] border-solid ">
              <div>
                <div className="flex justify-between mb-1">
                  <h3 className="text-base font-medium">Data Mining</h3>
                  <h3>
                    <span className="text-sm font-medium">80%</span>
                  </h3>
                </div>
                <div className="w-full mb-5 h-4 overflow-hidden rounded-full bg-gray-200">
                  <div
                    className="h-4 animate-pulse rounded-full bg-gradient-to-r from-green-500 to-blue-500"
                    style={{ width: "80%" }}
                  ></div>
                </div>

                <div className="flex justify-between mt-3">
                  <h3 className="text-base font-medium">Automation</h3>
                  <h3>
                    <span className="text-sm font-medium">75%</span>
                  </h3>
                </div>
                <div className="w-full mb-5 h-4 overflow-hidden rounded-full bg-gray-200">
                  <div
                    className="h-4 animate-pulse rounded-full bg-gradient-to-r from-green-500 to-blue-500"
                    style={{ width: "75%" }}
                  ></div>
                </div>

                <div className="flex justify-between mt-3">
                  <h3 className="text-base font-medium">Web Development</h3>
                  <h3>
                    <span className="text-sm font-medium">70%</span>
                  </h3>
                </div>
                <div className="w-full mb-5 h-4 overflow-hidden rounded-full bg-gray-200">
                  <div
                    className="h-4 animate-pulse rounded-full bg-gradient-to-r from-green-500 to-blue-500"
                    style={{ width: "70%" }}
                  ></div>
                </div>

                <div className="flex justify-between mt-3">
                  <h3 className="text-base font-medium">Android Development</h3>
                  <h3>
                    <span className="text-sm font-medium">55%</span>
                  </h3>
                </div>
                <div className="w-full mb-5 h-4 overflow-hidden rounded-full bg-gray-200">
                  <div
                    className="h-4 animate-pulse rounded-full bg-gradient-to-r from-green-500 to-blue-500"
                    style={{ width: "55%" }}
                  ></div>
                </div>
                <div className="flex justify-between mt-3">
                  <h3 className="text-base font-medium">SEO Marketing</h3>
                  <h3>
                    <span className="text-sm font-medium">80%</span>
                  </h3>
                </div>
                <div className="w-full mb-5 h-4 overflow-hidden rounded-full bg-gray-200">
                  <div
                    className="h-4 animate-pulse rounded-full bg-gradient-to-r from-green-500 to-blue-500"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>
            </div>
          
          </div>

        </div>
      </Layout>
    </>
  );
};
export default Skills;
