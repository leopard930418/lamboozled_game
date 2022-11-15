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
} from "../../store/reducers/gameSlice";
export default function Welcome({ handleStepId }) {
  const dispatch = useDispatch();
  const [landingStep, setLandingStep] = useState(1);

  const [expLevel, setExpLevel] = useState(0);
  const [isFirst, setIsFirst] = useState(0);
  const [userName, setUserName] = useState('');
  useEffect(()=>{
    dispatch(updateUserName(userName));
  },[userName])
  // const setUserName = (name) => {
  //   dispatch(updateUserName(name));
  // };
  const nameInput = useRef(null);
  useEffect(()=>{
    // current property is refered to input element
    if(landingStep == 3){
      nameInput.current.focus();
      
    }
    
 },[landingStep])

  return (
    <>
      {landingStep == 1 && (
        <div
          className={`text-center max-w-[1280px] max-h-[720px] w-full bg-[length:100%_100%] h-full fixed top-1/2 left-1/2 -translate-x-1/2 
                            -translate-y-1/2 bg-[url('/images/GreenMeadows_Bg.svg')] justify-center flex`}
        >
          <div className=" fixed right-20 bottom-14 ">
            <Button
              onClick={() => {
                // dispatch(updatePlayStatus("story"));
                setLandingStep(2);
              }}
            >
              <img src="/images/StartGame_Button.svg" className="w-96" />
            </Button>
          </div>
        </div>
      )}
      {landingStep == 2 && (
        <div
          className={`text-center max-w-[1280px] max-h-[720px] w-full bg-[length:100%_100%] h-full fixed top-1/2 left-1/2 -translate-x-1/2 
                            -translate-y-1/2 bg-[url('/images/GreenMeadows_Bg2.svg')] justify-center flex`} style={{ fontFamily: "Patrick Hand" }}
        >
          <div className="bg-[url('/images/landing_dialogue.svg')] bg-no-repeat  h-[226px] w-[1236px] absolute bottom-4">
            <div className="text-[41px] w-8/12 break-words  pt-16 ml-48 ">
              <Typed
                strings={["Welcome to Green Meadows, young lamb. "]}
                typeSpeed={75}
                className="cursor-none"
              />
            </div>
            <MyImage
              src="/images/ArrowBlack.svg"
              className="cursor-pointer absolute bottom-4 right-10  w-[80px] h-[79px]"
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
                            -translate-y-1/2 bg-[url('/images/GreenMeadows_Bg2.svg')] justify-center flex`}
          style={{ fontFamily: "Patrick Hand" }}
        >
          <MyImage
            src="/images/NameInput.svg"
            className="relative p-3 top-[285px] w-[520px] h-[95px]"
            
          >
            <input
              type="text"
              className="text-4xl top-[260px] outline-none bg-[#f0f1e5] text-center mt-3"
              onChange={(event) => setUserName(event.target.value)}
              ref={nameInput}
            ></input>
          </MyImage>

          <MyImage
            src="/images/ArrowBlack.svg"
            className="cursor-pointer absolute  right-[28%] top-[45%]  w-[80px] h-[79px]"
            onClick={() => {
              setLandingStep(4);
            }}
          />
          <div className="bg-[url('/images/landing_dialogue.svg')] bg-no-repeat  h-[226px] w-[1236px] absolute bottom-4">
            <div className="text-[41px] w-8/12 break-words  pt-16 ml-48 ">
              <Typed
                strings={["Your name is..."]}
                typeSpeed={75}
                className="cursor-none"
              />
            </div>
          </div>
        </div>
      )}
      {landingStep == 4 && (
        <div
          className={`text-center max-w-[1280px] max-h-[720px] w-full bg-[length:100%_100%] h-full fixed top-1/2 left-1/2 -translate-x-1/2 
                            -translate-y-1/2 bg-[url('/images/feedback.svg')] justify-center flex`}
          style={{ fontFamily: "Patrick Hand" }}
        >

          <MyImage
              src="/images/GreenMeadows_Bg.svg"
              className="absolute w-[259px] h-[161px] left-[460px] top-[182px] "
            />
            <MyImage
              src="/images/Boss2_C.svg"
              className="absolute w-[485px] h-[633px] top-[81px] left-[590px] "
              
            />

          <div className="bg-[url('/images/landing_dialogue.svg')] bg-no-repeat  h-[226px] w-[1236px] absolute bottom-4">
            <div className="text-[41px] w-8/12 break-words  pt-12 ml-48 ">
              <Typed
                strings={[`Great, ${userName}. Welcome to the best (and, well, only) newsroom in Green Meadows!`]}
                typeSpeed={75}
              />
              {/* <br /> */}
              {/* <Typed
                strings={[
                  `But we don’t just hire anyone at the Green Meadows Post... Let’s test your lamb chops and see if you’re cut out for this job...`,
                ]}
                typeSpeed={75}
                startDelay={4000}
              /> */}
            </div>
            <MyImage
              src="/images/ArrowBlack.svg"
              className="cursor-pointer absolute bottom-4 right-10  w-[80px] h-[79px]"
              onClick={() => {
                setLandingStep(5);
              }}
            />
          </div>
        </div>
      )}

      {landingStep == 5 && (
        <div
          className={`text-center max-w-[1280px] max-h-[790px] w-full bg-[length:100%_100%] h-full fixed top-1/2 left-1/2 -translate-x-1/2 
                       -translate-y-1/2 bg-[url('/images/feedback.svg')] justify-center`}
          style={{ fontFamily: "Patrick Hand" }}
        >
          <MyImage
            src="/images/MissingPoster.svg"
            className="absolute  left-[5%]   w-[480px]  h-[400px] break-words p-16 px-16 text-3xl text-center border-2 border-black"
          ></MyImage>

          <div className="bg-[url('/images/landing_dialogue.svg')] bg-no-repeat  h-[226px] w-[1236px] absolute bottom-4">
            <div className="text-3xl w-8/12 break-words  pt-16 ml-48 ">
              <Typed
                strings={[
                  `There’s a lot going on in our town, but some stories just want to pull the wool over your eyes… `,
                ]}
                typeSpeed={75}
              />
            </div>
            <MyImage
              src="/images/ArrowBlack.svg"
              className="cursor-pointer absolute bottom-4 right-10  w-[80px] h-[79px]"
              onClick={() => {
                setLandingStep(6);
              }}
            />
          </div>
        </div>
      )}

      {landingStep == 6 && (
        <div
          className={`text-center max-w-[1280px] max-h-[790px] w-full bg-[length:100%_100%] h-full fixed top-1/2 left-1/2 -translate-x-1/2 
                         -translate-y-1/2 bg-[url('/images/feedback.svg')] justify-center`}
          style={{ fontFamily: "Patrick Hand" }}
        >
          <div className="bg-[url('/images/landing_dialogue.svg')] bg-no-repeat  h-[226px] w-[1236px] absolute bottom-4">
            <div className="text-3xl w-8/12 break-words  pt-12 ml-48 ">
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
            </div>
            <MyImage
              src="/images/ArrowBlack.svg"
              className="cursor-pointer absolute bottom-4 right-10  w-[80px] h-[79px]"
              onClick={() => {
                setLandingStep(7);
              }}
            />
          </div>
        </div>
      )}
      {landingStep == 7 && (
        <div
          className={`text-center max-w-[1280px] max-h-[790px] w-full bg-[length:100%_100%] h-full fixed top-1/2 left-1/2 -translate-x-1/2 
                        -translate-y-1/2 bg-[url('/images/feedback.svg')] justify-center`}
          style={{ fontFamily: "Patrick Hand" }}
        >
          <div className="bg-[url('/images/landing_dialogue.svg')] bg-no-repeat  h-[226px] w-[1236px] absolute bottom-4">
            <div className="text-3xl w-9/12 break-words  pt-10 ml-[165px] ">
              {/* <Typed
                strings={[`Ok, Editor, do you think you can do this job?`]}
                typeSpeed={75}
                className="text-3xl"
              /> */}
              <div
                className={`rounded-3xl w-[99%] bg-white h-[90%] border-2 border-black`}
              >
                <div className="font-bold pt-1">Yike, not sure</div>
                <div className="flex font-bold  leading-4 pt-6 pb-6 justify-between space-x-4 ">
                  <div className="text-center text-2xl">
                    I'm not sure I can do this on my own
                  </div>
                  <div>
                    <MyImage
                      src="/images/ExpBar.svg"
                      className=" w-[450px]  h-[50px] break-words  text-center flex justify-between pt-5 cursor-pointer"
                    >
                      <MyImage
                        src={
                          expLevel > 0
                            ? `/images/BlackHead.svg`
                            : `/images/WhiteHead.svg`
                        }
                        className=" w-[60px]  h-[60px] text-center -mt-7 ml-4"
                        onClick={() => setExpLevel(1)}
                      ></MyImage>
                      <MyImage
                        src={
                          expLevel > 1
                            ? `/images/BlackHead.svg`
                            : `/images/WhiteHead.svg`
                        }
                        className=" w-[60px]  h-[60px] text-center -mt-7 "
                        onClick={() => setExpLevel(2)}
                      ></MyImage>
                      <MyImage
                        src={
                          expLevel > 2
                            ? `/images/BlackHead.svg`
                            : `/images/WhiteHead.svg`
                        }
                        className=" w-[60px]  h-[60px] text-center -mt-7 "
                        onClick={() => setExpLevel(3)}
                      ></MyImage>
                      <MyImage
                        src={
                          expLevel > 3
                            ? `/images/BlackHead.svg`
                            : `/images/WhiteHead.svg`
                        }
                        className=" w-[60px]  h-[60px] text-center -mt-7 "
                        onClick={() => setExpLevel(4)}
                      ></MyImage>
                      <MyImage
                        src={
                          expLevel > 4
                            ? `/images/BlackHead.svg`
                            : `/images/WhiteHead.svg`
                        }
                        className=" w-[60px]  h-[60px] text-center -mt-7 "
                        onClick={() => setExpLevel(5)}
                      ></MyImage>
                    </MyImage>
                  </div>
                  <div className="text-center text-2xl">
                    I'll be the best editor you've ever seen!
                  </div>
                </div>
              </div>
            </div>
            <MyImage
              src="/images/ArrowBlack.svg"
              className="cursor-pointer absolute bottom-4 right-10  w-[80px] h-[79px]"
              onClick={() => {
                setLandingStep(8);
              }}
            />
          </div>
        </div>
      )}
      {landingStep == 8 && (
        <div
          className={`text-center max-w-[1280px] max-h-[790px] w-full bg-[length:100%_100%] h-full fixed top-1/2 left-1/2 -translate-x-1/2 
                        -translate-y-1/2 bg-[url('/images/feedback.svg')] justify-center`}
          style={{ fontFamily: "Patrick Hand" }}
        >
          <div className="bg-[url('/images/landing_dialogue.svg')] bg-no-repeat  h-[226px] w-[1236px] absolute bottom-4">
            <div className="text-3xl w-9/12 break-words  pt-10 ml-[165px] ">
              <div
                className={`rounded-3xl w-[99%] bg-white h-[80%] border-2 border-black pt-1 pb-3`}
              >
                <Typed
                  strings={[`I see. Let me show you how things work here...`]}
                  typeSpeed={75}
                  className="font-bold"
                />
                <div className="text-3xl leading-4 pt-1 flex">
                  <div className="flex pt-8 pl-4 w-1/2">
                    <MyImage
                      src={
                        isFirst == 1
                          ? `/images/BlackHead.svg`
                          : `/images/WhiteHead.svg`
                      }
                      className=" w-[55px]  h-[55px] text-center -mt-7 "
                      onClick={() => setIsFirst(1)}
                    ></MyImage>
                    <span className="mr-4">Ok.(1st time player)</span>
                  </div>
                  <div className="flex pt-8 pl-4 w-1/2">
                    <MyImage
                      src={
                        isFirst == 2
                          ? `/images/BlackHead.svg`
                          : `/images/WhiteHead.svg`
                      }
                      className=" w-[55px]  h-[55px] text-center -mt-7"
                      onClick={() => setIsFirst(2)}
                    ></MyImage>
                    <span className="">I worked here before</span>
                  </div>
                </div>
              </div>
            </div>
            <MyImage
              src="/images/ArrowBlack.svg"
              className="cursor-pointer absolute bottom-4 right-10  w-[80px] h-[79px]"
              onClick={() => {
                setLandingStep(9);
              }}
            />
          </div>
        </div>
      )}
      {landingStep == 9 && (
        <div
          className={`text-center max-w-[1280px] max-h-[790px] w-full bg-[length:100%_100%] h-full fixed top-1/2 left-1/2 -translate-x-1/2 
                        -translate-y-1/2 bg-[url('/images/feedback.svg')] justify-center`}
          style={{ fontFamily: "Patrick Hand" }}
        >
          <MyImage
            src="/images/landing_dialogue.svg"
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
