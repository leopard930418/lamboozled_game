//Alex created
import React, { useEffect, useState } from "react";
import { Container } from "postcss";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import ReactCountdownClock from "../base/CountDownTimer";
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";
import Modal from "@mui/material/Modal";
import Router from "next/router";
// UserApis
import CustomImage from "../base/CustomImage";
import MyImage from "../base/MyImage";
import content from "../../public/assets/articles.json";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DragDropContainer } from "../dragdrop/DragDropContainer";
import MyTimer from "../base/MyTimer";
import stickers from "../../public/assets/sticker.json";
import IssueModal from "../base/IssueModal";
import Meter from "../base/Meter";
import { useSelector, useDispatch } from "react-redux";
import { updateMeterByAmount } from "../../store/reducers/gameSlice";
export default function Day1_3({
  curArtId = 0,
  curArtIndex = 0,
  handleIsFeed,
  unlockedStickers,
  curDay,
}) {
  // game logic
  const markedStickers = useSelector(
    (state) => state?.game?.markedStickers ?? "000000000000"
  );
  const userName = useSelector((state) => state?.game?.userName ?? "Unkown");
  const meter = useSelector((state) => state?.game?.meter ?? 0);
  const dispatch = useDispatch();
  const article = content[curArtId];
  const [unlock, setUnlock] = useState(true);
  const [markedIssuesOpen, setMarkedIssuesOpen] = useState(false);
  const handleMarkedIssuesOpen = () => setMarkedIssuesOpen(true);
  const handleMarkedIssuesClose = () => setMarkedIssuesOpen(false);
  const [guideOpen, setGuideOpen] = useState(false);
  const handleGuideOpen = () => setGuideOpen(true);
  const handleGuideClose = () => setGuideOpen(false);
  const calcResult = () => {
    let correct = [];
    let wrong = [];
    let sum = 0;
    const weights = [1, 1, 2, 1, 1, 2, 2, 2, 2, 3, 3, 3];
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

    wrong.map((stickerId) => {
      sum -= weights[stickerId];
    });
    console.log(
      "sum",
      sum,
      "wrong",
      wrong,
      "correct",
      correct,
      "markedsticker",
      markedStickers,
      "answer_key",
      answer_key
    );
    dispatch(updateMeterByAmount(sum));
  };

  return (
    <>
      <div
        className="max-w-[1280px] max-h-[720px] w-full bg-[length:100%_100%] h-full fixed top-1/2 left-1/2 -translate-x-1/2 
                            -translate-y-1/2 bg-[url('/images/backgroundBasic.svg')]"
      >
        <div className="absolute top-1 right-0 ">
          <ReactCountdownClock
            seconds={120}
            color="#fbfbfb"
            alpha={1}
            size={100}
            // onComplete={myCallback}
          />
          <div className="w-[98px] h-[98px] absolute -top-1 right-[6px] bg-[length:100%_100%] bg-[url('/images/ClockMeter.png')]"></div>
        </div>

        <div className="absolute  h-[740px] top-0 -left-10 bg-[length:700px_720px]  w-6/12 -z-10 bg-[url('/images/tabletlayout.svg')] bg-no-repeat"></div>
        <DndProvider backend={HTML5Backend}>
          <Grid container className="h-full">
            <Grid item xs={12}>
              <Grid container>
                {/* <Grid item xs={1}>
                  <div className="h-full">
                    <div className="w-full  bg-no-repeat bg-fill">
                      <MyTimer />
                    </div>
                  </div>
                </Grid> */}
                <Grid item xs={5}>
                  <DragDropContainer
                    hideSourceOnDrag={true}
                    stickers={unlockedStickers}
                    unlock={false}
                    isdraging={true}
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
                          <button
                            onClick={() => {
                              handleGuideOpen();
                            }}
                          >
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
                        <div className="text-xl text-black font-bold text-center pt-2 ">
                          {article.title}
                        </div>
                        <div className="flex flex-row justify-between">
                          <div className="text-base text-black pt-2 ">
                            {article.author}
                          </div>
                          <div className="text-base text-black pt-2 ">
                            {article.source}
                          </div>
                        </div>
                        <div className="text-base text-black pt-2 overflow-auto h-44">
                          {article.content}
                        </div>
                      </div>
                    </div>
                  </DragDropContainer>
                </Grid>
                <Grid item xs={5}>
                  {/* {curArtIndex == 0 && ( */}
                  <div className=" justify-center pt-[30%] pl-[20%] p-20">
                    <MyImage
                      src="/images/unlock.svg"
                      className={`h-[178px] w-[146px] ml-[52%]  ${
                        unlock ? "" : "hidden"
                      }`}
                      onClick={() => {
                        // setUnlock(false);
                      }}
                    ></MyImage>
                    <MyImage
                      src="/images/tobeunlocked.svg"
                      className={` h-[27px] w-[220px] mt-[10%] ml-[42%] ${
                        unlock ? "" : "hidden"
                      }`}
                    ></MyImage>
                  </div>
                  {/* )} */}
                </Grid>
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
                        className={`h-16 w-16 translate-y-5 ml-5`}
                      ></MyImage>

                      <MyImage
                        src="/images/MeterTitle.svg"
                        className={`h-12 w-48 -translate-y-7 ml-28`}
                      ></MyImage>
                      <Meter point={meter} />
                      <div className="-translate-y-[75px] absolute right-10">
                        <ArrowForwardIosOutlinedIcon className="fixed meter-bar-arrow" />
                      </div>
                    </MyImage>
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div className={`fixed bottom-0 w-full flex flex-row `}>
                    <div className="bottom-0 flexd-bottom translate-x-28 -translate-y-1 ">
                      <div
                        className="Alex_btn_gra_1 translate-x-6 h-2/4 w-3/4 bg-red-300 flex flex-row items-center justify-center rounded-md cursor-pointer"
                        onClick={() => {
                          handleMarkedIssuesOpen();
                        }}
                      >
                        <label className="cursor-pointer">
                          {(markedStickers.match(/1/g) || []).length} issue(s)
                        </label>
                        <MyImage
                          src="/images/eye.svg"
                          className="h-8 px-2 w-8"
                        />
                      </div>

                      <button
                        className="bg-black rounded-3xl px-14 py-2 text-white font-bold text-2xl"
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

                <Grid item xs={4}>
                  {/* <div className={`fixed bottom-0 flexd-bottom w-[30%] `}>
                    <div className="translate-y-2 translate-x-11">
                      <MyImage
                        src="/images/bottomlambmeter.svg"
                        className="h-24"
                      />

                      <Meter point={meter} />
                    </div>
                  </div> */}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Modal
            open={guideOpen}
            onClose={handleGuideClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="z-[1501]"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#C4C4C4] p-4">
              <div className="flex flex-row space-x-8">
                <div className="rounded-[50%] p-2 w-12 h-12 text-center bg-white text-black text-3xl">
                  1
                </div>
                <div className="rounded-[50%] p-2 w-12 h-12 text-center bg-white text-black text-3xl">
                  2
                </div>
                <div className="rounded-[50%] p-2 w-12 h-12 text-center bg-white text-black text-3xl">
                  3
                </div>
              </div>

              <div className="pt-6 px-4">
                <div className="text-black text-3xl">
                  Show GIFs one by one, player can click from top left corner to
                  switch
                </div>
                <div className="text-black text-3xl">
                  1) Drag a sticker to mark an issue
                </div>
                <div className="text-black text-3xl">
                  2) Drag back to remove it
                </div>
                <div className="text-black text-3xl">
                  3) Drag a sticker to the (?) to learn more about it
                </div>
              </div>

              <div className="flex justify-end pt-4">
                <button
                  className="px-4 py-2 bg-white text-3xl"
                  onClick={handleGuideClose}
                >
                  Got it!
                </button>
              </div>
            </div>
          </Modal>
        </DndProvider>

        <IssueModal
          open={markedIssuesOpen}
          IssuClose={handleMarkedIssuesClose}
          markedStickers={markedStickers}
          setIsFeedback={handleIsFeed}
        />
      </div>
    </>
  );
}
