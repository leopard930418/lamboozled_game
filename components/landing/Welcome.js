import { Grid } from "@mui/material";
import React from "react";
import CustomImage from "../base/CustomImage";
import CustomText from "../base/CustomText";
import Router from "next/router";

export default function Welcome() {
  return (
    <>
      <div className="bg-red-700 h-90vh md:h-full px-2 md:p-20">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item lg={7} md={7} sm={12} xs={12}>
            <Grid
              container
              spacing={4}
              className="mt-20 md:mt-0 flex flex-col justify-center md:justify-start items-center md:items-start"
            >
              <Grid item>
                <div className="text-3xl md:text-5xl text-white font-bold text-center md:text-left pt-10 md:pt-0">
                  LEARN COURSES AT YOUR FINGERTIPS
                </div>
              </Grid>
              <Grid item>
                <div className="text-base md:text-2xl text-white text-center md:text-left">
                  A learning system based on formalised <br />
                  teaching with the help of resources.
                </div>
              </Grid>
              <Grid item>
                <div className="">
                  <button
                    className="rounded-3xl bg-black text-white py-2 px-4"
                    onClick={() => {
                      Router.push("/login");
                    }}
                  >
                    Try Design Labs For Free
                  </button>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={5} md={5} sm={12} xs={12}>
            <div className="flex justify-center">
              <CustomImage src={"/images/intro.svg"} className="h-[500px]"></CustomImage>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className="bg-white h-28 flex justify-center items-center">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item lg={2} md={2} sm={4} xs={4}>
            <div className="flex justify-center items-center">
              <CustomImage
                src={"/images/company1.svg"}
                className="h-8 md:h-16"
              ></CustomImage>
            </div>
          </Grid>
          <Grid item lg={2} md={2} sm={4} xs={4}>
            <div className="flex justify-center items-center">
              <CustomImage
                src={"/images/company2.svg"}
                className="h-8 md:h-16"
              ></CustomImage>
            </div>
          </Grid>
          <Grid item lg={2} md={2} sm={4} xs={4}>
            <div className="flex justify-center items-center">
              <CustomImage
                src={"/images/company3.svg"}
                className="h-8 md:h-16"
              ></CustomImage>
            </div>
          </Grid>
          <Grid item lg={2} md={2} sm={4} xs={4} sx={{ display: { xs: "none", md: "block" } }}>
            <div className="flex justify-center items-center">
              <CustomImage
                src={"/images/company4.svg"}
                className="h-8 md:h-16"
              ></CustomImage>
            </div>
          </Grid>
          <Grid item lg={2} md={2} sm={4} xs={4} sx={{ display: { xs: "none", md: "block" } }}>
            <div className="flex justify-center items-center">
              <CustomImage
                src={"/images/company5.svg"}
                className="h-8 md:h-16"
              ></CustomImage>
            </div>
          </Grid>
          <Grid item lg={2} md={2} sm={4} xs={4} sx={{ display: { xs: "none", md: "block" } }}>
            <div className="flex justify-center items-center">
              <CustomImage
                src={"/images/company6.svg"}
                className="h-8 md:h-16"
              ></CustomImage>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
