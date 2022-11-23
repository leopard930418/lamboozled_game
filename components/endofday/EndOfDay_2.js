import React, { useEffect, useState, useRef } from "react";
import { Container } from "postcss";
import CustomImage from "../base/CustomImage";
import MyImage from "../base/MyImage";
// FOR IMPORTING ARITCLE DATA
import { withStyles, makeStyles } from "@mui/styles";
// MODULES FOR DRAG&DROP
import Router from "next/router";
import { Button } from "@mui/material";
// import MyToolTip from "../base/MyToolTip";
import Typed from "react-typed";
import { useDispatch } from "react-redux";
import { updatePlayStatus, nextDay } from "../../store/reducers/gameSlice";
export default function EndOfDay_2() {
  const dispatch = useDispatch();
  const [landingStep, setLandingStep] = useState(1);
  return (
    <>
      {landingStep == 1 && (
        <div
          className={`text-center max-w-[1280px] max-h-[720px] w-full bg-[length:100%_100%] h-full fixed top-1/2 left-1/2 -translate-x-1/2 
                            -translate-y-1/2 bg-[url('/images/endofday/OfficePantry_bg.svg')] justify-center flex`}
          style={{ fontFamily: "Patrick Hand" }}
        >
          <div className="bg-[url('/images/landing_dialogue.svg')] bg-no-repeat  h-[226px] w-[1236px] absolute bottom-4 justify-center flex">
            <div className="text-[41px] w-8/12 break-words  pt-12 ">
              <Typed
                strings={[
                  "The chat you overheard yesterday is still on your mind... Maybe Lucy can tell you more...",
                ]}
                typeSpeed={35}
                className="cursor-none"
              />
            </div>
            <MyImage
              src="/images/ArrowBlack.svg"
              className="cursor-pointer absolute bottom-4 right-10  w-[80px] h-[79px]"
              onClick={() => {
                setLandingStep(2);
              }}
            />
          </div>
        </div>
      )}
      {landingStep == 2 && (
        <div
          className={`text-center max-w-[1280px] max-h-[720px] w-full bg-[length:100%_100%] h-full fixed top-1/2 left-1/2 -translate-x-1/2 
                            -translate-y-1/2 bg-[url('/images/feedback.svg')] justify-center flex`}
          style={{ fontFamily: "Patrick Hand" }}
        >
          <div className="bg-[url('/images/landing_dialogue.svg')] bg-no-repeat  h-[226px] w-[1236px] absolute bottom-4 justify-center flex">
            <div className="text-[41px] w-8/12 break-words  pt-16 ">
              <Typed
                strings={[
                  "Lucy is not at her desk, but you see this in her office...",
                ]}
                typeSpeed={35}
                className="cursor-none"
              />
            </div>
            <MyImage
              src="/images/ArrowBlack.svg"
              className="cursor-pointer absolute bottom-4 right-10  w-[80px] h-[79px]"
              onClick={() => {
                setLandingStep(3);
              }}
            />
          </div>
        </div>
      )}
      {landingStep == 3 && (
        <div
          className={`text-center max-w-[1280px] max-h-[720px] w-full bg-[length:100%_100%] h-full fixed top-1/2 left-1/2 -translate-x-1/2 
                            -translate-y-1/2 bg-[url('/images/endofday/OfficeWolfPic_bg.svg')] justify-center flex`}
          style={{ fontFamily: "Patrick Hand" }}
        >
          <div className="bg-[url('/images/landing_dialogue.svg')] bg-no-repeat  h-[226px] w-[1236px] absolute bottom-4 justify-center flex">
            <div className="text-[38px] w-9/12 break-words  pt-12 ">
              <Typed
                strings={[
                  " But you can tell that there are many pics and notes about the  two candidates...And there is a wolf picture in the middle!",
                ]}
                typeSpeed={35}
                className="cursor-none"
              />
            </div>
            <MyImage
              src="/images/ArrowBlack.svg"
              className="cursor-pointer absolute bottom-4 right-10  w-[80px] h-[79px]"
              onClick={() => {
                setLandingStep(4);
              }}
            />
          </div>
        </div>
      )}
      {landingStep == 4 && (
        <div
          className={`text-center max-w-[1280px] max-h-[720px] w-full bg-[length:100%_100%] h-full fixed top-1/2 left-1/2 -translate-x-1/2 
                            -translate-y-1/2 bg-[url('/images/feedback.svg')] justify-center flex`}
          style={{ fontFamily: "Patrick Hand" }}
        >
          <MyImage
            src="/images/endofday/Lucy_ch.svg"
            className="absolute w-[200px] h-[540px] top-[170px] left-[1000px] "
          />
          <div className="bg-[url('/images/landing_dialogue.svg')] bg-no-repeat bg-cover h-[200px] w-[1010px] absolute bottom-4 left-0">
            <div className="text-[30px] w-10/12 break-words  pt-6 ml-32">
              <Typed
                strings={[
                  "  Oh hi there, I remember you! Welcome to our newsroom.I gotta run now, but let’s chat soon about the upcoming election.There might be something going on... Let’s meet for lunch tomorrow and i’ll tell you all about it....",
                ]}
                typeSpeed={35}
                className="cursor-none"
              />
            </div>
            <MyImage
              src="/images/ArrowBlack.svg"
              className="cursor-pointer absolute bottom-4 -right-12  w-[80px] h-[79px]"
              onClick={() => {
                dispatch(nextDay());
                dispatch(updatePlayStatus("story"));
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}
