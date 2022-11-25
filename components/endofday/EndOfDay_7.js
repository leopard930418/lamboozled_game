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
export default function EndOfDay_7() {
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
            src="/images/Boss2_C.svg"
            className="absolute w-[485px] h-[633px] top-[81px] left-[590px] "
          />
          <div className="bg-[url('/images/landing_dialogue.svg')] bg-no-repeat  h-[226px] w-[1236px] absolute bottom-4 justify-center flex">
            <div className="text-[35px] w-7/12 break-words  pt-8 ">
              <Typed
                strings={[
                  "Great work so far, young lamb... But maybe it’s time to get off the computer and do some old-school investigating...",
                ]}
                typeSpeed={35}
                className="cursor-none"
              />
            </div>
            <MyImage
              src="/images/ArrowBlack.svg"
              className="cursor-pointer absolute bottom-4 next-btn"
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
            src="/images/BossFace1.svg"
            className="absolute w-[900px] h-[650px] top-[70px] left-[380px] "
          />
          <div className="bg-[url('/images/landing_dialogue.svg')] bg-no-repeat  h-[226px] w-[1236px] absolute bottom-4">
            <div className="text-[30px] w-9/12 break-words  pt-10 ml-[165px] ">
              <div
                className={`rounded-[40px] w-[99%] bg-white h-[80%] border-2 border-black pt-1 pb-3`}
              >
                <Typed strings={[`What do you say?`]} typeSpeed={35} />
                <div className="leading-8 flex pb-4 ml-8">
                  <div className="flex pl-4 w-1/2">
                    <MyImage
                      src={
                        isFirst == 1
                          ? `/images/BlackHead.svg`
                          : `/images/WhiteHead.svg`
                      }
                      className=" w-[47px]  h-[47px] text-center mt-5 cursor-pointer"
                      onClick={() => setIsFirst(1)}
                    ></MyImage>
                    <span className="ml-4 mt-6">
                      Bruce's factory seems weird...
                    </span>
                  </div>
                  <div className="flex pl-2 w-1/2">
                    <MyImage
                      src={
                        isFirst == 2
                          ? `/images/BlackHead.svg`
                          : `/images/WhiteHead.svg`
                      }
                      className=" w-[47px]  h-[47px] text-center mt-5 cursor-pointer"
                      onClick={() => setIsFirst(2)}
                    ></MyImage>
                    <span className="ml-2 w-9/12">
                      Goldies's old bakery might have some hidden clues...
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <MyImage
              src="/images/ArrowBlack.svg"
              className="cursor-pointer absolute bottom-4 next-btn"
              onClick={() => {
                if (isFirst == 1) setLandingStep(3);
                else if (isFirst == 2) setLandingStep(4);
              }}
            />
          </div>
        </div>
      )}
      {landingStep == 3 && (
        <div
          className={`text-center max-w-[1280px] max-h-[720px] w-full bg-[length:100%_100%] h-full fixed top-1/2 left-1/2 -translate-x-1/2 
                            -translate-y-1/2 bg-[url('/images/endofday/BruceFactory_bg.svg')] justify-center flex`}
          style={{ fontFamily: "Patrick Hand" }}
        >
          <div className="bg-[url('/images/landing_dialogue.svg')] bg-no-repeat  h-[226px] w-[1236px] absolute bottom-4 justify-center flex">
            <div className="text-[35px] w-6/12 break-words  pt-12 ">
              <Typed
                strings={[
                  " You find Lucy’s voice recorder pen near the backdoor of the factory. What could this mean...?",
                ]}
                typeSpeed={35}
                className="cursor-none"
              />
            </div>
            <MyImage
              src="/images/ArrowBlack.svg"
              className="cursor-pointer absolute bottom-4 next-btn"
              onClick={() => {
                dispatch(nextDay());
                dispatch(updatePlayStatus("story"));
              }}
            />
          </div>
        </div>
      )}
      {landingStep == 4 && (
        <div
          className={`text-center max-w-[1280px] max-h-[720px] w-full bg-[length:100%_100%] h-full fixed top-1/2 left-1/2 -translate-x-1/2 
                            -translate-y-1/2 bg-[url('/images/endofday/GoldieBakery_bg.svg')] justify-center flex`}
          style={{ fontFamily: "Patrick Hand" }}
        >
          <div className="bg-[url('/images/landing_dialogue.svg')] bg-no-repeat  h-[226px] w-[1236px] absolute bottom-4 justify-center flex">
            <div className="text-[35px] w-6/12 break-words  pt-8 ">
              <Typed
                strings={[
                  "You find old pictures of young Goldie with co-workers and customers, holding bread and smiling .What could this mean...?",
                ]}
                typeSpeed={35}
                className="cursor-none"
              />
            </div>
            <MyImage
              src="/images/ArrowBlack.svg"
              className="cursor-pointer absolute bottom-4 next-btn"
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
