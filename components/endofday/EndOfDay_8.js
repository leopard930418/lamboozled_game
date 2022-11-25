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
import { useSelector, useDispatch } from "react-redux";
import {
  updatePlayStatus,
  updateUserName,
  nextDay,
} from "../../store/reducers/gameSlice";
export default function EndOfDay_8() {
  const dispatch = useDispatch();
  const meter = useSelector((state) => state?.game?.meter ?? 0);
  const [landingStep, setLandingStep] = useState(1);
  if (meter >= 75) {
    return (
      <>
        {landingStep == 1 && (
          <div
            className={`text-center max-w-[1280px] max-h-[720px] w-full bg-[length:100%_100%] h-full fixed top-1/2 left-1/2 -translate-x-1/2 
                              -translate-y-1/2 bg-[url('/images/endofday/BruceFactory_bg.svg')] justify-center flex`}
            style={{ fontFamily: "Patrick Hand" }}
          >
            {/* <MyImage
              src="/images/Boss2_C.svg"
              className="absolute w-[485px] h-[633px] top-[81px] left-[590px] "
            /> */}
            <div className="bg-[url('/images/landing_dialogue.svg')] bg-no-repeat  h-[226px] w-[1236px] absolute bottom-4 justify-center flex">
              <div className="text-[41px] w-6/12 break-words  pt-12 ">
                <Typed
                  strings={[
                    "You went to the factory and found Lucy’s recorder. You handed it to the police.",
                  ]}
                  typeSpeed={35}
                  className="cursor-none"
                />
              </div>
              <MyImage
                src="/images/ArrowBlack.svg"
                className="cursor-pointer absolute bottom-4 right-24  w-[80px] h-[79px]"
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
                              -translate-y-1/2 bg-[url('/images/endofday/ArrestedBoss_bg.svg')] justify-center flex`}
            style={{ fontFamily: "Patrick Hand" }}
          >
            <div className="bg-[url('/images/landing_dialogue.svg')] bg-no-repeat  h-[226px] w-[1236px] absolute bottom-4 justify-center flex">
              <div className="text-[36px] w-6/12 break-words  pt-8 ">
                <Typed
                  strings={[
                    "You reveal the truth about Bruce to the public! Turns out he is a wolf and has been secretly eating sheeps! Bruce is certainly going to jail.",
                  ]}
                  typeSpeed={35}
                  className="cursor-none"
                />
              </div>
              <MyImage
                src="/images/ArrowBlack.svg"
                className="cursor-pointer absolute bottom-4 right-24  w-[80px] h-[79px]"
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
                              -translate-y-1/2 bg-[url('/images/endofday/FoundLucy_bg.svg')] justify-center flex`}
            style={{ fontFamily: "Patrick Hand" }}
          >
            {/* <MyImage
              src="/images/endofday/CoworkerFemale_ch.svg"
              className="absolute w-[235px] h-[633px] top-[81px] left-[400px] "
            /> */}
            <div className="bg-[url('/images/landing_dialogue.svg')] bg-no-repeat  h-[226px] w-[1236px] absolute bottom-4 justify-center flex">
              <div className="text-[41px] w-6/12 break-words  pt-12 ">
                <Typed
                  strings={[
                    "The police have found the missing journalist. Justice eventually wins!",
                  ]}
                  typeSpeed={35}
                  className="cursor-none"
                />
              </div>
              {/* <MyImage
                src="/images/ArrowBlack.svg"
                className="cursor-pointer absolute bottom-4 right-24  w-[80px] h-[79px]"
                onClick={() => {
                  setLandingStep(4);
                }}
              /> */}
            </div>
          </div>
        )}
      </>
    );
  } else if (meter >= 50) {
    return (
      <>
        {landingStep == 1 && (
          <div
            className={`text-center max-w-[1280px] max-h-[720px] w-full bg-[length:100%_100%] h-full fixed top-1/2 left-1/2 -translate-x-1/2 
                              -translate-y-1/2 bg-[url('/images/endofday/BruceFactory_bg.svg')] justify-center flex`}
            style={{ fontFamily: "Patrick Hand" }}
          >
            {/* <MyImage
              src="/images/Boss2_C.svg"
              className="absolute w-[485px] h-[633px] top-[81px] left-[590px] "
            /> */}
            <div className="bg-[url('/images/landing_dialogue.svg')] bg-no-repeat  h-[226px] w-[1236px] absolute bottom-4 justify-center flex">
              <div className="text-[41px] w-6/12 break-words  pt-12 ">
                <Typed
                  strings={[
                    "You went to the factory and found Lucy’s recorder. You handed it to the police.",
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
                              -translate-y-1/2 bg-[url('/images/endofday/BruceFactory2_bg.svg')] justify-center flex`}
            style={{ fontFamily: "Patrick Hand" }}
          >
            <div className="bg-[url('/images/landing_dialogue.svg')] bg-no-repeat  h-[226px] w-[1236px] absolute top-4 justify-center flex">
              <div className="text-[41px] w-8/12 break-words  pt-12 ">
                <Typed
                  strings={[
                    "A significant amount of Sheep wool was spotted in the factory. After the DNA test, that's Lucy's...",
                  ]}
                  typeSpeed={35}
                  className="cursor-none"
                />
              </div>
              <MyImage
                src="/images/ArrowBlack.svg"
                className="cursor-pointer absolute bottom-4 right-24  w-[80px] h-[79px]"
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
                              -translate-y-1/2 bg-[url('/images/endofday/MissingPost_bg.svg')] justify-center flex`}
            style={{ fontFamily: "Patrick Hand" }}
          >
            {/* <MyImage
              src="/images/endofday/CoworkerFemale_ch.svg"
              className="absolute w-[235px] h-[633px] top-[81px] left-[400px] "
            /> */}
            <div className="bg-[url('/images/landing_dialogue.svg')] bg-no-repeat  h-[226px] w-[1236px] absolute top-4 justify-center flex -right-12">
              <div className="text-[41px] w-9/12 break-words  pt-12 ">
                <Typed
                  strings={[
                    " Turns out Bruce is a wolf and you successfully protected the Green Meadow!! However, Lucy’s missing remains a myth...",
                  ]}
                  typeSpeed={35}
                  className="cursor-none"
                />
              </div>
              {/* <MyImage
                src="/images/ArrowBlack.svg"
                className="cursor-pointer absolute bottom-4 right-24  w-[80px] h-[79px]"
                onClick={() => {
                  setLandingStep(4);
                }}
              /> */}
            </div>
          </div>
        )}
       </>
    );
  } else if (meter >= 25) {
    return (
      <>
        {landingStep == 1 && (
          <div
            className={`text-center max-w-[1280px] max-h-[720px] w-full bg-[length:100%_100%] h-full fixed top-1/2 left-1/2 -translate-x-1/2 
                              -translate-y-1/2 bg-[url('/images/endofday/BruceFactory_bg.svg')] justify-center flex`}
            style={{ fontFamily: "Patrick Hand" }}
          >
            {/* <MyImage
              src="/images/Boss2_C.svg"
              className="absolute w-[485px] h-[633px] top-[81px] left-[590px] "
            /> */}
            <div className="bg-[url('/images/landing_dialogue.svg')] bg-no-repeat  h-[226px] w-[1236px] absolute bottom-4 justify-center flex">
              <div className="text-[41px] w-6/12 break-words  pt-12 ">
                <Typed
                  strings={[
                    "You went to the factory and found Lucy’s recorder. You handed it to the police.",
                  ]}
                  typeSpeed={35}
                  className="cursor-none"
                />
              </div>
              <MyImage
                src="/images/ArrowBlack.svg"
                className="cursor-pointer absolute bottom-4 right-24  w-[80px] h-[79px]"
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
                              -translate-y-1/2 bg-[url('/images/endofday/BruceWinNews_bg.svg')] justify-center flex`}
            style={{ fontFamily: "Patrick Hand" }}
          >
            <div className="bg-[url('/images/landing_dialogue.svg')] bg-no-repeat  h-[226px] w-[1236px] absolute bottom-4 justify-center flex">
              <div className="text-[41px] w-8/12 break-words  pt-12 ">
                <Typed
                  strings={[
                    "However, it was already too late. Bruce won the election and took control of the press. ",
                  ]}
                  typeSpeed={35}
                  className="cursor-none"
                />
              </div>
              <MyImage
                src="/images/ArrowBlack.svg"
                className="cursor-pointer absolute bottom-4 right-24 w-[80px] h-[79px]"
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
                              -translate-y-1/2 bg-[url('/images/endofday/DamagedMeadow_bg.svg')] justify-center flex`}
            style={{ fontFamily: "Patrick Hand" }}
          >
            {/* <MyImage
              src="/images/endofday/CoworkerFemale_ch.svg"
              className="absolute w-[235px] h-[633px] top-[81px] left-[400px] "
            /> */}
            <div className="bg-[url('/images/landing_dialogue.svg')] bg-no-repeat  h-[226px] w-[1236px] absolute bottom-4 justify-center flex">
              <div className="text-[41px] w-8/12 break-words  pt-12 ">
                <Typed
                  strings={[
                    " Luckily, you and Lucy were able to escape the town. But Green Meadow has changed forever...",
                  ]}
                  typeSpeed={35}
                  className="cursor-none"
                />
              </div>
              {/* <MyImage
                src="/images/ArrowBlack.svg"
                className="cursor-pointer absolute bottom-4 right-24  w-[80px] h-[79px]"
                onClick={() => {
                  setLandingStep(4);
                }}
              /> */}
            </div>
          </div>
        )}

      </>
    );
  } else {
    return (
      <>
        {landingStep == 1 && (
          <div
            className={`text-left max-w-[1280px] max-h-[720px] w-full bg-[length:100%_100%] h-full fixed top-1/2 left-1/2 -translate-x-1/2 
                              -translate-y-1/2 bg-[url('/images/endofday/BruceInOffice_bg.svg')] justify-center flex`}
            style={{ fontFamily: "Patrick Hand" }}
          >
            {/* <MyImage
              src="/images/Boss2_C.svg"
              className="absolute w-[485px] h-[633px] top-[81px] left-[590px] "
            /> */}
            <img src='/images/landing_dialogue.svg' className="fixed bottom-4 w-[1100px] -ml-96" />

            <div className=" h-[226px] w-[1236px] absolute bottom-4 justify-center flex -ml-80">
              <div className="text-[35px] w-8/12 break-words  pt-12 ">
                <Typed
                  strings={[
                    "You read about many missing sheep reports recently. You told the mayoral candidates, and Bruce offered to help after the election.",
                  ]}
                  typeSpeed={35}
                  className="cursor-none"
                />
              </div>
              <MyImage
                src="/images/ArrowBlack.svg"
                className="cursor-pointer absolute bottom-4 right-48  w-[80px] h-[79px]"
                onClick={() => {
                  setLandingStep(2);
                }}
              />
            </div>
          </div>
        )}
        {landingStep == 2 && (
          <div
            className={`text-left max-w-[1280px] max-h-[720px] w-full bg-[length:100%_100%] h-full fixed top-1/2 left-1/2 -translate-x-1/2 
                              -translate-y-1/2 bg-[url('/images/endofday/WinnedBruce_bg.svg')] justify-center flex`}
            style={{ fontFamily: "Patrick Hand" }}
          >
            <div className="bg-[url('/images/landing_dialogue.svg')] bg-no-repeat  h-[226px] w-[1236px] absolute bottom-4 justify-center flex -right-16">
              <div className="text-[40px] w-8/12 break-words  pt-6 ">
                <Typed
                  strings={[
                    " You support Bruce during the election and he wins. After that, he invites you to the factory to investigate as promised. ",
                  ]}
                  typeSpeed={35}
                  className="cursor-none"
                />
              </div>
              <MyImage
                src="/images/ArrowBlack.svg"
                className="cursor-pointer absolute bottom-4 right-24  w-[80px] h-[79px]"
                onClick={() => {
                  setLandingStep(3);
                }}
              />
            </div>
          </div>
        )}
        {landingStep == 3 && (
          <div
            className={`text-left max-w-[1280px] max-h-[720px] w-full bg-[length:100%_100%] h-full fixed top-1/2 left-1/2 -translate-x-1/2 
                              -translate-y-1/2 bg-[url('/images/endofday/MissingPost2_bg.svg')] justify-center flex`}
            style={{ fontFamily: "Patrick Hand" }}
          >
            {/* <MyImage
              src="/images/endofday/CoworkerFemale_ch.svg"
              className="absolute w-[235px] h-[633px] top-[81px] left-[400px] "
            /> */}
            <div className="bg-[url('/images/landing_dialogue.svg')] bg-no-repeat bg-cover h-[226px] w-[1000px] absolute bottom-0 justify-center flex right-9">
              <div className="text-[40px] w-8/12 break-words  pt-6 ">
                <Typed
                  strings={[
                    "Right after entering the factory, you felt a strong hit. The next day, you are announced to be the second missing journalist in town.",
                  ]}
                  typeSpeed={35}
                  className="cursor-none"
                />
              </div>
              {/* <MyImage
                src="/images/ArrowBlack.svg"
                className="cursor-pointer absolute bottom-4 right-24  w-[80px] h-[79px]"
                onClick={() => {
                  setLandingStep(4);
                }}
              /> */}
            </div>
          </div>
        )}
       
      </>
    );
  }
}
