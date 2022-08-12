//Alex created
import React, { useEffect, useState } from "react";
import { Container } from "postcss";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
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

export default function Day1_3({curArtIndex = 0 ,meter=50, handleIsFeed, handleMarked, unlockedStickers}) {
// game logic
  // const [markedResult, setMarkedResult] = useState("000000000000");
  const handleResult = (value) => setMarkedResult(value);
  const article = content[curArtIndex];

// 
  const stickerData = stickers;
  // const [isFeedback, setIsFeedback] = useState(false);
  const contentData = content;
  const [guideOpen, setGuideOpen] = useState(false);
  const handleGuideOpen = () => setGuideOpen(true);
  const handleGuideClose = () => setGuideOpen(false);
  const [unlock, setUnlock] = useState(true);
  const [markedIssuesOpen, setMarkedIssuesOpen] = useState(false);
  const handleMarkedIssuesOpen = () => setMarkedIssuesOpen(true);
  const handleMarkedIssuesClose = () => setMarkedIssuesOpen(false);
  const [markedStickers, setMarkedStickers] = useState([]);
  const handleMarkedStickers = (sti_arr) => {setMarkedStickers(sti_arr);
                                            handleMarked(sti_arr);}

  


  return (
    <>
      <div
        className="max-w-[1280px] max-h-[720px] w-full h-full fixed top-1/2 left-1/2 -translate-x-1/2 
                            -translate-y-1/2 bg-[url('/images/backgroundBasic.svg')]"
      >
        <div className="absolute  h-[720px] top-0 left-0 bg-[length:700px_700px]  w-6/12 -z-10 object-cover bg-[url('/images/tabletlayout.svg')] ,bg-no-repeat"></div>
        <Grid container className="h-full">
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={1}>
                <div className="h-full">
                  <div className="w-full  bg-no-repeat bg-fill">
                    <MyTimer />
                  </div>
                </div>
              </Grid>
              <Grid item xs={5}>
                <div className="pt-24 w-11/12 px-7">
                  <DndProvider backend={HTML5Backend}>
                    <DragDropContainer
                      hideSourceOnDrag={true}
                      stickers={unlockedStickers}
                      handleMarkedStickers={handleMarkedStickers}

                    >
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
                        <div className="text-base text-black pt-2 overflow-auto h-32">
                          {article.content}
                        </div>
                      </div>
                    </DragDropContainer>
                  </DndProvider>
                </div>
              </Grid>
              <Grid item xs={5}>
                <div className=" justify-center pt-[30%] pl-[20%] p-20">
                  <MyImage
                    src="/images/unlock.svg"
                    className={`h-[178px] w-[146px] ml-[25%]  ${
                      unlock ? "" : "hidden"
                    }`}
                    onClick={() => {
                      setUnlock(false);
                    }}
                  ></MyImage>
                  <MyImage
                    src="/images/tobeunlocked.svg"
                    className={` h-[27px] w-[220px] mt-[10%] ml-[15%] ${
                      unlock ? "" : "hidden"
                    }`}
                  ></MyImage>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container className="h-full">
              <Grid item xs={4}>
                <div className={`fixed bottom-0 flexd-bottom w-[30%] `}>
                  <div className={`translate-y-2`}>
                    <MyImage
                      src="/images/bottomlogo.svg"
                      className={`h-24 w-full`}
                    />
                  </div>
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className={`fixed bottom-0 w-full flex flex-row `}>
                  <div className="bottom-0 flexd-bottom translate-x-28 -translate-y-1">
                    <div
                      className="Alex_btn_gra_1 translate-x-6 h-2/4 w-3/4 bg-red-300 flex flex-row items-center justify-center rounded-md"
                      onClick={() => {
                        handleMarkedIssuesOpen();
                        //console.log(markedIssuesOpen);
                      }}
                    >
                      <label>{markedStickers.length} issue(s)</label>
                      <MyImage src="/images/eye.svg" className="h-8 px-2 w-8" />
                    </div>
                    
                    <button
                      className="bg-black rounded-3xl px-14 py-2 text-white font-bold text-2xl"
                      onClick={() => {
                        // setCounter(100);
                        handleIsFeed(true);
                        //Router.push("/feedback");

                      }}
                    >
                      SUBMIT
                    </button>
                  </div>
                </div>
              </Grid>

              <Grid item xs={4}>
                <div className={` fixed bottom-0 flexd-bottom w-[30%] `}>
                  <div className="translate-y-2 translate-x-11">
                    <MyImage
                      src="/images/bottomlambmeter.svg"
                      className="h-24"
                    />
                  </div>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

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
