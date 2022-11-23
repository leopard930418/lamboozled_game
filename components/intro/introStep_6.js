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

export default function introStep_5({ handleStepId }) {
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
                  typeSpeed={35}
                />
                <div className="leading-4 pt-10 flex pb-4 ml-8">
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
                    <span className="ml-4">Nope, Let's move on</span>
                  </div>
                  <div className="flex pl-4 w-1/2">
                    <MyImage
                      src={
                        isFirst == 1
                          ? `/images/BlackHead.svg`
                          : `/images/WhiteHead.svg`
                      }
                      className=" w-[47px]  h-[47px] text-center -mt-5 "
                      onClick={() => setIsFirst(1)}
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
                if (isFirst == 1) handleStepId(1);
                else if (isFirst == 2) {
                  dispatch(updatePlayStatus("story"));
                  dispatch(initMarkedStickers());
                }
              }}
            />
          </div>
        </>
        {/* background image mapping */}
        <Grid container className="h-full">
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={1}></Grid>
              <Grid item xs={5}></Grid>
              <Grid item xs={5}></Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container className="h-full">
              <Grid item xs={4}></Grid>
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
