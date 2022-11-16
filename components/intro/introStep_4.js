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
// MODULES FOR DRAG&DROP
import Typed from "react-typed";

// import Router from "next/router";
import { useDispatch } from "react-redux";
import {
  updatePlayStatus,
  initMarkedStickers,
} from "../../store/reducers/gameSlice";

export default function introStep_4() {
  const [moveOnMode, setMoveOnMode] = useState(false);
  const dispatch = useDispatch();
  const [isFirst, setIsFirst] = useState(0);

  return (
    <>
      <div
        className={` max-w-[1280px] max-h-[720px] w-full bg-[length:100%_100%] h-full fixed top-1/2 left-1/2 -translate-x-1/2 
                           -translate-y-1/2 bg-[url('/images/feedback.svg')] justify-center flex`}
      >
        {/* background image mapping */}
        {moveOnMode ? (
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
                  typeSpeed={75}
                  className="cursor-none"
                />
              </div>
              <MyImage
                src="/images/ArrowBlack.svg"
                className="cursor-pointer absolute bottom-4 right-10  w-[80px] h-[79px]"
                onClick={() => {
                  console.log("asdfasdfasdf");
                  dispatch(updatePlayStatus("story"));
                  dispatch(initMarkedStickers());
                }}
              />
            </div>
          </>
        ) : (
          <>
            <MyImage
              src="/images/Boss2_C.svg"
              className="absolute w-[485px] h-[633px] top-[81px] left-[590px] "
            />
            <div
              className="bg-[url('/images/landing_dialogue.svg')] bg-no-repeat  h-[226px] w-[1236px] absolute bottom-4 "
              style={{ fontFamily: "Patrick Hand" }}
            >
              <div className="text-[30px] w-9/12 break-words  pt-10 ml-[165px] ">
                <div
                  className={`rounded-[40px] w-[99%] bg-white h-[80%] border-2 border-black pt-1 pb-3 text-center`}
                >
                  <Typed
                    strings={[
                      `That’s it for the practice round. Wanna try again?`,
                    ]}
                    typeSpeed={75}
                  />
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
                      <span className="ml-4">Nope, Let's move on</span>
                    </div>
                    <div className="flex pl-4 w-1/2">
                      <MyImage
                        src={
                          isFirst == 2
                            ? `/images/BlackHead.svg`
                            : `/images/WhiteHead.svg`
                        }
                        className=" w-[47px]  h-[47px] text-center -mt-5 "
                        onClick={() => setIsFirst(2)}
                      ></MyImage>
                      <span className="ml-4">Yes, try again</span>
                    </div>
                  </div>
                </div>
              </div>
              <MyImage
                src="/images/ArrowBlack.svg"
                className="cursor-pointer absolute bottom-4 right-10  w-[80px] h-[79px]"
                onClick={() => {
                  if (isFirst == 1) setMoveOnMode(false);
                  else if (isFirst == 2) setMoveOnMode(true);
                }}
              />
            </div>
          </>
        )}
        {/* background image mapping */}
        <Grid container className="h-full">
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={1}></Grid>
              <Grid item xs={5}>
                {moveOnMode ? (
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
                ) : (
                  <></>
                  // <div>
                  //   <div className=" pt-80 ">
                  //     <button
                  //       className="bg-[#D8EEFB] rounded-3xl px-14 py-2 text-black font-bold text-2xl w-[80%] h-[60px]"
                  //       onClick={() => {
                  //         setMoveOnMode(false);
                  //       }}
                  //     >
                  //       Yes, try again
                  //     </button>
                  //   </div>
                  //   <div className=" pt-16 ">
                  //     <button
                  //       className="bg-[#D8EEFB] rounded-3xl px-14 py-2 text-black font-bold text-2xl w-[80%] h-[60px]"
                  //       onClick={() => {
                  //         setMoveOnMode(true);
                  //       }}
                  //     >
                  //       Nope, let’s move on
                  //     </button>
                  //   </div>
                  // </div>
                )}
              </Grid>
              <Grid item xs={5}></Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container className="h-full">
              <Grid item xs={4}>
                {/* {moveOnMode ? (
                  <div className={`fixed bottom-0 flexd-bottom w-[30%] `}>
                    <div className={`translate-y-2`}>
                      <MyImage
                        src="/images/bottomlogo.svg"
                        className={`h-24 w-full`}
                      />
                    </div>
                  </div>
                ) : (
                  ""
                )} */}
              </Grid>
              <Grid item xs={4}></Grid>
              <Grid item xs={4}>
                {/* {!moveOnMode && (
                  <div className={` fixed bottom-0 flexd-bottom w-[30%] `}>
                    <div className="translate-y-2 translate-x-11">
                      <MyImage
                        src="/images/bottomlambmeter.svg"
                        className="h-24"
                      />
                    </div>
                  </div>
                )} */}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <div>
          {/* <MyImage
            src="/images/BossMedium.svg"
            className="absolute right-[10%] top-4 w-[310px] h-[395px]"
          /> */}

          {moveOnMode ? (
            <>
              {/* <MyImage
                src="/images/AlertPanel.svg"
                className="absolute right-[5%] bottom-28 w-[459px] h-[240px]  break-words p-8"
              >
                <span className=" text-3xl">
                  Your correct marks will increase the Lamboozled Meter, and the
                  wrong ones will decrease it. The higher it is, the better you
                  did!
                </span>
              </MyImage>
              <MyImage
                src="/images/ArrowYellow.svg"
                className="absolute right-[0.5%] top-[65%]  w-[80px] h-[79px] cursor-pointer"
                onClick={() => {
                  dispatch(updatePlayStatus("story"));
                  dispatch(initMarkedStickers());
                }}
              /> */}
            </>
          ) : (
            <>
              {/* <MyImage
                src="/images/AlertPanel.svg"
                className="absolute right-[5%] bottom-28 w-[459px] h-[186px]  break-words p-8"
              >
                <span className=" text-3xl">
                  That’s it for the practice round. Do you want to try again?
                </span>
              </MyImage> */}
            </>
          )}
        </div>
      </div>
    </>
  );
}
