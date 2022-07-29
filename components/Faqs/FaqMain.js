import { useState } from "react";
import { Checkbox, FormControlLabel, FormGroup, Grid } from "@mui/material";
import CustomImage from "../base/CustomImage";
import useMediaQuery from "@mui/material/useMediaQuery";
import TeacherCard from "../card/TeacherCard";

export default function FaqMain() {
  const isPhoneMode = useMediaQuery("(max-width:600px)");
  return (
    <>
      <div className="w-full h-full pt-20 pb-10">
        <CustomImage
          src={`/images/FaqHeader${isPhoneMode ? "M" : ""}.svg`}
          className="w-full"
        />
      </div>
      <div className="flex justify-center">
        <div className="w-full md:w-1/2 flex flex-col md:flex-row">
          <div className="w-full md:w-2/3 flex flex-col justify-center">
            <div className="text-lg text-[#D1222A] py-4 text-center md:text-left">ALL THE QUESTIONS</div>
            <div className="text-4xl text-black font-bold text-center md:text-left">MOST FREQUENT QUESTIONS</div>
          </div>
          <div className="w-full md:w-1/3 flex justify-center">
            <CustomImage src="/images/FaqImage.svg" className="" />
          </div>
        </div>

      </div>
      
    </>
  );
}
