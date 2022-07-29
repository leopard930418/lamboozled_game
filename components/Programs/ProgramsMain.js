import { useState } from "react";
import { Checkbox, FormControlLabel, FormGroup, Grid } from "@mui/material";
import CustomImage from "../base/CustomImage";
import useMediaQuery from "@mui/material/useMediaQuery";
import TeacherCard from "../card/TeacherCard";
import NewsAndResCard from "../card/NewsAndResCard";
import ProgramsCard from "../card/ProgramsCard";
import ProgramCourseCard from "../card/ProgramCourseCard";

export default function ProgramsMain() {
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
        <div className="w-full md:w-1/2 pr-0 md:pr-20">
          <CustomImage src="/images/ProgramsImage1M.svg" className="w-full"></CustomImage>
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4">
          <div className="text-2xl md:text-4xl pb-4 text-[#030303] text-center md:text-left font-bold pt-10">
            All Famous Global Class at One Place
          </div>

          <div className="text-base pb-4 text-[#5E5E5E] text-center md:text-left ">
            Non-disclosure agreement seed round seed money accelerator
            infulencer. Growth hacking return nondis sure agreement seed round
            seed money. Growthret hacking return nondis.
          </div>

          <div className="py-4 flex justify-center md:justify-start text-red-700">
            <button className="text-red-700">Learn more</button>
          </div>
        </div>
      </div>
      <div className="flex flex-col p-2 md:p-20">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 flex flex-col pr-0 md:pr-20">
            <div className="text-2xl md:text-4xl pb-4 md:pb-16 text-[#030303] text-left  font-bold">
              Our Few Programs
            </div>
            <ProgramsCard
              imgsrc="/images/HistoryImage6.svg"
              btnstatus="PRESS RELEASE"
            />
            <ProgramsCard imgsrc="/images/HistoryImage7.svg" btnstatus="NEWS" />
            <ProgramsCard imgsrc="/images/HistoryImage8.svg" btnstatus="NEWS" />
          </div>
          <div className="w-full md:w-1/2 flex flex-col ">
            <div>
              <CustomImage src="/images/ProgramsImage2.svg" className="w-full" />
            </div>
          </div>
        </div>
      </div>
      <div className="p-2 md:p-20">
        <div className="text-2xl md:text-4xl text-[#030303] font-bold text-center pt-4 pb-8">
          Our Popular Courses
        </div>
        <div className="text-base md:text-xl text-[#5E5E5E] text-center pt-4 pb-8">
          Non-disclosure agreement seed round seed money <br />
          accelerator infulencer.growth hacking return.
        </div>
        <Grid container spacing={4}>
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <ProgramCourseCard
              imgsrc="/images/DataAnalyticsIcon.svg"
              title="Data Analytics"
              description="Non-disclosure agreement seed round seed money accelerator infulencer."
              classesCount={20}
            />
          </Grid>
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <ProgramCourseCard
              imgsrc="/images/PythonIcon.svg"
              title="Python"
              description="Non-disclosure agreement seed round seed money accelerator infulencer."
              classesCount={16}
            />
          </Grid>
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <ProgramCourseCard
              imgsrc="/images/DMarketingIcon.svg"
              title="Digital Marketing"
              description="Non-disclosure agreement seed round seed money accelerator infulencer."
              classesCount={13}
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
}
