import React, { useEffect, useState } from "react";
import { Container } from "postcss";
import CustomImage from "../base/CustomImage";
import MyImage from "../base/MyImage";
// FOR IMPORTING ARITCLE DATA
import { withStyles, makeStyles } from "@mui/styles";
// MODULES FOR DRAG&DROP
import Router from "next/router";
import { Button } from "@mui/material";
// import MyToolTip from "../base/MyToolTip";
import { useDispatch } from "react-redux";
import { updatePlayStatus } from "../../store/reducers/gameSlice";
export default function Welcome({ handleStepId }) {
  const dispatch = useDispatch();
  return (
    <>
      <div
        className={`text-center max-w-[1280px] max-h-[790px] w-full bg-cover bg-no-repeat h-full fixed top-1/2 left-1/2 -translate-x-1/2 
                            -translate-y-1/2 bg-[url('/images/LandingBackground.jpg')]`}
      >
        <div className="fixed bottom-1/4 ml-2/4">
          <Button
            variant="contained"
            onClick={() => {
              dispatch(updatePlayStatus("story"));
            }}
          >
            Game Start
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              dispatch(updatePlayStatus("tutorial"));
            }}
          >
            Tutorial
          </Button>
        </div>
      </div>
    </>
  );
}
