import React, { useEffect, useState } from "react";
import { Container } from "postcss";
import CustomImage from "../base/CustomImage";
import MyImage from "../base/MyImage";
// import CustomImage_new from "../base/CustomImage_new";
// FOR IMPORTING ARITCLE DATA
import content from "../../public/assets/articles.json";
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import ReactCountdownClock from "../base/CountDownTimer";
import Meter from "../base/Meter";
import Typed from "react-typed";

// import Modal from "@mui/material/Modal";
// import Router from "next/router";

// MODULES FOR DRAG&DROP
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DragDropContainer } from "../dragdrop/DragDropContainer";
// import MyToolTip from "../base/MyToolTip";

export default function IntroStep_3({ handleStepId }) {
  const contentData = content;

  return (
    <>
      <div
        className={`max-w-[1280px] max-h-[720px] w-full h-full fixed top-1/2 left-1/2 -translate-x-1/2 
                            -translate-y-1/2 bg-[url('/images/backgroundBasic.svg')]`}
      >
        <div className="absolute top-1 right-0 flex justify-center">
          <ReactCountdownClock
            seconds={120}
            color="#fbfbfb"
            alpha={1}
            size={96}
            // onComplete={myCallback}
          />
          <div className="w-[100px] h-[100px] absolute -top-[2px] bg-[length:100%_100%] bg-[url('/images/ClockMeter.png')]"></div>
          <svg
                className="absolute left-[-45%] button"
                expanded="true"
                height="100px"
                width="100px"
                onClick={() => {
                  // console.log("help clicked");
                  handleGuideOpen();
                }}
              >
                <circle
                  className="innerCircle"
                  cx="50%"
                  stroke="#FF4040"
                  strokeWidth="10%"
                  cy="50%"
                  r="25%"
                  fill="none"
                />
              </svg>
        </div>
       

        {/* background image mapping */}
        <div className="absolute  h-[740px] top-0 -left-10 bg-[length:700px_720px]  w-6/12 -z-10 bg-[url('/images/tabletlayout.svg')] bg-no-repeat"></div>

        <DndProvider backend={HTML5Backend}>
          {/* background image mapping */}
          <Grid container className="h-full">
            <Grid item xs={12}>
              <Grid container>
                {/* <Grid item xs={1}>
                  <div className="h-full">
                    <div className="w-full  bg-no-repeat bg-fill">
                      <div></div>
                    </div>
                  </div>
                </Grid> */}
                <Grid item xs={5}>
                  <DragDropContainer
                    hideSourceOnDrag={true}
                    stickers={[0, 1]}
                    isdraging={true}
                    isIssueShow={false}
                  >
                    <div className="pt-24 w-10/12 pl-6 translate-x-20">
                      <Grid container columns={10} className="pl-10">
                        <Grid
                          item
                          container
                          lg={8}
                          className="border-2 border-black flex justify-center p-6"
                        ></Grid>
                        <Grid
                          item
                          lg={2}
                          className="border-2 border-black flex justify-center"
                        >
                          <button>
                            <CustomImage
                              src="/images/help.svg"
                              className="h-8"
                            />
                          </button>
                        </Grid>
                      </Grid>
                      <div className="flex justify-center pt-4">
                        <MyImage
                          src="/images/contentImage1.svg"
                          className="w-60 h-36"
                        />
                      </div>

                      <div className="pr-4">
                        <div className="text-2xl text-black font-bold text-center pt-2 ">
                          {contentData[0].title}
                        </div>
                        <div className="flex flex-row justify-between">
                          <div className="text-xl text-black pt-2 ">
                            {contentData[0].author}
                          </div>
                          <div className="text-xl text-black pt-2 ">
                            {contentData[0].source}
                          </div>
                        </div>
                        <div className="text-xl text-black pt-2 overflow-auto h-36">
                          {contentData[0].content}
                        </div>
                      </div>
                    </div>
                  </DragDropContainer>
                </Grid>
                <Grid item xs={5}></Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container className="h-full">
                <Grid item xs={4}>
                  <div className="fixed bottom-0 fixed-bottom w-[30%] h-24 bg-black -ml-[30%]"></div>
                  <div
                    className={`meter-bar fixed bottom-0 flexd-bottom w-[30%] `}
                  >
                    <MyImage
                      src="/images/bottomlogo.svg"
                      className={`h-24 w-full`}
                    >
                      <MyImage
                        src="/images/Calendar.svg"
                        className={`h-16 w-16 translate-y-5 ml-5 flex justify-center`}
                      >
                        <span
                          className="text-[22px] font-bold mt-[22px]"
                          style={{ fontFamily: "Patrick Hand" }}
                        >
                          1
                        </span>
                      </MyImage>

                      <MyImage
                        src="/images/MeterTitle.svg"
                        className={`h-12 w-48 -translate-y-7 ml-28`}
                      ></MyImage>
                      <Meter point={50} />
                      <div className="-translate-y-[75px] absolute right-10">
                        <ArrowForwardIosOutlinedIcon className="fixed meter-bar-arrow" />
                      </div>
                    </MyImage>
                  </div>
                </Grid>
                <Grid item xs={4}></Grid>

                <Grid item xs={4}>
                  <div
                    className={`fixed bottom-20 -right-[76%] w-full flex flex-row `}
                  >
                    <div className="bottom-0 ">
                      <div
                        className="translate-x-6 h-2/4 w-3/4 bg-white flex flex-row items-center justify-center cursor-pointer"
                        onClick={() => {
                          // handleMarkedIssuesOpen();
                          ToggleSidebar();
                        }}
                      >
                        <label className="cursor-pointer">0 issue(s)</label>
                        <MyImage
                          src="/images/eye.svg"
                          className="h-8 px-2 w-8"
                        />
                      </div>

                      <button
                        className="bg-[#dc694a] rounded-3xl px-14 py-2 text-white font-bold text-2xl"
                        onClick={() => {
                          // setCounter(100);
                          handleIsFeed(true);
                          //Router.push("/feedback");
                          calcResult();
                        }}
                      >
                        SUBMIT
                      </button>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </DndProvider>
        <div>
          {/* ${alertShow&&(
                        <svg  className="absolute top-12 left-[12.5%] button" expanded = "true" height = "150px" width = "150px" 
                        onClick={() => {
                            console.log("Alert clicked");
                            handleAlertClose();
                            console.log(alertShow);
                        }}
                        >
                            <circle className = "innerCircle" cx = "50%" stroke = "#FF4040" strokeWidth = "10%" cy = "50%" r = "25%" fill = "none"/>
                        </svg>
                    )} */}
          {/* <MyImage
            src="/images/BossMedium.svg"
            className="absolute right-[25%] bottom-32 w-[310px] h-[395px]"
          />
          <MyImage
            src="/images/AlertPanel.svg"
            className="absolute right-[20%] bottom-5 w-[769px] h-[238px]  break-words p-8"
          >
            <span className=" text-3xl">
              Great! As you start the real job, you need to review each article
              in 5min. The timer on your left will become red when 1min is left.
              Easy for now, don’t worry!
            </span>
          </MyImage>
          <MyImage
            src="/images/ArrowYellow.svg"
            className="absolute right-[15.5%] top-[85%]  w-[80px] h-[79px] cursor-pointer"
            onClick={() => {
              handleStepId(4);
            }}
          /> */}
          <div className="bg-[url('/images/landing_dialogue.svg')] bg-no-repeat  h-[226px] w-[1236px] absolute bottom-4 flex justify-center">
            <img
              src="/images/BossFace1.svg"
              className="w-[239px] h-[137px] mt-10 ml-6"
            />
            <div className="text-[34px] w-7/12 break-words  pt-12 ml-4 leading-10">
              <Typed
                strings={[
                  "Great! As you start the real job, you need to review each article in 5min. The timer is on the top-right corner. Easy for now, don’t worry!",
                ]}
                typeSpeed={35}
                className="cursor-none"
              />
            </div>
            <MyImage
              src="/images/ArrowBlack.svg"
              className="cursor-pointer absolute bottom-4 next-btn"
              onClick={() => {
                handleStepId(4);
              }}
            />
          </div>
          <div className="fixed bottom-0 fixed-bottom w-[30%] h-24 bg-black -ml-[30%]"></div>

          <div className={`meter-bar fixed bottom-0 flexd-bottom w-[30%] `}>
            <MyImage src="/images/bottomlogo.svg" className={`h-24 w-full`}>
              <MyImage
                src="/images/Calendar.svg"
                className={`h-16 w-16 translate-y-5 ml-5 flex justify-center`}
              >
                <span
                  className="text-[22px] font-bold mt-[22px]"
                  style={{ fontFamily: "Patrick Hand" }}
                >
                  1
                </span>
              </MyImage>

              <MyImage
                src="/images/MeterTitle.svg"
                className={`h-12 w-56 -translate-y-7 ml-28`}
              ></MyImage>
              {/* <Meter point={meter} /> */}
              <div className="-translate-y-[75px] absolute right-10">
                <ArrowForwardIosOutlinedIcon className="fixed meter-bar-arrow" />
              </div>
            </MyImage>
          </div>
        </div>
      </div>
    </>
  );
}
