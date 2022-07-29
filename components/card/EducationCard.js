import { Grid } from "@mui/material";
import React from "react";
import CustomImage from "../base/CustomImage";
import CustomText from "../base/CustomText";

export default function EducationCard({
  imgsrc = "",
  title = "",
  description = "",
}) {
  return (
    <div className="w-full h-80 bg-white rounded-xl p-6">
      <CustomImage src={imgsrc}></CustomImage>
      <CustomText size="3xl" align="left" color="black" bold className="pt-8">
        {title}
      </CustomText>
      <CustomText size="xl" align="left" color="black" className="break-words">
        {description}
      </CustomText>
    </div>
  );
}
