import { useState } from "react";
import { Checkbox, FormControlLabel, FormGroup, Grid } from "@mui/material";
import CustomImage from "../base/CustomImage";
import useMediaQuery from "@mui/material/useMediaQuery";
import LastestNews from "../History/LastestNews";
import ProgramCourseCard from "../card/ProgramCourseCard";
import JoinUs from "../Courses/JoinUs";

export default function ResourcesMain() {
  const isPhoneMode = useMediaQuery("(max-width:600px)");
  return (
    <>
      <div className="w-full h-full pt-20 pb-10">
        <CustomImage
          src={`/images/ResourcesHeader${isPhoneMode ? "M" : ""}.svg`}
          className="w-full"
        />
      </div>
      <div className="w-full h-full p-4 md:p-20 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex flex-col">
          <div className="text-base text-[#D1222A] text-center md:text-left">
            Few Words of
          </div>
          <div className="text-3xl md:text-5xl text-[#2E6D48] text-center md:text-left font-bold pb-4">
            Our ResOurces
          </div>
          <div className="text-base text-[#5E5E5E] text-center md:text-left py-4">
            Read our regular blog and know the latest news about Law and many
            things of Law
          </div>
          <div className="py-4">
            <CustomImage src="/images/ResourcesImage1.svg" className="w-full" />
          </div>
          <div className="text-2xl text-[#030303] text-center md:text-left font-bold py-4">
            The Essential Thing You Must Know About US.
          </div>
          <div className="text-base text-[#2E6D48] text-center md:text-left font-bold py-4 cursor-pointer">
            READ MORE
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-end">
          <div className="w-full md:w-5/6 ">
            <div className="py-4">
              <CustomImage
                src="/images/ResourcesImage2.svg"
                className="w-full"
              />
            </div>
            <div className="text-2xl text-[#030303] text-center md:text-left font-bold py-4">
              The Essential Thing You Must Know About US.
            </div>
            <div className="text-base text-[#2E6D48] text-center md:text-left font-bold py-4 cursor-pointer">
              READ MORE
            </div>
          </div>
          <div className="w-full md:w-5/6 ">
            <div className="py-4">
              <CustomImage
                src="/images/ResourcesImage3.svg"
                className="w-full"
              />
            </div>
            <div className="text-2xl text-[#030303] text-center md:text-left font-bold py-4">
              The Essential Thing You Must Know About US.
            </div>
            <div className="text-base text-[#2E6D48] text-center md:text-left font-bold py-4 cursor-pointer">
              READ MORE
            </div>
          </div>
        </div>
      </div>
      <LastestNews />
      <div className="w-full h-full p-4 md:p-12">
        <div className="flex flex-col">
          <div className="text-3xl text-[#212832] font-bold text-center py-4">
            Why choose BERC ?
          </div>
          <div className="text-base text-[#696D76] text-center pb-8">
            We offer a wide range of opportunity for you. See what you will get
            and your benefits
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col p-4 md:p-16">
            <div className="flex justify-center md:justify-start py-4">
              <CustomImage src="/images/MemberIcon.svg" className="h-16" />
            </div>
            <div className="text-xl text-[#030303] text-center md:text-left font-bold py-4">
              Get membership
            </div>
            <div className="text-base text-[#5E5E5E] text-center md:text-left py-4">
              We are providing a offer that you can join our membership club and
              you will get some extra.
            </div>
          </div>
          <div className="flex flex-col p-4 md:p-16">
            <div className="flex justify-center md:justify-start py-4">
              <CustomImage src="/images/BecomeIcon.svg" className="h-16" />
            </div>
            <div className="text-xl text-[#030303] text-center md:text-left font-bold py-4">
              Become a Teacher
            </div>
            <div className="text-base text-[#5E5E5E] text-center md:text-left py-4">
              We are giving you to become a teacher after completing your course
              and you can join freely.
            </div>
          </div>
          <div className="flex flex-col p-4 md:p-16">
            <div className="flex justify-center md:justify-start py-4">
              <CustomImage src="/images/CertIcon.svg" className="h-16" />
            </div>
            <div className="text-xl text-[#030303] text-center md:text-left font-bold py-4">
              Get Certificate
            </div>
            <div className="text-base text-[#5E5E5E] text-center md:text-left py-4">
              We are providing a certificate to you after completing your course
              and this will help you future.
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
      <JoinUs
        imgsrc="/images/ResourcesImage4.svg"
        title="Want to Control your Future?"
        description="Lörem ipsum reass spengen nyng att betredes. Pugisk gyna, deng med preheten. Homosade lafan. Or jyr obelt. Makror nidyda parapus rår. Evis poteligen. Desår kontranas josk. Intrader bir. "
        btncolor="[#F9AA1B]"
      />
    </>
  );
}
