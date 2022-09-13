import React, { useEffect, useState } from "react";
import { Container } from "postcss";
import CustomImage from "../base/CustomImage";
import MyImage from "../base/MyImage";
import stickers from "../../public/assets/sticker.json";
// FOR IMPORTING ARITCLE DATA
import content from "../../public/assets/articles.json";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";
import { withStyles, makeStyles } from "@mui/styles";
import Meter from "../base/Meter";
import Modal from "@mui/material/Modal";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
// MODULES FOR DRAG&DROP
import Router from "next/router";
import { useSelector, useDispatch } from "react-redux";
import {
  nextDay,
  initMarkedStickers,
  updatePlayStatus,
} from "../../store/reducers/gameSlice";
import Social from "../base/Social";
import Source from "../base/Source";
import Fact from "../base/Fact";
import Reverse from "../base/Reverse";
import Lateral from "../base/Lateral";
export default function FeedBack({
  curArtIndex = 0,
  // meter = 50,
  leftArts = 0,
  handleIsFeed,
  handleCurArtIndex,
  curArtId,
}) {
  const dispatch = useDispatch();

  const advancedData = useSelector(
    (state) => state?.game?.dataForFeedback ?? {}
  );

  const Stickers = stickers;
  const theDay = useSelector((state) => state?.game?.theDay ?? 1);

  let correct = [];
  let wrong = [];
  let sum = 0;
  const markedStickers = useSelector(
    (state) => state?.game?.markedStickers ?? "000000000000"
  );
  const weights = [1, 1, 2, 1, 1, 2, 2, 2, 2, 3, 3, 3];
  const article = content[curArtIndex];
  const answer_key = article.answer_key;
  for (var i = 0; i < answer_key.length; i++) {
    if (answer_key.charAt(i) == "1" && markedStickers.charAt(i) == "1") {
      correct.push(i);
    } else if (
      (answer_key.charAt(i) == "1" && markedStickers.charAt(i) == "0") ||
      (answer_key.charAt(i) == "0" && markedStickers.charAt(i) == "1")
    ) {
      wrong.push(i);
    }
  }
  correct.map((stickerId) => {
    sum += weights[stickerId];
  });
  const correctCnt = (article.answer_key.match(/1/g) || []).length;
  
  wrong.map((stickerId) => {
    sum -= weights[stickerId];
  });
    console.log("sum", sum, "wrong", wrong,"correct", correct, "markedsticker", markedStickers, "answer_key", answer_key);

  let sumcolor = "#0DA71C";
  if (sum > 0) {
    sumcolor = "green";
  } else if (sum < 0) {
    sumcolor = "red";
  }

  // article.answer_key;
  const contentData = content;
  const [guideOpen, setGuideOpen] = useState(false);
  const handleGuideOpen = () => setGuideOpen(true);
  const handleGuideClose = () => setGuideOpen(false);
  // const [unlock, setUnlock] = useState(true);
  const [markedIssuesOpen, setMarkedIssuesOpen] = useState(false);
  const handleMarkedIssuesOpen = () => setMarkedIssuesOpen(true);
  const handleMarkedIssuesClose = () => setMarkedIssuesOpen(false);
  const [reviewSticker, setReviewSticker] = useState(0);
  const [reviewMode, setReviewMode] = useState(false);
  console.log("reviewSticker", reviewSticker, reviewMode);
  const meter = useSelector((state) => state?.game?.meter ?? 0);
  return (
    <>
      <div
        className={`max-w-[1280px] max-h-[790px] w-full h-full fixed top-1/2 left-1/2 -translate-x-1/2 
                            -translate-y-1/2 bg-${
                              reviewMode
                                ? "[url('/images/backgroundBasic.svg')]"
                                : "[url('/images/feedback.svg')]"
                            }`}
      >
        {reviewMode ? (
          <div className="absolute  h-[720px] top-0 left-0 bg-[length:700px_700px]  w-6/12 -z-10 object-cover bg-[url('/images/tabletlayout.svg')] bg-no-repeat"></div>
        ) : (
          <div className="absolute  bg-cover bg-no-repeat h-[850px] top-0 left-0 ml-20 -translate-y-16 w-6/12 -z-10 object-cover bg-[url('/images/tabletlayout.svg')]"></div>
        )}
        <Grid container className="h-full">
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={1}>
                {reviewMode && (
                  <div className={`fixed bottom-0 flexd-bottom w-[30%] `}>
                    <div className={`translate-y-2`}>
                      <MyImage
                        src="/images/bottomlogo.svg"
                        className={`h-24 w-full`}
                      />
                    </div>
                  </div>
                )}
              </Grid>
              <Grid item xs={5}>
                {reviewMode ? (
                  <div className="pt-24 w-11/12 px-7">
                    <Grid container columns={10} className="pl-10">
                      <Grid
                        item
                        container
                        lg={8}
                        className="border-2 border-black flex justify-center p-2 pl-7"
                      >
                        <Grid item lg={3}>
                          <div>
                            <CustomImage
                              src="/images/Icon1.svg"
                              className="h-8 "
                            />
                          </div>
                        </Grid>
                        <Grid item lg={3}>
                          <CustomImage
                            src="/images/Icon2.svg"
                            className="h-8"
                          />
                        </Grid>
                        <Grid item lg={3}>
                          <CustomImage
                            src="/images/Icon3.svg"
                            className="h-8"
                          />
                        </Grid>
                        <Grid item lg={3}>
                          <CustomImage
                            src="/images/Icon4.svg"
                            className="h-8"
                          />
                        </Grid>
                      </Grid>
                      <Grid
                        item
                        lg={2}
                        className="border-2 border-black flex justify-center"
                      >
                        <button
                          onClick={() => {
                            // console.log("help clicked");
                            handleGuideOpen();
                          }}
                        >
                          <CustomImage src="/images/help.svg" className="h-8" />
                        </button>
                      </Grid>
                    </Grid>

                    <div className="flex justify-center pt-4">
                      <MyImage
                        src="/images/contentImage1.svg"
                        className="w-60 h-36"
                      />
                    </div>
                    {/* <div className="z-[1502] ">
                      {reviewSticker < 4 && (
                        <svg
                          className="absolute top-16 button"
                          style={{
                            marginLeft: `${reviewSticker * 55 + 35}` + "px",
                          }}
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
                      )}
                      {(reviewSticker == 4 ||
                        reviewSticker == 5 ||
                        reviewSticker == 7 ||
                        reviewSticker == 9 ||
                        reviewSticker == 11) && (
                        <svg
                          className="absolute top-16 button"
                          style={{
                            marginLeft: `${1000 - 1 * 55}` + "px",
                          }}
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
                      )}
                      {(reviewSticker == 6 ||
                        reviewSticker == 8 ||
                        reviewSticker == 10) && (
                        <svg
                          className="absolute top-16 button"
                          style={{
                            marginLeft: `${1000 - 2 * 55}` + "px",
                          }}
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
                      )}
                      <MyImage
                        src="/images/BossSmall.svg"
                        className={`absolute right-[55%] top-10 w-[134px] h-[170px] ${
                          reviewSticker < 4
                            ? "right-[55%]"
                            : "scale-x-[-1] right-[30%]"
                        }`}
                      />

                      <MyImage
                        src="/images/AlertPanel.svg"
                        className="absolute right-[10%] top-48 w-[769px] h-[238px]  break-words p-8"
                      >
                        <span className=" text-3xl">
                          {stickers[reviewSticker].description}
                        </span>
                      </MyImage>
                      <MyImage
                        src="/images/ArrowYellow.svg"
                        className="cursor-pointer absolute right-[5.5%] top-[54%]  w-[80px] h-[79px]"
                        onClick={() => {
                          setReviewMode(false);
                        }}
                      />
                    </div> */}

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
                ) : (
                  <>
                    <div className="w-10/12 justify-self-center pt-12 ml-20 ">
                      <div>
                        <div
                          className="absolute top-20  right-[50%] w-20 h-20 rounded-full"
                          style={{ backgroundColor: sumcolor }}
                        >
                          <div className="h-full flex justify-center items-center text-black text-3xl font-bold">
                            {sum}
                          </div>
                        </div>
                        <div className="flex justify-center pt-12 pb-4">
                          <label className="bg-black rounded-3xl px-12 py-2 text-white font-bold text-lg text-center">
                            Correct Marks ({correct.length}/{correctCnt})
                          </label>
                        </div>
                        <div
                          className={`h-2/5  justify-center w-full overflow-x-hidden`}
                          style={{ minHeight: "150px" }}
                        >
                          {correct.map((stickerId) => {
                            return (
                              <div
                                className="text-lg text-[#0DA71C] font-semibold text-center py-2 w-full"
                                key={stickerId}
                              >
                                {Stickers[stickerId].issue}
                              </div>
                            );
                          })}
                        </div>
                        <div className="flex justify-center pb-4">
                          <label className="bg-black rounded-3xl px-12 py-2 text-white font-bold text-lg">
                            Missed Or Mismarked
                          </label>
                        </div>{" "}
                        <div className="h-2/5 pl-8  justify-center w-full overflow-x-hidden">
                          {wrong.map((stickerId) => {
                            return (
                              <div
                                className="flex flex-row justify-between items-center"
                                key={stickerId}
                              >
                                <div className="text-lg w-10/12 text-[#FC5757] font-semibold text-center py-2">
                                  {Stickers[stickerId].issue}
                                  {answer_key[stickerId] == "1"
                                    ? "(Missed)"
                                    : "(Mismarked)"}
                                </div>
                                <div className="w-2/12  text-right">
                                  <button
                                    className="bg-[#FC5757]  px-1 py-0  text-white "
                                    onClick={() => {
                                      dispatch(initMarkedStickers());
                                      setReviewSticker(stickerId);
                                      setReviewMode(true);
                                    }}
                                  >
                                    View
                                  </button>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-40 right-20">
                      <div className="flex flex-col justify-center items-center pt-12">
                        <div
                          className="w-3/4 bg-white flex flex-row items-center justify-center rounded-sm"
                          onClick={handleMarkedIssuesOpen}
                        >
                          <label className="font-bold">
                            {leftArts} article(s) left
                          </label>
                        </div>
                        {leftArts == 0 ? (
                          <button
                            className="bg-black rounded-3xl px-14 py-2 text-white font-bold text-2xl"
                            onClick={() => {
                              // setReviewMode(true);
                              dispatch(nextDay());
                              // dispatch(updateMeterByAmount(sum));
                              dispatch(initMarkedStickers());
                            }}
                          >
                            END THE DAY
                          </button>
                        ) : (
                          <button
                            className="bg-black rounded-3xl px-14 py-2 text-white font-bold text-2xl"
                            onClick={() => {
                              handleIsFeed(false);
                              handleCurArtIndex();
                              // dispatch(updateMeterByAmount(sum));
                              dispatch(initMarkedStickers());
                              if (theDay == 8) {
                                dispatch(updatePlayStatus("landing"));
                              }
                            }}
                          >
                            NEXT
                          </button>
                        )}

                        {/* <button
                                                className="bg-black rounded-3xl px-14 py-2 text-white font-bold text-2xl"
                                                onClick={() => {
                                                setReviewMode(true);
                                                
                                                }}
                                            >
                                                REVIEW
                                            </button> */}

                        {/* <button
                                                className="bg-black rounded-3xl px-14 py-2 text-white font-bold text-2xl"
                                                onClick={() => {
                                                // setReviewMode(true);
                                                Router.push("/intro");
                                                }}
                                            >
                                                Tutorial
                                            </button> */}
                      </div>
                    </div>
                  </>
                )}
              </Grid>
              <Grid item xs={5}>
                {reviewMode && reviewSticker > 3 && (
                  <DndProvider backend={HTML5Backend}>
                    <div className="w-[626px] h-[377px] bg-white justify-center mt-[101px] ml-[-26px] ">
                      <div className="w-full h-full">
                        {reviewSticker === 4 && (
                          <Social
                            className={` w-full h-full`}
                            handleSceneP={() => {}}
                            hidesourceondrag={false} //dnd props
                            stickers={[4]}
                            unlock={false}
                            socialData={advancedData.socialData}
                          />
                        )}
                        {(reviewSticker === 5 || reviewSticker === 6) && (
                          <Source
                            className={` w-full h-full`}
                            handleSceneP={() => {}}
                            hidesourceondrag={false} //dnd props
                            stickers={[5, 6]}
                            unlock={false}
                            sourceData={advancedData.sourceData}
                          />
                        )}
                        {(reviewSticker === 7 || reviewSticker === 8) && (
                          <Fact
                            className={` w-full h-full`}
                            handleSceneP={() => {}}
                            hidesourceondrag={false} //dnd props
                            stickers={[7, 8]}
                            unlock={false}
                            // art_answer={article.answer_key}
                          />
                        )}
                        {(reviewSticker === 9 || reviewSticker === 10) && (
                          <Reverse
                            className={` w-full h-full`}
                            handleSceneP={() => {}}
                            hidesourceondrag={false} //dnd props
                            stickers={[9, 10]}
                            unlock={false}
                            curArtId={curArtId}
                          />
                        )}
                        {reviewSticker === 11 && (
                          <Lateral
                            className={` w-full h-full`}
                            handleSceneP={() => {}}
                            hidesourceondrag={false} //dnd props
                            stickers={[11]}
                            unlock={false}
                            lateralData={advancedData.lateralData}
                          />
                        )}
                      </div>
                    </div>
                  </DndProvider>
                )}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container className="h-full">
              <Grid item xs={4}>
                {reviewMode ? (
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
                )}
              </Grid>
              <Grid item xs={4}></Grid>

              <Grid item xs={4}>
                {!reviewMode && (
                  <div className={` fixed bottom-0 flexd-bottom w-[30%] `}>
                    <div className="translate-y-2 translate-x-11">
                      <MyImage
                        src="/images/bottomlambmeter.svg"
                        className="h-24"
                      />
                      <Meter point={meter} />
                    </div>
                  </div>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {reviewMode && (
        <div className="z-[1502] ">
          {reviewSticker < 4 && (
            <svg
              className="absolute top-16 button"
              style={{
                marginLeft: `${reviewSticker * 55 + 170}` + "px",
              }}
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
          )}
          {(reviewSticker == 4 ||
            reviewSticker == 5 ||
            reviewSticker == 7 ||
            reviewSticker == 9 ||
            reviewSticker == 11) && (
            <svg
              className="absolute top-16 button"
              style={{
                marginLeft: `${1125 - 1 * 55}` + "px",
                marginTop: "25px",
              }}
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
          )}
          {(reviewSticker == 6 ||
            reviewSticker == 8 ||
            reviewSticker == 10) && (
            <svg
              className="absolute top-16 button"
              style={{
                marginLeft: `${1120 - 2 * 55}` + "px",
                marginTop: "25px",
              }}
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
          )}
          {reviewSticker < 4 ? (
            <>
              <MyImage
                src="/images/BossSmall.svg"
                className={`absolute right-[55%] top-10 w-[134px] h-[170px] ${
                  reviewSticker < 4 ? "right-[55%]" : "scale-x-[-1] right-[30%]"
                }`}
              />

              <MyImage
                src="/images/AlertPanel.svg"
                className="absolute right-[10%] top-48 w-[769px] h-[238px]  break-words p-8"
              >
                <span className=" text-3xl">
                  {stickers[reviewSticker].description}
                </span>
                <MyImage
                src="/images/ArrowYellow.svg"
                className="cursor-pointer relative ml-[101%] mt-[-4%]  w-[80px] h-[79px]"
                onClick={() => {
                  setReviewMode(false);
                }}
              />
              </MyImage>
              
            </>
          ) : (
            <>
              <MyImage
                src="/images/BossSmall.svg"
                className={`absolute left-[50%] top-10 w-[134px] h-[170px] ${
                  reviewSticker < 4 ? "right-[55%]" : "scale-x-[-1] right-[30%]"
                }`}
              />

              <MyImage
                src="/images/AlertPanel.svg"
                className="absolute left-[3%] top-48 w-[769px] h-[238px]  break-words p-8"
              >
                <span className=" text-3xl">
                  {stickers[reviewSticker].description}
                </span>
                <MyImage
                src="/images/ArrowYellow.svg"
                className="cursor-pointer absolute mt-[-3%] ml-[93%] w-[80px] h-[79px]"
                onClick={() => {
                  setReviewMode(false);
                }}
              />
              </MyImage>
              
            </>
          )}
        </div>
      )}
      </div>
      
    </>
  );
}
