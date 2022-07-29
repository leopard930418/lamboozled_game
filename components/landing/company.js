import { Grid } from "@mui/material";
import React from "react";
import CustomImage from "../base/CustomImage";
import CustomText from "../base/CustomText";

export default function Welcome() {
  return (
    <div className="bg-red-700">
      
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item lg={7} md={7} sm={12} xs={12}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            // marginLeft={"40px"}
            spacing={4}
          >
            <Grid item>
              <div className="text-5xl text-white font-bold">
                LEARN COURSES AT YOUR FINGERTIPS
              </div>
            </Grid>
            <Grid item>
              <div className="text-2xl text-white">
                A learning system based on formalised <br/>teaching with the help of
                resources.
              </div>
            </Grid>
            <Grid item>
              <button className="rounded-3xl bg-black text-white py-2 px-4">
                Register Now
              </button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={5} md={5} sm={12} xs={12}>
          <CustomImage src={"/images/intro.svg"}></CustomImage>
        </Grid>
      </Grid>
    </div>
  );
}
