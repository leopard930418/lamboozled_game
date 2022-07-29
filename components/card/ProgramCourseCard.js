import { Grid } from "@mui/material";
import React from "react";
import CustomImage from "../base/CustomImage";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

export default function ProgramCourseCard({
  imgsrc = "",
  title = "",
  description = "",
  classesCount = 0,
}) {
  return (
    <div className="w-full h-full bg-white rounded-xl p-6">
      <CustomImage src={imgsrc}></CustomImage>
      <div className="text-2xl text-left text-black font-bold py-8">
        {title}
      </div>
      <div className="text-xl text-left text-[#5E5E5E] break-words">
        {description}
      </div>
      <div className="flex flex-row py-4">
        <CustomImage src="/images/ClassesIcon.svg"></CustomImage>
        <div className="text-base text-[#999898] pl-4">
          {classesCount} Classes
        </div>
      </div>
      <div className="flex justify-end">
        <ArrowCircleRightIcon style={{ color: "#2E6D48", fontSize:"40px"}}/>
      </div>
    </div>
  );
}
