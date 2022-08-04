import React, { useEffect, useState } from "react";
import CustomImage from "../base/CustomImage";
import content from "../../public/assets/articles.json";
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { Card } from "@mui/material";
import { withStyles, makeStyles } from "@mui/styles";

const BorderLinearProgress = withStyles((theme) => {
  return {
    root: {
      width: 30,
      height: "100%",
    },
    colorPrimary: {
      backgroundColor: "rgba(0, 0, 0, 0.25);",
    },
    bar: {
      transform: ({ value }) => {
        return `translateY(${value}%) !important`;
      },
      backgroundColor: "#FC5757",
    },
  };
})(LinearProgress);

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    height: 638,
    gap: 10,
    display: "flex",
    position: "fixed",
  },
  stats: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
});

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "#C4C4C4",
  boxShadow: 24,
  p: 2,
};
export default function Intro() {
  const contentData = content;
  const [unlock, setUnlock] = useState(true);
  const [isFeedback, setIsFeedback] = useState(false);
  // const StyleTooltip = withStyles({
  //   tooltip: {
  //     color: "#FF0000",
  //     backgroundColor: "#FFE0E0",
  //   },
  // })(Tooltip);
  const [guideOpen, setGuideOpen] = useState(false);
  const handleGuideOpen = () => setGuideOpen(true);
  const handleGuideClose = () => setGuideOpen(false);

  const [sticker1Open, setSticker1Open] = useState(false);
  const handleSticker1Open = () => setSticker1Open(true);
  const handleSticker1Close = () => setSticker1Open(false);

  const [markedIssuesOpen, setMarkedIssuesOpen] = useState(false);
  const handleMarkedIssuesOpen = () => setMarkedIssuesOpen(true);
  const handleMarkedIssuesClose = () => setMarkedIssuesOpen(false);

  const classes = useStyles();
  const [counter, setCounter] = React.useState(100);

  // Third Attempts
  React.useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);
  console.log("countdown", counter);
  return (
    <div className="max-w-[1280px] max-h-[720px] w-full h-full fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div
        className={`${
          // unlock ? "bg-backgroundBasic" : "bg-background"
          unlock ? "" : ""
        } w-full h-screen bg-no-repeat bg-fill`}
      >
        <div className="absolute w-full h-full">
          <img
            src={`${
              isFeedback
                ? "/images/feedback.svg"
                : "/images/backgroundBasic.svg"
            }`}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-50 transition-opacity"
          />
        </div>
        {isFeedback&&<div className="absolute bottom-40 right-20">
          <div className="flex flex-col justify-center items-center pt-12">
            <div
              className="w-3/4 bg-white flex flex-row items-center justify-center rounded-sm"
              onClick={handleMarkedIssuesOpen}
            >
              <label>2 article(s) left</label>
            </div>
            <button
              className="bg-black rounded-3xl px-14 py-2 text-white font-bold text-2xl"
              onClick={() => {
                setIsFeedback(false);
              }}
            >
              Next
            </button>
          </div>
        </div>}
        <div className={classes.root}>
          <div className={classes.stats}>
            {!isFeedback && (
              <BorderLinearProgress variant="determinate" value={77} />
            )}
          </div>
        </div>

        <div className="flex flex-row">
          <div
            className={`relative translate-x-20 w-${
              isFeedback ? 7 : 5
            }/12 grid justify-items-stretch`}
          >
            <img
              src="/images/tabletlayout.svg"
              className="absolute w-full h-[720px] top-0 left-0 -z-10 object-cover"
            ></img>
            {isFeedback ? (
              <>
                <div className="w-3/4 justify-self-center pt-12">
                  <div>
                    <div className="absolute top-20 right-20 w-16 h-16 rounded-full bg-[#C7C7C7]">
                      <div className="h-full flex justify-center items-center text-black text-3xl font-bold">
                        0
                      </div>
                    </div>
                    <div className="flex justify-center pt-12">
                      <label className="bg-black rounded-3xl px-16 py-2 text-white font-bold text-lg text-center">
                        Correct Marks (1/2)
                      </label>
                    </div>
                    <div className="text-lg text-[#0DA71C] font-semibold text-center py-4">
                      The title is all-capitalized
                    </div>
                    <div className="flex justify-center pt-12">
                      <label className="bg-black rounded-3xl px-16 py-2 text-white font-bold text-lg">
                        Missed Or Mismarked
                      </label>
                    </div>{" "}
                    <div className="flex flex-row justify-between items-center">
                      <div className="text-lg text-[#FC5757] font-semibold text-center py-4">
                        The title uses dramatic punctations!
                      </div>
                      <div>
                        <button className="bg-[#FC5757] px-4 py-2 text-white ">
                          View
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between items-center">
                      <div className="text-lg text-[#FC5757] font-semibold text-center py-4">
                        There are typo(s) or grammar mistake(s) in this story!
                      </div>
                      <div>
                        <button className="bg-[#FC5757] px-4 py-2 text-white ">
                          View
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="w-3/4 justify-self-center pt-24">
                <Grid container columns={10}>
                  <Grid
                    item
                    container
                    lg={8}
                    className="border-2 border-black flex justify-center p-2"
                  >
                    <Grid item lg={3}>
                      <Tooltip
                        title="The title is all captitalized!"
                        placement="top"
                        arrow
                      >
                        <CustomImage
                          src="/images/Icon1.svg"
                          className="h-8"
                          onClick={handleSticker1Open}
                        />
                      </Tooltip>
                    </Grid>
                    <Grid item lg={3}>
                      <CustomImage src="/images/Icon2.svg" className="h-8" />
                    </Grid>
                    <Grid item lg={3}>
                      <CustomImage src="/images/Icon3.svg" className="h-8" />
                    </Grid>
                    <Grid item lg={3}>
                      <CustomImage src="/images/Icon4.svg" className="h-8" />
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    lg={2}
                    className="border-2 border-black flex justify-center"
                  >
                    <button
                      onClick={() => {
                        console.log("help clicked");
                        handleGuideOpen();
                      }}
                    >
                      <CustomImage src="/images/help.svg" className="h-8" />
                    </button>
                  </Grid>
                </Grid>

                <div className="flex justify-center pt-4">
                  <CustomImage src="/images/contentImage1.svg" />
                </div>
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
                  <div className="text-xl text-black pt-2 overflow-auto h-32">
                    {contentData[0].content}
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="w-7/12 relative">
            <img
              src="/images/unlock.svg"
              className={`absolute top-1/3 left-1/2 -translate-x-1/3 -translate-y-1/3 ${
                unlock ? "" : "hidden"
              }`}
              onClick={() => {
                setUnlock(false);
              }}
            ></img>
            <img
              src="/images/tobeunlocked.svg"
              className={`absolute top-1/3 left-1/2 -translate-x-28 translate-y-40 ${
                unlock ? "" : "hidden"
              }`}
            ></img>
          </div>
        </div>
        <Modal
          open={guideOpen}
          onClose={handleGuideClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          {/* <Box sx={style}> */}
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
          {/* </Box> */}
        </Modal>
        <Modal
          open={sticker1Open}
          onClose={handleSticker1Close}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          {/* <Box sx={style}> */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#C4C4C4] p-4">
            <div className="flex flex-row justify-center">
              <img src="/images/Icon1.svg" className="h-8" />
            </div>
            <div className="pt-6 px-4">
              <div className="text-black text-3xl">
                When an article’s title is all-capitalized, it becomes more
                eye-catching... So we should be cautious: does this article aim
                for facts or something else?
              </div>
            </div>
            <div className="flex justify-end pt-4">
              <button
                className="px-4 py-2 bg-white text-3xl"
                onClick={handleSticker1Close}
              >
                I see
              </button>
            </div>
          </div>
          {/* </Box> */}
        </Modal>
        <Modal
          open={markedIssuesOpen}
          onClose={handleMarkedIssuesClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          {/* <Box sx={style}> */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-[#FF7575] to-[#FFD0D0] p-4 w-[800px]">
            <img
              src="/images/MarkCloseIcon.svg"
              className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 cursor-pointer"
              onClick={handleMarkedIssuesClose}
            ></img>
            <div className="text-3xl text-center font-bold underline ">
              MARKED ISSUES
            </div>
            <div className="pt-6 px-4">
              <div className="text-black text-xl text-center">
                The title is all-captitalized!
              </div>
              <div className="text-black text-xl text-center">
                The title uses dramatic punctations!
              </div>
              <div className="text-black text-xl text-center">
                Text Text Text Text
              </div>
              <div className="text-black text-xl text-center">
                The title is all-captitalized!
              </div>
              <div className="text-black text-xl text-center">
                The title is all-captitalized!
              </div>
            </div>
            <div className="flex justify-center pt-12">
              <button
                className="bg-black rounded-3xl px-14 py-2 text-white font-bold text-2xl"
                onClick={() => {
                  setCounter(100);
                  setIsFeedback(true);
                }}
              >
                SUBMIT
              </button>
            </div>
          </div>
          {/* </Box> */}
        </Modal>

        <div
          className={`fixed bottom-0 w-full flex flex-row justify-${
            isFeedback ? "end" : "between"
          } translate-y-2`}
        >
          {!isFeedback && (
            <div>
              <CustomImage src="/images/bottomlogo.svg" className="h-24" />
            </div>
          )}

          {!isFeedback && (
            <div className="flex flex-col justify-center items-center">
              <div
                className="w-3/4 bg-red-300 flex flex-row items-center justify-center rounded-md"
                onClick={handleMarkedIssuesOpen}
              >
                <label>10 issue(s)</label>
                <CustomImage src="/images/eye.svg" className="h-8 px-2" />
              </div>
              <button
                className="bg-black rounded-3xl px-14 py-2 text-white font-bold text-2xl"
                onClick={() => {
                  setCounter(100);
                  setIsFeedback(true);
                }}
              >
                SUBMIT
              </button>
            </div>
          )}
          <div>
            <CustomImage src="/images/bottomlambmeter.svg" className="h-24" />
          </div>
        </div>
      </div>
    </div>
  );
}
