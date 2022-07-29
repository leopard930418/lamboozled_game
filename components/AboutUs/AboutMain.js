import { useState } from "react";
import { Checkbox, FormControlLabel, FormGroup, Grid } from "@mui/material";
import CustomImage from "../base/CustomImage";
import useMediaQuery from "@mui/material/useMediaQuery";
import TeacherCard from "../card/TeacherCard";
import OurTeacher from "./OurTeacher";

export default function AboutMain() {
  const isPhoneMode = useMediaQuery("(max-width:600px)");
  return (
    <>
      <div className="w-full h-full pt-20 pb-10">
        <CustomImage
          src={`/images/AboutHeader${isPhoneMode ? "M" : ""}.svg`}
          className="w-full"
        />
      </div>
      <div className="flex flex-col md:flex-row p-2 md:p-20">
        <div className="w-full md:w-1/2">
          <CustomImage
            src="/images/AboutImage1.svg"
            className="w-full md:w-11/12"
          ></CustomImage>
        </div>
        <div className="w-full md:w-1/2 flex flex-col space-y-4 pl-0 md:pl-20">
          <div className="text-3xl md:text-5xl pb-4 text-[#030303] text-left font-bold pt-10">
            Achieve Your <br /> Goals With BERC
          </div>
          <div className="text-lg pb-4 text-[#5E5E5E] text-left ">
            Lörem ipsum reass spengen nyng att betredes. Pugisk gyna, deng med
            preheten. Homosade lafan. Or jyr obelt. Makror nidyda parapus rår.
            Evis poteligen. Desår kontranas josk. Intrader bir. preheten.
          </div>
          <div className="flex flex-col space-y-4">
            <div className="flex flex-row items-center">
              <div>
                <CustomImage src="/images/checkIcon.svg"></CustomImage>
              </div>
              <div className="text-[#322E2E] text-base pl-4">
                Upskill your organization
              </div>
            </div>
            <div className="flex flex-row items-center">
              <div>
                <CustomImage src="/images/checkIcon.svg"></CustomImage>
              </div>
              <div className="text-[#322E2E] text-base  pl-4">
                Access more then 100K online courses
              </div>
            </div>
            <div className="flex flex-row items-center">
              <div>
                <CustomImage src="/images/checkIcon.svg"></CustomImage>
              </div>
              <div className="text-[#322E2E] text-base pl-4">
                Learn the latest skills
              </div>
            </div>
          </div>

          <div className="py-8">
            <button className="rounded-md bg-[#F9AA1B] text-[#030303] py-2 px-4">
              Apply Now
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row-reverse p-2 md:p-20">
        <div className="w-full md:w-1/2">
          <CustomImage
            src="/images/AboutImage2.svg"
            className="w-full"
          ></CustomImage>
        </div>
        <div className="w-full md:w-1/2 flex flex-col space-y-4 pr-0 md:pr-20">
          <div className="text-2xl md:text-4xl pb-4 text-[#030303] text-left font-bold pt-10">
            Why we are best?
          </div>
          <div className="text-xl md:text-2xl pb-4 text-[#5E5E5E] text-left ">
            Everything you can do in a physical classroom you can do with eLearn
          </div>
          <div className="text-base pb-4 text-[#5E5E5E] text-left ">
            Lörem ipsum reass spengen nyng att betredes. Pugisk gyna, deng med
            preheten. Homosade lafan. Or jyr obelt. Makror nidyda parapus rår.
            Evis poteligen. Desår kontranas josk. Intrader bir.
          </div>

          <div className="py-4">
            <button className="border-b border-black text-[#030303]">
              Learn more
            </button>
          </div>
        </div>
      </div>
      <OurTeacher />
      <div className="p-2 md:p-20">
        <div className="text-2xl md:text-4xl text-[#030303] font-bold text-center pt-4 pb-8">
          We Are Proud
        </div>
        <div className="text-base md:text-xl text-[#5E5E5E] text-center pt-4 pb-8">
          You don't have to struggle alone, you're got our assistance and help.
        </div>
        {isPhoneMode ? (
          <div className="flex flex-col">
            <div className="flex flex-row justify-around">
              <div className="flex flex-col items-center pb-4">
                <CustomImage
                  src="/images/totalEnrolledIcon.svg"
                  className="h-8 pb-2"
                />
                <div className="text-black text-3xl ">345858</div>
                <div className="text-[#5E5E5E] text-base ">
                  Students Enrolled
                </div>
              </div>
              <div className="flex flex-col items-center">
                <CustomImage
                  src="/images/totalCourseIcon.svg"
                  className="h-8 pb-2"
                />
                <div className="text-black text-3xl ">2456</div>
                <div className="text-[#5E5E5E] text-base ">Total Courses</div>
              </div>
            </div>
            <div className="flex flex-row justify-around">
              <div className="flex flex-col items-center">
                <CustomImage
                  src="/images/totalLearnerIcon.svg"
                  className="h-8 pb-2"
                />
                <div className="text-black text-3xl ">24085</div>
                <div className="text-[#5E5E5E] text-base ">Online Learners</div>
              </div>
              <div className="flex flex-col items-center">
                <CustomImage
                  src="/images/totalFollowerIcon.svg"
                  className="h-8 pb-2"
                />
                <div className="text-black text-3xl ">202k</div>
                <div className="text-[#5E5E5E] text-base ">
                  Foreign Followers
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-row justify-between">
            <div className="flex flex-col items-center">
              <CustomImage
                src="/images/totalEnrolledIcon.svg"
                className="h-8 pb-2"
              />
              <div className="text-black text-3xl ">345858</div>
              <div className="text-[#5E5E5E] text-base ">Students Enrolled</div>
            </div>
            <div className="flex flex-col items-center">
              <CustomImage
                src="/images/totalCourseIcon.svg"
                className="h-8 pb-2"
              />
              <div className="text-black text-3xl ">2456</div>
              <div className="text-[#5E5E5E] text-base ">Total Courses</div>
            </div>
            <div className="flex flex-col items-center">
              <CustomImage
                src="/images/totalLearnerIcon.svg"
                className="h-8 pb-2"
              />
              <div className="text-black text-3xl ">24085</div>
              <div className="text-[#5E5E5E] text-base ">Online Learners</div>
            </div>
            <div className="flex flex-col items-center">
              <CustomImage
                src="/images/totalFollowerIcon.svg"
                className="h-8 pb-2"
              />
              <div className="text-black text-3xl ">202k</div>
              <div className="text-[#5E5E5E] text-base ">Foreign Followers</div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
