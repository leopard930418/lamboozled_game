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
export default function EndOfDay_4() {
  const dispatch = useDispatch();
  const [landingStep, setLandingStep] = useState(1);
  const [isFirst, setIsFirst] = useState(0);

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
                  "I just got back from the police station  Lucy’s missing!!!",
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
            <div className="text-[30px] w-9/12 break-words  pt-12 ">
              <Typed
                strings={[
                  "I know we’re all worried about her and it’s hard to think about work right now, but also we’re in the midle of an election... Lucy just interviewed both of the candidates and we need somebody to organize the interview reports right away.",
                ]}
                typeSpeed={35}
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
                   -translate-y-1/2 bg-[url('/images/feedback.svg')] justify-center flex`}
          style={{ fontFamily: "Patrick Hand" }}
        >
          <MyImage
            src="/images/BossFace1.svg"
            className="absolute w-[900px] h-[650px] top-[70px] left-[380px] "
          />
          <div className="bg-[url('/images/landing_dialogue.svg')] bg-no-repeat  h-[226px] w-[1236px] absolute bottom-4">
            <div className="text-[30px] w-9/12 break-words  pt-10 ml-[165px] ">
              <div
                className={`rounded-[40px] w-[99%] bg-white h-[80%] border-2 border-black pt-1 pb-3`}
              >
                <Typed strings={[`What do you do?`]} typeSpeed={35} />
                <div className="leading-4 pt-10 flex pb-4 ml-8">
                  <div className="flex pl-4 w-1/2">
                    <MyImage
                      src={
                        isFirst == 1
                          ? `/images/BlackHead.svg`
                          : `/images/WhiteHead.svg`
                      }
                      className=" w-[47px]  h-[47px] text-center -mt-5 cursor-pointer"
                      onClick={() => setIsFirst(1)}
                    ></MyImage>
                    <span className="ml-4">Offer to help</span>
                  </div>
                  <div className="flex pl-4 w-1/2">
                    <MyImage
                      src={
                        isFirst == 2
                          ? `/images/BlackHead.svg`
                          : `/images/WhiteHead.svg`
                      }
                      className=" w-[47px]  h-[47px] text-center -mt-5 cursor-pointer"
                      onClick={() => setIsFirst(2)}
                    ></MyImage>
                    <span className="ml-4">Stay silent</span>
                  </div>
                </div>
              </div>
            </div>
            {isFirst != 0 && (
              <MyImage
                src="/images/ArrowBlack.svg"
                className="cursor-pointer absolute bottom-4 next-btn right-10"
                onClick={() => {
                  if (isFirst == 1) {
                    dispatch(nextDay());
                    dispatch(updatePlayStatus("story"));
                  } else if (isFirst == 2) setLandingStep(4);
                }}
              />
            )}
          </div>
        </div>
      )}
      {landingStep == 4 && (
        <div
          className={`text-center max-w-[1280px] max-h-[720px] w-full bg-[length:100%_100%] h-full fixed top-1/2 left-1/2 -translate-x-1/2 
                            -translate-y-1/2 bg-[url('/images/feedback.svg')] justify-center flex`}
          style={{ fontFamily: "Patrick Hand" }}
        >
          <div className="bg-[url('/images/landing_dialogue.svg')] bg-no-repeat  h-[226px] w-[1236px] absolute bottom-4 justify-center flex">
            <div className="text-[41px] w-6/12 break-words  pt-16 ">
              <Typed
                strings={["Co-worker 1 takes on the role."]}
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
