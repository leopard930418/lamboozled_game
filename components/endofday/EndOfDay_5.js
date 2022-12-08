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
import {
  updatePlayStatus,
  updateUserName,
  nextDay,
} from "../../store/reducers/gameSlice";
export default function EndOfDay_5() {
  const dispatch = useDispatch();
  const [landingStep, setLandingStep] = useState(1);

  return (
    <>
      {landingStep == 1 && (
        <div
          className={`text-center max-w-[1280px] max-h-[720px] w-full bg-[length:100%_100%] h-full fixed top-1/2 left-1/2 -translate-x-1/2 
                            -translate-y-1/2 bg-[url('/images/feedback.svg')] justify-center flex`}
          style={{ fontFamily: "Patrick Hand" }}
        >
          <MyImage
            src="/images/endofday/AngryBoss_ch.svg"
            className="absolute w-[485px] h-[633px] top-[40px] left-[200px] "
          />
          <div className="bg-[url('/images/landing_dialogue.svg')] bg-no-repeat  h-[226px] w-[1236px] absolute bottom-4 justify-center flex">
            <div className="text-[41px] w-6/12 break-words  pt-12 ">
              <Typed
                strings={[
                  "I’ll be watching your Lamboozled meter. Make sure you get it right, rookie!",
                ]}
                typeSpeed={35}
              />
            </div>
            <MyImage
              src="/images/ArrowBlack.svg"
              className="cursor-pointer absolute bottom-4 next-btn right-10"
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
          <MyImage
            src="/images/endofday/AngryBoss_ch.svg"
            className="absolute w-[485px] h-[633px] top-[40px] left-[200px] "
          />
          <div className="bg-[url('/images/landing_dialogue.svg')] bg-no-repeat h-[226px] w-[1236px] absolute bottom-4 justify-center flex">
            <div className="text-[41px] w-9/12 break-words  pt-16 ">
              <Typed
                strings={[
                  "Nothing happens today. You just work with your boss.",
                ]}
                typeSpeed={35}
              />
            </div>
            <MyImage
              src="/images/ArrowBlack.svg"
              className="cursor-pointer absolute bottom-4 next-btn right-10"
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
