//Alex created
import React, { useEffect, useState } from "react";
import { Container } from "postcss";
import DeleteIcon from "@mui/icons-material/Delete";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
// UserApis
import CustomImage from "../base/CustomImage";
import MyImage from "../base/MyImage";
import content from "../../public/assets/articles.json";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DragDropContainer } from "../dragdrop/DragDropContainer";
import MyTimer from "../base/MyTimer";
import IssueModal from "../base/IssueModal";
import Meter from "../base/Meter";
import Categories from "../base/Categories";
import Social from "../base/Social";
import Source from "../base/Source";
import Fact from "../base/Fact";
import Reverse from "../base/Reverse";
import Lateral from "../base/Lateral";

import { useSelector, useDispatch } from "react-redux";

export default function Day4_8({
  curArtId = 0,
  curArtIndex = 0,
  // meter = 50,
  handleIsFeed,
  unlockedStickers,
  advancedData,
}) {
  // game logic
  const markedStickers = useSelector(
    (state) => state?.game?.markedStickers ?? []
  );
  const meter = useSelector((state) => state?.game?.meter ?? 50);
  const article = content[curArtId];
  const [unlock, setUnlock] = useState(true);
  const [markedIssuesOpen, setMarkedIssuesOpen] = useState(false);
  const handleMarkedIssuesOpen = () => setMarkedIssuesOpen(true);
  const handleMarkedIssuesClose = () => setMarkedIssuesOpen(false);

  const [sceneIndex, setSceneIndex] = useState(0);
  const handleScene = (value) => setSceneIndex(value);
  const handleSceneP = () => setSceneIndex(0);
  const [guideOpen, setGuideOpen] = useState(false);
  const handleGuideOpen = () => setGuideOpen(true);
  const handleGuideClose = () => setGuideOpen(false);
  const [counter, setCounter] = React.useState(100);
  React.useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 3000);
    return () => clearInterval(timer);
  }, [counter]);
  console.log("countdown", counter);
  // console.log("sceneIndex:", sceneIndex);

  //for source

  return (
    <>
      <div
        className="max-w-[1280px] max-h-[720px] w-full h-full fixed top-1/2 left-1/2 -translate-x-1/2 
                            -translate-y-1/2 bg-[url('/images/backgroundBasic.svg')]"
      >
        <div className="absolute  h-[720px] top-0 left-0 bg-[length:700px_700px]  w-6/12 -z-10 object-cover bg-[url('/images/tabletlayout.svg')] ,bg-no-repeat"></div>
        <DndProvider backend={HTML5Backend}>
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
                  <DragDropContainer
                    hideSourceOnDrag={true}
                    stickers={unlockedStickers}
                    //
                    unlock={false}
                    isdraging={true}
                  >
                    <div className="pt-24 w-11/12 px-7">
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
                          <button onClick={() => {
                              handleGuideOpen();
                            }}>
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
                    </div>
                  </DragDropContainer>
                </Grid>
                <Grid item xs={5}>
                  <div className="w-[626px] h-[377px] bg-white justify-center mt-[101px] ml-[-26px] ">
                    {curArtIndex == 0 && unlock == true ? ( //
                      <div>
                        <MyImage
                          src="/images/SearchBar.svg"
                          className="w-[520px] h-[35px] ml-[53px] mt-[40px] float-left justify-between"
                          onClick={() => {
                            setUnlock(false);
                          }}
                        >
                          <span className="ml-[20px] mt-[5px] float-left text-[#4F4F4F] ">
                            Click the bar to begin your search
                          </span>
                          <MyImage
                            src="/images/SearchIcon.svg"
                            className="float-right w-[29px] h-[27px] mr-[9px] mt-[3px]"
                          />
                        </MyImage>
                        <MyImage
                          src="/images/BossFace1.svg"
                          className="float-left w-[230px] h-[137px] ml-[200px] mt-[40px]"
                        />
                        <span className="w-[400px] float-left ml-[125px] mt-[20px]">
                          “I put my handsome face here to give you support. I
                          believe you can figure out how to use the computer by
                          yourself.”
                        </span>
                      </div>
                    ) : (
                      <div className="w-full h-full">
                        {/* <Adv_DragDropContainer
                          hideSourceOnDrag={true}
                          stickers={unlockedStickers}
                          handleMarkedStickers={handleMarkedStickers}
                          unlock={false}
                          sceneIndex={sceneIndex}
                        > */}
                        <Categories
                          className={`${
                            sceneIndex === 0 ? "show" : "hidden"
                          } w-full h-full`}
                          handleScene={handleScene}
                        />
                        <Social
                          className={`${
                            sceneIndex === 1 ? "show" : "hidden"
                          } w-full h-full`}
                          handleSceneP={handleSceneP}
                          hidesourceondrag={true} //dnd props
                          stickers={[4]}
                          unlock={false}
                          socialData={advancedData.socialData}
                        />
                        <Source
                          className={`${
                            sceneIndex === 2 ? "show" : "hidden"
                          } w-full h-full`}
                          handleSceneP={handleSceneP}
                          hidesourceondrag={true} //dnd props
                          stickers={[5, 6]}
                          unlock={false}
                          sourceData={advancedData.sourceData}
                        />
                        <Fact
                          className={`${
                            sceneIndex === 3 ? "show" : "hidden"
                          } w-full h-full`}
                          handleSceneP={handleSceneP}
                          hidesourceondrag={true} //dnd props
                          stickers={[7, 8]}
                          unlock={false}
                          // art_answer={article.answer_key}
                        />
                        <Reverse
                          className={`${
                            sceneIndex === 4 ? "show" : "hidden"
                          } w-full h-full`}
                          handleSceneP={handleSceneP}
                          hidesourceondrag={true} //dnd props
                          stickers={[9, 10]}
                          unlock={false}
                          curArtId={curArtId}
                        />
                        <Lateral
                          className={`${
                            sceneIndex === 5 ? "show" : "hidden"
                          } w-full h-full`}
                          handleSceneP={handleSceneP}
                          hidesourceondrag={true} //dnd props
                          stickers={[11]}
                          unlock={false}
                          lateralData={advancedData.lateralData}
                        />
                        {/* </Adv_DragDropContainer> */}
                      </div>
                    )}
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
                        }}
                      >
                        SUBMIT
                      </button>
                    </div>
                  </div>
                </Grid>

                <Grid item xs={4}>
                  <div className={`fixed bottom-0 flexd-bottom w-[30%] `}>
                    <div className="translate-y-2 translate-x-11">
                      <MyImage
                        src="/images/bottomlambmeter.svg"
                        className="h-24"
                      />

                      <Meter point={meter} />
                    </div>
                  </div>
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
          <IssueModal
            open={markedIssuesOpen}
            IssuClose={handleMarkedIssuesClose}
            markedStickers={markedStickers}
            setIsFeedback={handleIsFeed}
          />
        </DndProvider>
      </div>
    </>
  );
}
