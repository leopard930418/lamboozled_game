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
import {
  updatePlayStatus,
  updateUserName,
} from "../../store/reducers/gameSlice";
export default function Welcome({ handleStepId }) {
  const dispatch = useDispatch();
  const [landingStep, setLandingStep] = useState(1);

  const [expLevel, setExpLevel] = useState(0);
  const [isFirst, setIsFirst] = useState(0);
  // const [userName, setUserName] = useState('');
  const setUserName = (name) => {
    dispatch(updateUserName(name));
  };
  return (
    <>
      {landingStep == 1 && (
        <div
          className={`text-center max-w-[1280px] max-h-[790px] w-full bg-[length:100%_100%] h-full fixed top-1/2 left-1/2 -translate-x-1/2 
                            -translate-y-1/2 bg-[url('/images/landing_bg1.svg')] `}
        >
          <div className=" justify-center mt-[37.5%]">
            <Button
              
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
          className={`text-centermax-w-[1280px] max-h-[790px] w-full bg-[length:100%_100%] h-full fixed top-1/2 left-1/2 -translate-x-1/2 
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
          className={`text-center max-w-[1280px] max-h-[790px] w-full bg-[length:100%_100%] h-full fixed top-1/2 left-1/2 -translate-x-1/2 
                            -translate-y-1/2 bg-[url('/images/landing_bg2.svg')] justify-center`}
        >
          <input
            type="text"
            className="relative text-4xl p-4 top-1/3 border-b-2 border-black"
            placeholder="_________________________________"
            onChange={(event) => setUserName(event.target.value)}
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
          className={`text-center max-w-[1280px] max-h-[790px] w-full bg-[length:100%_100%] h-full fixed top-1/2 left-1/2 -translate-x-1/2 
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
              startDelay={4000}
            />
            <MyImage
              src="/images/ArrowYellow.svg"
              className="cursor-pointer absolute right-[-5.5%] top-[60%]  w-[80px] h-[79px] "
              onClick={() => {
                setLandingStep(5);
              }}
            />
          </MyImage>
        </div>
      )}

      {landingStep == 5 && (
        <div
          className={`text-center max-w-[1280px] max-h-[790px] w-full bg-[length:100%_100%] h-full fixed top-1/2 left-1/2 -translate-x-1/2 
                       -translate-y-1/2 bg-[url('/images/feedback.svg')] justify-center`}
        >
          <MyImage
            src="/images/MissingPoster.svg"
            className="absolute  left-[5%]   w-[480px]  h-[400px] break-words p-16 px-16 text-3xl text-center border-2 border-black"
          ></MyImage>

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
          className={`text-center max-w-[1280px] max-h-[790px] w-full bg-[length:100%_100%] h-full fixed top-1/2 left-1/2 -translate-x-1/2 
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
            <br />
            <Typed
              strings={[`don’t get LAMBOOZLED!`]}
              typeSpeed={75}
              startDelay={7000}
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
          className={`text-center max-w-[1280px] max-h-[790px] w-full bg-[length:100%_100%] h-full fixed top-1/2 left-1/2 -translate-x-1/2 
                        -translate-y-1/2 bg-[url('/images/feedback.svg')] justify-center`}
        >
          <MyImage
            src="/images/AlertPanel.svg"
            className="absolute top-2/3 left-[15%]   w-[913px]  h-[186px] break-words p-6 px-16  text-center"
          >
            <Typed
              strings={[`Ok, Editor, do you think you can do this job?`]}
              typeSpeed={75}
              className="text-3xl"
            />
            <div
              className={`rounded-3xl w-[99%] bg-white h-[80%] border-2 border-black `}
            >
              <div className="text-[#49AAC9] font-bold pt-1">
                Yike, not sure
              </div>
              <div className="flex font-bold text-lg leading-4 pt-1">
                <div className="text-center ">
                  I'm not sure I can do this on my own
                </div>
                <div>
                  <MyImage
                    src="/images/ExpBar.svg"
                    className=" w-[450px]  h-[50px] break-words  text-center flex justify-between pt-6 cursor-pointer"
                  >
                    <MyImage
                      src={expLevel > 0 ? `/images/BlueHead.svg` : ``}
                      className=" w-[60px]  h-[60px] text-center -mt-7 ml-4"
                      // onMouseEnter={() => setExpLevel(1)}
                      // onMouseLeave={() => setExpLevel(0)}
                      onClick={() => setExpLevel(1)}
                    ></MyImage>
                    <MyImage
                      src={expLevel > 1 ? `/images/BlueHead.svg` : ``}
                      className=" w-[60px]  h-[60px] text-center -mt-7 "
                      // onMouseEnter={() => setExpLevel(2)}
                      // onMouseLeave={() => setExpLevel(0)}
                      onClick={() => setExpLevel(2)}
                    ></MyImage>
                    <MyImage
                      src={expLevel > 2 ? `/images/BlueHead.svg` : ``}
                      className=" w-[60px]  h-[60px] text-center -mt-7 "
                      // onMouseEnter={() => setExpLevel(3)}
                      // onMouseLeave={() => setExpLevel(0)}
                      onClick={() => setExpLevel(3)}
                    ></MyImage>
                    <MyImage
                      src={expLevel > 3 ? `/images/BlueHead.svg` : ``}
                      className=" w-[60px]  h-[60px] text-center -mt-7 "
                      // onMouseEnter={() => setExpLevel(4)}
                      // onMouseLeave={() => setExpLevel(0)}
                      onClick={() => setExpLevel(4)}
                    ></MyImage>
                    <MyImage
                      src={expLevel > 4 ? `/images/BlueHead.svg` : ``}
                      className=" w-[60px]  h-[60px] text-center -mt-7 "
                      // onMouseEnter={() => setExpLevel(5)}
                      // onMouseLeave={() => setExpLevel(0)}
                      onClick={() => setExpLevel(5)}
                    ></MyImage>
                  </MyImage>
                </div>
                <div className="text-center">
                  I'll be the best editor you've ever seen!
                </div>
              </div>
            </div>

            <MyImage
              src="/images/ArrowYellow.svg"
              className="cursor-pointer absolute right-[-5.5%] top-[60%]  w-[80px] h-[79px] "
              onClick={() => {
                setLandingStep(8);
              }}
            />
          </MyImage>
        </div>
      )}
      {landingStep == 8 && (
        <div
          className={`text-center max-w-[1280px] max-h-[790px] w-full bg-[length:100%_100%] h-full fixed top-1/2 left-1/2 -translate-x-1/2 
                        -translate-y-1/2 bg-[url('/images/feedback.svg')] justify-center`}
        >
          <MyImage
            src="/images/AlertPanel.svg"
            className="absolute top-2/3 left-[15%]   w-[913px]  h-[186px] break-words p-6 px-16  text-center"
          >
            <Typed
              strings={[`Have you worked for us before?`]}
              typeSpeed={75}
              className="text-3xl"
            />
            <div
              className={`rounded-3xl w-[99%] bg-white h-[80%] border-2 border-black `}
            >
              <div className="font-bold text-lg leading-4 pt-1">
                <div className="w-full justify-center flex pt-8 pl-4">
                  <MyImage
                    src={
                      isFirst == 1
                        ? `/images/BlueHead.svg`
                        : `/images/BlackHead.svg`
                    }
                    className=" w-[70px]  h-[70px] text-center -mt-7 "
                    // onMouseEnter={() => setExpLevel(1)}
                    // onMouseLeave={() => setExpLevel(0)}
                    onClick={() => setIsFirst(1)}
                  ></MyImage>

                  <MyImage
                    src={
                      isFirst == 2
                        ? `/images/BlueHead.svg`
                        : `/images/BlackHead.svg`
                    }
                    className=" w-[70px]  h-[70px] text-center -mt-7 ml-32"
                    // onMouseEnter={() => setExpLevel(2)}
                    // onMouseLeave={() => setExpLevel(0)}
                    onClick={() => setIsFirst(2)}
                  ></MyImage>
                </div>
                <div className="w-full justify-center flex pl-28">
                  <span className="mr-10">Yes</span>
                  <span className="ml-20">No (1st time player)</span>
                </div>
              </div>
            </div>

            <MyImage
              src="/images/ArrowYellow.svg"
              className="cursor-pointer absolute right-[-5.5%] top-[60%]  w-[80px] h-[79px] "
              onClick={() => {
                setLandingStep(9);
              }}
            />
          </MyImage>
        </div>
      )}
      {landingStep == 9 && (
        <div
          className={`text-center max-w-[1280px] max-h-[790px] w-full bg-[length:100%_100%] h-full fixed top-1/2 left-1/2 -translate-x-1/2 
                        -translate-y-1/2 bg-[url('/images/feedback.svg')] justify-center`}
        >
          <MyImage
            src="/images/AlertPanel.svg"
            className="absolute top-2/3 left-[15%]   w-[913px]  h-[186px] break-words p-6 px-16  text-center"
          >
            <Typed
              strings={[
                `Since you’re the editor, tell me how you’d fact check`,
              ]}
              typeSpeed={75}
              className="text-3xl"
            />
            <div
              className={`rounded-3xl w-[99%] bg-white h-[80%] border-2 border-black `}
            >
              <div className="font-bold text-lg leading-4 pt-1">
                <div className="w-full justify-center flex pt-8 pl-4">
                  <input></input>
                </div>
                <div className="w-full justify-center flex pl-28">
                  <MyImage
                    src={
                      isFirst == 1
                        ? `/images/BlueHead.svg`
                        : `/images/BlackHead.svg`
                    }
                    className=" w-[70px]  h-[70px] text-center -mt-7 "
                    // onMouseEnter={() => setExpLevel(1)}
                    // onMouseLeave={() => setExpLevel(0)}
                    onClick={() => setIsFirst(1)}
                  ></MyImage>
                  <span className="mr-10">Type to let me know</span>
                </div>
              </div>
            </div>

            <MyImage
              src="/images/ArrowYellow.svg"
              className="cursor-pointer absolute right-[-5.5%] top-[60%]  w-[80px] h-[79px] "
              onClick={() => {
                if (isFirst == 1 || isFirst == 0)
                  dispatch(updatePlayStatus("story"));
                else if (isFirst == 2) dispatch(updatePlayStatus("tutorial"));
              }}
            />
          </MyImage>
        </div>
      )}
    </>
  );
}
