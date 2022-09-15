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
import Typed from "react-typed";
import { useDispatch } from "react-redux";
import { updatePlayStatus } from "../../store/reducers/gameSlice";
export default function Welcome({ handleStepId }) {
  const dispatch = useDispatch();
  const [landingStep, setLandingStep] = useState(1);
  return (
    <>
      {landingStep == 1 && (
        <div
          className={`text-center max-w-[1280px] max-h-[790px] w-full bg-cover bg-no-repeat h-full fixed top-1/2 left-1/2 -translate-x-1/2 
                            -translate-y-1/2 bg-[url('/images/landing_bg1.svg')] `}
        >
          <div className=" justify-center mt-[37.5%]">
            <Button
              className=""
              onClick={() => {
                // dispatch(updatePlayStatus("story"));
                setLandingStep(2);
              }}
            >
              <img src="/images/landing_startbtn.png" />
            </Button>

            {/* <Button
            variant="outlined"
            onClick={() => {
              dispatch(updatePlayStatus("tutorial"));
            }}
          >
            Tutorial
          </Button> */}
          </div>
        </div>
      )}
      {landingStep == 2 && (
        <div
          className={`text-center max-w-[1280px] max-h-[790px] w-full bg-cover bg-no-repeat h-full fixed top-1/2 left-1/2 -translate-x-1/2 
                            -translate-y-1/2 bg-[url('/images/landing_bg2.svg')] `}
        >
          <div className=" justify-center mt-[37.5%] bg-[url('/images/landing_dialogue.svg')] w-full h-52 translate-x-4">
            <div className="text-5xl w-4/6 break-words  pt-12 ml-48 ">
              <Typed
                strings={["Hi there! Welcome to Green Meadows, young lamb..."]}
                typeSpeed={75}
                className="cursor-none"
              />
              <MyImage
                src="/images/ArrowBlack.svg"
                className="cursor-pointer absolute right-[5.5%] top-[54%]  w-[80px] h-[79px]"
                onClick={() => {
                  setLandingStep(3);
                }}
              />
            </div>
          </div>
        </div>
      )}
      {landingStep == 3 && (
        <div
          className={`text-center max-w-[1280px] max-h-[790px] w-full bg-cover bg-no-repeat h-full fixed top-1/2 left-1/2 -translate-x-1/2 
                            -translate-y-1/2 bg-[url('/images/landing_bg2.svg')] justify-center`}
        >
          <input
            type="text"
            className="relative text-4xl p-4 top-1/3 border-b-2 border-black"
            placeholder="_________________________________"
          ></input>
          <MyImage
            src="/images/ArrowYellow.svg"
            className="cursor-pointer absolute right-[25.5%] top-[34%]  w-[80px] h-[79px]"
            onClick={() => {
              setLandingStep(4);
            }}
          />
          <MyImage
            src="/images/AlertPanel.svg"
            className="absolute top-2/3 left-1/4   w-[769px] h-48 break-words p-16 text-5xl"
          >
            <Typed strings={["Oh, wait, what do I call you?"]} typeSpeed={75} />
          </MyImage>
        </div>
      )}
      {landingStep == 4 && (
        <div
          className={`text-center max-w-[1280px] max-h-[790px] w-full bg-cover bg-no-repeat h-full fixed top-1/2 left-1/2 -translate-x-1/2 
                            -translate-y-1/2 bg-[url('/images/feedback.svg')] justify-center`}
        >
          <MyImage
            src="/images/AlertPanel.svg"
            className="absolute top-2/3 left-[15%]   w-[913px]  h-[186px] break-words p-8 px-16 text-3xl text-center"
          >
            <Typed
              strings={[`I hear you’re looking for a job…`]}
              typeSpeed={75}
            />
            <br />
            <Typed
              strings={[
                `But we don’t just hire anyone at the Green Meadows Post... Let’s test your lamb chops and see if you’re cut out for this job...`,
              ]}
              typeSpeed={75}
              startDelay={3000}
            />
            <MyImage
              src="/images/ArrowYellow.svg"
              className="cursor-pointer absolute right-[-5.5%] top-[60%]  w-[80px] h-[79px]"
              onClick={() => {
                setLandingStep(5);
              }}
            />
          </MyImage>
        </div>
      )}
      {landingStep == 5 && (
        <div
          className={`text-center max-w-[1280px] max-h-[790px] w-full bg-cover bg-no-repeat h-full fixed top-1/2 left-1/2 -translate-x-1/2 
                          -translate-y-1/2 bg-[url('/images/feedback.svg')] justify-center`}
        >
          <MyImage
            src="/images/AlertPanel.svg"
            className="absolute top-2/3 left-[15%]   w-[913px]  h-[186px] break-words p-16 px-16 text-3xl text-center"
          >
            <Typed
              strings={[
                `There’s a lot going on in our town, but some stories just want to pull the wool over your eyes… `,
              ]}
              typeSpeed={75}
              
            />
            <MyImage
              src="/images/ArrowYellow.svg"
              className="cursor-pointer absolute right-[-5.5%] top-[60%]  w-[80px] h-[79px]"
              onClick={() => {
                setLandingStep(6);
              }}
            />
          </MyImage>
        </div>
      )}
      {landingStep == 6 && (
        <div
          className={`text-center max-w-[1280px] max-h-[790px] w-full bg-cover bg-no-repeat h-full fixed top-1/2 left-1/2 -translate-x-1/2 
                         -translate-y-1/2 bg-[url('/images/feedback.svg')] justify-center`}
        >
          <MyImage
            src="/images/AlertPanel.svg"
            className="absolute top-2/3 left-[15%]   w-[913px]  h-[186px] break-words p-12 px-16 text-3xl text-center"
          >
            <Typed
              strings={[
                `Your job is to verify the news and make sure you publish the real ones. And remember, whatever you do,`,
              ]}
              typeSpeed={75}
              
            />
            <br/>
            <Typed
              strings={[
                `don’t get LAMBOOZLED!`,
              ]}
              typeSpeed={75}
              startDelay={4000}
              className="font-bold"
            />
            <MyImage
              src="/images/ArrowYellow.svg"
              className="cursor-pointer absolute right-[-5.5%] top-[60%]  w-[80px] h-[79px]"
              onClick={() => {
                setLandingStep(7);
              }}
            />
          </MyImage>
        </div>
      )}
      {landingStep == 7 && (
        <div
          className={`text-center max-w-[1280px] max-h-[790px] w-full bg-cover bg-no-repeat h-full fixed top-1/2 left-1/2 -translate-x-1/2 
                       -translate-y-1/2 bg-[url('/images/feedback.svg')] justify-center`}
        >
          <MyImage
            src="/images/AlertPanel.svg"
            className="absolute top-2/3 left-[15%]   w-[913px]  h-[186px] break-words p-16 px-16 text-3xl text-center"
          >
            <Typed
              strings={[
                `There’s a lot going on in our town, but some stories just want to pull the wool over your eyes… `,
              ]}
              typeSpeed={75}
              startDelay={3000}
            />
            <MyImage
              src="/images/ArrowYellow.svg"
              className="cursor-pointer absolute right-[-5.5%] top-[60%]  w-[80px] h-[79px]"
              onClick={() => {
                setLandingStep(8);
              }}
            />
          </MyImage>
        </div>
      )}
      {landingStep == 8 && (
        <div
          className={`text-center max-w-[1280px] max-h-[790px] w-full bg-cover bg-no-repeat h-full fixed top-1/2 left-1/2 -translate-x-1/2 
                            -translate-y-1/2 bg-[url('/images/landing_bg2.svg')] justify-center`}
        >
          <input
            type="text"
            className="relative text-4xl p-4 top-1/3 border-b-2 border-black"
            placeholder="_________________________________"
          ></input>
          <MyImage
            src="/images/ArrowYellow.svg"
            className="cursor-pointer absolute right-[25.5%] top-[34%]  w-[80px] h-[79px]"
            onClick={() => {
              setLandingStep(9);
            }}
          />
          <MyImage
            src="/images/AlertPanel.svg"
            className="absolute top-2/3 left-1/4   w-[769px] h-48 break-words p-16 text-5xl"
          >
            <Typed strings={["Oh, wait, what do I call you?"]} typeSpeed={75} />
          </MyImage>
        </div>
      )}
      {landingStep == 9 && (
        <div
          className={`text-center max-w-[1280px] max-h-[790px] w-full bg-cover bg-no-repeat h-full fixed top-1/2 left-1/2 -translate-x-1/2 
                            -translate-y-1/2 bg-[url('/images/landing_bg2.svg')] justify-center`}
        >
          <input
            type="text"
            className="relative text-4xl p-4 top-1/3 border-b-2 border-black"
            placeholder="_________________________________"
          ></input>
          <MyImage
            src="/images/ArrowYellow.svg"
            className="cursor-pointer absolute right-[25.5%] top-[34%]  w-[80px] h-[79px]"
            onClick={() => {
              setLandingStep(1);
            }}
          />
          <MyImage
            src="/images/AlertPanel.svg"
            className="absolute top-2/3 left-1/4   w-[769px] h-48 break-words p-16 text-5xl"
          >
            <Typed strings={["Oh, wait, what do I call you?"]} typeSpeed={75} />
          </MyImage>
        </div>
      )}
    </>
  );
}
