import React from "react";
import CourseCard from "../card/CourseCard";

import Slider from "react-slick";
import CustomImage from "../base/CustomImage";
import { Grid } from "@mui/material";

export default function Categories() {

  return (
    <div className="bg-[#F5F5F5] h-full px-2 py-10 md:p-20">
      <div className=" pt-10">
        <div className="text-2xl md:text-4xl pb-10 text-black text-center md:text-left font-bold">
          Topics Categories
        </div>
      </div>
      <div className="px-8 md:px-0">
        <Grid container >
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <CustomImage src="/images/DesignCategory.svg" className="w-full h-full"></CustomImage>
          </Grid>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <CustomImage src="/images/WorkCategory.svg" className="w-full h-full"></CustomImage>
          </Grid>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <CustomImage src="/images/TechnologyCategory.svg" className="w-full h-full"></CustomImage>
          </Grid>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <CustomImage src="/images/EnvironmentCategory.svg" className="w-full h-full"></CustomImage>
          </Grid>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <CustomImage src="/images/PoliticsCategory.svg" className="w-full h-full"></CustomImage>
          </Grid>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <CustomImage src="/images/LawCategory.svg" className="w-full h-full"></CustomImage>
          </Grid>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <CustomImage src="/images/NatureCategory.svg" className="w-full h-full"></CustomImage>
          </Grid>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <CustomImage src="/images/AnimalsCategory.svg" className="w-full h-full"></CustomImage>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
