import { useState } from "react";
import { Checkbox, FormControlLabel, FormGroup, Grid } from "@mui/material";
import CustomImage from "../base/CustomImage";
import useMediaQuery from "@mui/material/useMediaQuery";
import TeacherCard from "../card/TeacherCard";

export default function HistoryMain() {
  const isPhoneMode = useMediaQuery("(max-width:600px)");
  return (
    <>
      <div className="w-full h-full pt-20 pb-10">
        <CustomImage
          src={`/images/HistoryHeader${isPhoneMode ? "M" : ""}.svg`}
          className="w-full"
        />
      </div>

      <div className="flex flex-col md:flex-row p-2 md:p-20">
        <div className="w-full md:w-1/2 p-0 md:p-20">
          <CustomImage
            src="/images/HistoryImage1.svg"
            className="w-full"
          ></CustomImage>
        </div>
        <div className="w-full md:w-1/2 flex flex-col space-y-4 p-0 md:p-20">
          <div className="text-2xl md:text-4xl pb-4 text-[#030303] text-center md:text-left font-bold pt-10">
            TC Alumni Ask “Why Not Consider Credentialing High School Teachers
            as College Adjuncts?”
          </div>
          <div className="text-xl md:text-2xl pb-4 text-[#5E5E5E] text-center md:text-left ">
            TC alumni propose a pathway to higher education in a new op-ed{" "}
          </div>
          <div className="text-base pb-4 text-[#5E5E5E] text-center md:text-left ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>

          <div className="py-4 flex justify-center md:justify-start">
            <button className="border-b border-black text-[#030303]">
              Learn more
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col p-2 md:p-20">
        <div className="w-full flex flex-col space-y-4">
          <div className="text-2xl md:text-4xl pb-4 text-[#030303] text-center  font-bold pt-10">
            What is eLearn?
          </div>
          <div className="text-base pb-4 text-[#5E5E5E] text-center  ">
            eLearn is a platform that allows educators to create online classes
            whereby they can store the course materials online; manage
            assignments, quizzes and exams; monitor due dates; grade results and
            provide students with feedback all in one place.
          </div>
          {isPhoneMode? (
          <div className="relative flex flex-col space-y-10">
            <div className="absolute top-1/2 w-full md:w-2/12 rotate-45">
              <div className="w-ful1 h-auto">
                <CustomImage src="/images/loadImage.svg" />
              </div>
            </div>
            <div className="relative w-full md:w-5/12">
              <div className="w-ful1 h-auto]">
                <CustomImage
                  src="/images/HistoryImage3.svg"
                  className="w-full"
                />
              </div>
              <div className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="text-3xl text-center font-bold text-white pb-4">
                  FOR INSTRUCTORS
                </div>
                <div className="flex justify-center">
                  <button className="border rounded-3xl border-white text-white text-center px-4 py-2">
                    Start a class today
                  </button>
                </div>
              </div>
            </div>

            <div className="relative w-full md:w-5/12">
              <div className="w-ful1 h-auto]">
                <CustomImage
                  src="/images/HistoryImage4.svg"
                  className="w-full"
                />
              </div>
              <div className="absolute w-full  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="text-3xl text-center font-bold text-white pb-4">
                  FOR STUDENTS
                </div>
                <div className="flex justify-center">
                  <button className="rounded-3xl bg-red-700 text-white text-center px-4 py-2">
                    Enter access code
                  </button>
                </div>
              </div>
            </div>
          </div>
          ) :(
          <div className="relative flex flex-row justify-around">
            <div className="absolute top-1/2 w-full md:w-2/12">
              <div className="w-ful1 h-auto">
                <CustomImage src="/images/loadImage.svg" />
              </div>
            </div>
            <div className="relative w-full md:w-5/12">
              <div className="w-ful1 h-auto]">
                <CustomImage
                  src="/images/HistoryImage3.svg"
                  className="w-full"
                />
              </div>
              <div className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="text-3xl text-center font-bold text-white pb-4">
                  FOR INSTRUCTORS
                </div>
                <div className="flex justify-center">
                  <button className="border rounded-3xl border-white text-white text-center px-4 py-2">
                    Start a class today
                  </button>
                </div>
              </div>
            </div>

            <div className="relative w-full md:w-5/12">
              <div className="w-ful1 h-auto]">
                <CustomImage
                  src="/images/HistoryImage4.svg"
                  className="w-full"
                />
              </div>
              <div className="absolute w-full  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="text-3xl text-center font-bold text-white pb-4">
                  FOR STUDENTS
                </div>
                <div className="flex justify-center">
                  <button className="rounded-3xl bg-red-700 text-white text-center px-4 py-2">
                    Enter access code
                  </button>
                </div>
              </div>
            </div>
          </div>
          )}
        </div>
      </div>
    </>
  );
}
