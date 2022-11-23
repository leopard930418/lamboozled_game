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

  const [expLevel, setExpLevel] = useState(-1);
  const [isFirst, setIsFirst] = useState(0);
  const [userName, setUserName] = useState("");
  useEffect(() => {
    dispatch(updateUserName(userName));
  }, [userName]);

  const nameInput = useRef(null);
  const factInput = useRef(null);

  useEffect(() => {
    // current property is refered to input element
    if (landingStep == 3) {
      nameInput.current.focus();
    } else if (landingStep == 8) {
      factInput.current.focus();
    }
  }, [landingStep]);

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
                            -translate-y-1/2 bg-[url('/images/GreenMeadows_Bg2.svg')] justify-center flex`}
          style={{ fontFamily: "Patrick Hand" }}
        >
          <div className="bg-[url('/images/landing_dialogue.svg')] bg-no-repeat  h-[226px] w-[1236px] absolute bottom-4">
            <div className="text-[41px] w-8/12 break-words  pt-16 ml-48 ">
              <Typed
                strings={["Welcome to Green Meadows, young lamb. "]}
                typeSpeed={35}
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
                typeSpeed={35}
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
                strings={[
                  `Great, ${userName}. Welcome to the best (and, well, only) newsroom in Green Meadows!`,
                ]}
                typeSpeed={35}
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
                strings={[
                  `Your job is to look closely at local news stories and determine if they’re true. Based on your investigation...`,
                ]}
                typeSpeed={35}
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
          className={`text-center max-w-[1280px] max-h-[720px] w-full bg-[length:100%_100%] h-full fixed top-1/2 left-1/2 -translate-x-1/2 
                         -translate-y-1/2 bg-[url('/images/feedback.svg')] justify-center flex`}
          style={{ fontFamily: "Patrick Hand" }}
        >
          <MyImage
            src="/images/BossFace1.svg"
            className="absolute w-[900px] h-[650px] top-[70px] left-[380px] "
          />
          <div className="bg-[url('/images/landing_dialogue.svg')] bg-no-repeat  h-[226px] w-[1236px] absolute bottom-4">
            <div className="text-[41px] w-8/12 break-words  pt-12 ml-48 ">
              <Typed
                strings={[
                  `We’ll decide whether we should publish them or not. 
                  Understand?`,
                ]}
                typeSpeed={35}
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
                className={`rounded-[40px] w-[99%] bg-white h-[90%] border-2 border-black`}
              >
                <div className="pt-1">Yike, not sure</div>
                <div className="flex   leading-4 pt-3 pb-6 justify-between space-x-4 ">
                  <div className="text-center leading-10 -mt-6">
                    I'm not sure I can do this on my own
                  </div>
                  <div>
                    <MyImage
                      src="/images/ExpBar.svg"
                      className=" w-[300px] h-[3px] text-center flex mt-6 ml-5 "
                    ></MyImage>
                    <div className="flex w-[350px] justify-between mt-1">
                      <MyImage
                        src={
                          expLevel > 0
                            ? `/images/BlackHead.svg`
                            : `/images/WhiteHead.svg`
                        }
                        className=" w-[47px]  h-[47px] -mt-7 ml-4 cursor-pointer"
                        onClick={() => setExpLevel(1)}
                      ></MyImage>
                      <MyImage
                        src={
                          expLevel > 1
                            ? `/images/BlackHead.svg`
                            : `/images/WhiteHead.svg`
                        }
                        className=" w-[47px]  h-[47px] -mt-7 cursor-pointer"
                        onClick={() => setExpLevel(2)}
                      ></MyImage>
                      <MyImage
                        src={
                          expLevel > 2
                            ? `/images/BlackHead.svg`
                            : `/images/WhiteHead.svg`
                        }
                        className=" w-[47px]  h-[47px] -mt-7 cursor-pointer"
                        onClick={() => setExpLevel(3)}
                      ></MyImage>
                      <MyImage
                        src={
                          expLevel > 3
                            ? `/images/BlackHead.svg`
                            : `/images/WhiteHead.svg`
                        }
                        className=" w-[47px]  h-[47px] -mt-7 cursor-pointer"
                        onClick={() => setExpLevel(4)}
                      ></MyImage>
                      <MyImage
                        src={
                          expLevel > 4
                            ? `/images/BlackHead.svg`
                            : `/images/WhiteHead.svg`
                        }
                        className=" w-[47px]  h-[47px] -mt-7 cursor-pointer"
                        onClick={() => setExpLevel(5)}
                      ></MyImage>
                    </div>
                  </div>
                  <div className="text-center leading-10 -mt-6">
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
                className={`rounded-[40px] w-[99%] bg-white h-[90%] border-2 border-black pb-10`}
              >
                <div className="pt-1 w-full text-center">
                  So how you’d fact check?
                </div>
                <div className="w-full justify-center flex">
                  <div
                    src="/images/NameInput.svg"
                    className="relative w-[90%] h-[55px] border-b-2 border-black"
                  >
                    <input
                      type="text"
                      className="text-4xl top-[260px] outline-none  text-center mt-3 w-full"
                      // onChange={(event) => setUserName(event.target.value)}
                      ref={factInput}
                    ></input>
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
          className={`text-center max-w-[1280px] max-h-[720px] w-full bg-[length:100%_100%] h-full fixed top-1/2 left-1/2 -translate-x-1/2 
                   -translate-y-1/2 bg-[url('/images/feedback.svg')] justify-center flex`}
          style={{ fontFamily: "Patrick Hand" }}
        >
          <MyImage
            src="/images/Boss2_C.svg"
            className="absolute w-[485px] h-[633px] top-[81px] left-[590px] "
          />
          <div className="bg-[url('/images/landing_dialogue.svg')] bg-no-repeat  h-[226px] w-[1236px] absolute bottom-4">
            <div className="text-[30px] w-9/12 break-words  pt-10 ml-[165px] ">
              <div
                className={`rounded-[40px] w-[99%] bg-white h-[80%] border-2 border-black pt-1 pb-3`}
              >
                <Typed
                  strings={[`I see. Let me show you how things work here...`]}
                  typeSpeed={35}
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
                    <span className="ml-4">Ok.(1st time player)</span>
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
                    <span className="ml-4">I worked here before</span>
                  </div>
                </div>
              </div>
            </div>
            <MyImage
              src="/images/ArrowBlack.svg"
              className="cursor-pointer absolute bottom-4 right-10  w-[80px] h-[79px]"
              onClick={() => {
                if (isFirst == 1) dispatch(updatePlayStatus("tutorial"));
                else if (isFirst == 2) setLandingStep(10);
              }}
            />
          </div>
        </div>
      )}
      {landingStep == 10 && (
        <div
          className={`text-center max-w-[1280px] max-h-[720px] w-full bg-[length:100%_100%] h-full fixed top-1/2 left-1/2 -translate-x-1/2 
                            -translate-y-1/2 bg-[url('/images/feedback.svg')] justify-center flex`}
          style={{ fontFamily: "Patrick Hand" }}
        >
          <MyImage
            src="/images/Boss2_C.svg"
            className="absolute w-[485px] h-[633px] top-[81px] left-[590px] "
          />
          <div className="bg-[url('/images/landing_dialogue.svg')] bg-no-repeat  h-[226px] w-[1236px] absolute bottom-4">
            <div className="text-[41px] w-8/12 break-words  pt-16 ml-48 ">
              <Typed
                strings={["Oops, you’re right. Just start working then."]}
                typeSpeed={35}
                className="cursor-none"
              />
            </div>
            <MyImage
              src="/images/ArrowBlack.svg"
              className="cursor-pointer absolute bottom-4 right-10  w-[80px] h-[79px]"
              onClick={() => {
                dispatch(updatePlayStatus("story"));
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}
