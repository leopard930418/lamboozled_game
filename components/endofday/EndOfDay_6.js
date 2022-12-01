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
export default function EndOfDay_6() {
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
            src="/images/Boss2_C.svg"
            className="absolute w-[485px] h-[633px] top-[81px] left-[590px] "
          />
          <div className="bg-[url('/images/landing_dialogue.svg')] bg-no-repeat  h-[226px] w-[1236px] absolute bottom-4 justify-center flex">
            <div className="text-[41px] w-8/12 break-words  pt-12 ">
              <Typed
                strings={[
                  "I had a good day today. Let me help you to boost ur lamboozled meter again. I’m the best boss.",
                ]}
                typeSpeed={35}
                className="cursor-none"
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
      {landingStep == 2 && (
        <div
          className={`text-center max-w-[1280px] max-h-[720px] w-full bg-[length:100%_100%] h-full fixed top-1/2 left-1/2 -translate-x-1/2 
                            -translate-y-1/2 bg-[url('/images/endofday/OfficePantry_bg.svg')] justify-center flex`}
          style={{ fontFamily: "Patrick Hand" }}
        >
          <div className="bg-[url('/images/landing_dialogue.svg')] bg-no-repeat  h-[226px] w-[1236px] absolute bottom-4 justify-center flex">
            <div className="text-[41px] w-6/12 break-words  pt-12 ">
              <Typed
                strings={[
                  "When you two get to the door of the office pantry, you hear sheep gossiping inside...",
                ]}
                typeSpeed={35}
                className="cursor-none"
              />
            </div>
            <MyImage
              src="/images/ArrowBlack.svg"
              className="cursor-pointer absolute bottom-4 next-btn right-10"
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
                            -translate-y-1/2 bg-[url('/images/endofday/OfficePantry_bg.svg')] justify-center flex`}
          style={{ fontFamily: "Patrick Hand" }}
        >
          <MyImage
            src="/images/endofday/CoworkerFemale_ch.svg"
            className="absolute w-[235px] h-[633px] top-[81px] left-[400px] "
          />
          <div className="bg-[url('/images/landing_dialogue.svg')] bg-no-repeat  h-[226px] w-[1236px] absolute bottom-4 justify-center flex">
            <div className="text-[41px] w-6/12 break-words  pt-12 ">
              <Typed
                strings={[
                  " One of them asked, “So what do you think about the big election for mayor?”",
                ]}
                typeSpeed={35}
                className="cursor-none"
              />
            </div>
            <MyImage
              src="/images/ArrowBlack.svg"
              className="cursor-pointer absolute bottom-4 next-btn right-10"
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
                            -translate-y-1/2 bg-[url('/images/endofday/OfficePantry_bg.svg')] justify-center flex`}
          style={{ fontFamily: "Patrick Hand" }}
        >
          <MyImage
            src="/images/endofday/CoworkerMale_ch.svg"
            className="absolute w-[235px] h-[633px] top-[81px] left-[400px] "
          />
          <div className="bg-[url('/images/landing_dialogue.svg')] bg-no-repeat  h-[226px] w-[1236px] absolute bottom-4 justify-center flex">
            <div className="text-[41px] w-6/12 break-words  pt-12 ">
              <Typed
                strings={[
                  "  Another replied, “I don’t know...I mean, we shouldn’t take sides,        but our newsroom definitely has a favorite candidate...” ",
                ]}
                typeSpeed={35}
                className="cursor-none"
              />
            </div>
            <MyImage
              src="/images/ArrowBlack.svg"
              className="cursor-pointer absolute bottom-4 next-btn right-10"
              onClick={() => {
                setLandingStep(5);
              }}
            />
          </div>
        </div>
      )}
     {landingStep == 5 && (
        <div
          className={`text-center max-w-[1280px] max-h-[720px] w-full bg-[length:100%_100%] h-full fixed top-1/2 left-1/2 -translate-x-1/2 
                            -translate-y-1/2 bg-[url('/images/endofday/OfficePantry_bg.svg')] justify-center flex`}
          style={{ fontFamily: "Patrick Hand" }}
        >
        
          <div className="bg-[url('/images/landing_dialogue.svg')] bg-no-repeat  h-[226px] w-[1236px] absolute bottom-4 justify-center flex">
            <div className="text-[41px] w-7/12 break-words  pt-12 ">
              <Typed
                strings={[
                  " As you enter, the co-workers quickly become silent. They smile politely and leave.",
                ]}
                typeSpeed={35}
                className="cursor-none"
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
