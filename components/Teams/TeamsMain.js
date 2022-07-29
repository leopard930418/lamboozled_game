import { useState } from "react";
import { Checkbox, FormControlLabel, FormGroup, Grid } from "@mui/material";
import CustomImage from "../base/CustomImage";
import useMediaQuery from "@mui/material/useMediaQuery";
import TeacherCard from "../card/TeacherCard";
import OurTeacher from "../AboutUs/OurTeacher";

export default function TeamsMain() {
  const isPhoneMode = useMediaQuery("(max-width:600px)");
  return (
    <>
      <div className="w-full h-full pt-20 pb-10">
        <CustomImage src={`/images/TeamHeader${isPhoneMode ? "M" : ""}.svg`} />
      </div>
      <OurTeacher />
      <div className="w-full h-full bg-[#D1222A] p-2 md:p-20">
        <div className="flex flex-col-reverse md:flex-row ">
          <div className="w-full md:w-1/2 pr-0 md:pr-10">
            <div className="text-xl md:text-2xl font-bold text-[#F9AA1B] text-center md:text-left py-4">
              Best Teacher
            </div>
            <div className="text-3xl md:text-5xl font-bold text-white text-center md:text-left pb-8">
              Professional Teacher for your Children
            </div>
            <div className="text-sm  text-[#F2F2F2] text-center md:text-left pb-8">
              Far far away, behind the world mountians. far from the countries
              Vokalia and Consonantia, there live the blind texts. Separeated
              they live in Bookmarksgrpve right at the coast of the Semantics
            </div>
            <div className="text-sm  text-[#F2F2F2] text-center md:text-left">
              Far far away, behind the world mountians. far from the countries
              Vokalia and Consonantia, there live the blind texts. Separeated
              they live in Bookmarksgrpve right at the coast of the Semantics
            </div>
            <div className="py-8 flex justify-center md:justify-start">
              <button className="rounded-md bg-[#F9AA1B] text-[#030303] font-bold py-2 px-4">
                Let's Talk
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <CustomImage src="/images/TeamImage.svg" />
          </div>
        </div>
      </div>
    </>
  );
}
