//alex created
import React, { useEffect, useState } from "react";
import { Container } from "postcss";
import CustomImage from "../base/CustomImage";
import MyImage from "../base/MyImage";
// FOR IMPORTING ARITCLE DATA
import content from "../../public/assets/articles.json";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import Meter from "../base/Meter";
// MODULES FOR DRAG&DROP
import Typed from "react-typed";

// import Router from "next/router";
import { useDispatch } from "react-redux";
import {
  updatePlayStatus,
  initMarkedStickers,
} from "../../store/reducers/gameSlice";

export default function introStep_5({ handleStepId }) {
  const dispatch = useDispatch();
  const [isFirst, setIsFirst] = useState(0);

  return (
    <>
      <div
        className={`max-w-[1280px] max-h-[712px] w-full h-full fixed top-1/2 left-1/2 -translate-x-1/2 
                            -translate-y-1/2 bg-[url('/images/backgroundBasic.svg')] justify-center flex`}
      >
        <>
          <div className="absolute  bg-cover bg-no-repeat h-[850px] top-0 left-0 ml-20 -translate-y-16 w-6/12 -z-10 object-cover bg-[url('/images/tabletlayout.svg')]"></div>
          <div className="bg-[url('/images/landing_dialogue.svg')] bg-no-repeat  h-[226px] w-[1236px] absolute bottom-4 flex justify-center">
            <img
              src="/images/BossFace1.svg"
              className="w-[239px] h-[137px] mt-10 ml-6"
            />
            <div className="text-[34px] w-7/12 break-words  pt-12 ml-4 leading-10">
              <Typed
                strings={[
                  " Your correct marks will increase the Lamboozled Meter, and the wrong ones will decrease it. The higher it is, the better you did!",
                ]}
                typeSpeed={35}
              />
            </div>
            <MyImage
              src="/images/ArrowBlack.svg"
              className="cursor-pointer absolute bottom-4 next-btn right-10"
              onClick={() => {
                handleStepId(6);
              }}
            />
          </div>
        </>

        {/* background image mapping */}
        <Grid container className="h-full">
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={1}></Grid>
              <Grid item xs={5}>
                <>
                  <div className="w-11/12 justify-self-center pt-12 ml-10">
                    <div>
                      <div className="absolute top-20  right-[50%] w-20 h-20 rounded-full bg-[#C7C7C7]">
                        <div className="h-full flex justify-center items-center text-black text-3xl font-bold">
                          0
                        </div>
                      </div>
                      <div className="flex justify-center pt-12">
                        <label className="bg-black rounded-3xl px-16 py-2 text-white font-bold text-lg text-center">
                          Correct Marks (1/2)
                        </label>
                      </div>
                      <div className="h-48 max-h-56  justify-center w-full overflow-x-hidden">
                        <div className="text-lg text-[#0DA71C] font-semibold text-center py-3 w-full">
                          The title is all-capitalized(+2)
                        </div>
                      </div>
                      <div className="flex justify-center">
                        <label className="bg-black rounded-3xl px-16 py-2 text-white font-bold text-lg">
                          Missed Or Mismarked
                        </label>
                      </div>{" "}
                      <div className="h-2/5 max-h-56  justify-center w-full overflow-x-hidden">
                        <div className="flex flex-row justify-between items-center">
                          <div className="w-[90%] text-lg text-[#FC5757] font-semibold text-center py-4">
                            The title uses dramatic punctations!(-2)
                          </div>
                          <div>
                            <button
                              className="bg-[#FC5757] px-4 py-2 text-white "
                              onClick={() => {
                                setMoveOnMode(true);
                              }}
                            >
                              View
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-40 right-20"></div>
                </>
              </Grid>
              <Grid item xs={5}></Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container className="h-full">
              <Grid item xs={4}>
                <div className="fixed bottom-0 fixed-bottom w-[30%] h-24 bg-black -ml-[30%]"></div>
                <div className={`fixed bottom-0 flexd-bottom w-[30%] `}>
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
                      {/* <ArrowForwardIosOutlinedIcon className="fixed meter-bar-arrow" /> */}
                    </div>
                  </MyImage>
                  <svg
                    className="absolute left-[45%] bottom-2 button"
                    expanded="true"
                    height="100px"
                    width="100px"
                    onClick={() => {
                      // console.log("help clicked");
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
              </Grid>
              <Grid item xs={4}></Grid>
              <Grid item xs={4}></Grid>
            </Grid>
          </Grid>
        </Grid>
        <div>
          {/* <MyImage
            src="/images/BossMedium.svg"
            className="absolute right-[10%] top-4 w-[310px] h-[395px]"
          /> */}
        </div>
      </div>
    </>
  );
}
