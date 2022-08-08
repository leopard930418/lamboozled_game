import React, { useEffect, useState } from "react";
import { Container } from "postcss";
import CustomImage from "../base/CustomImage";
import MyImage from "../base/MyImage";
// import CustomImage_new from "../base/CustomImage_new";
// FOR IMPORTING ARITCLE DATA
import content from "../../public/assets/articles.json";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Tooltip from '@mui/material/Tooltip';
import { withStyles, makeStyles } from "@mui/styles";
import LinearProgress from "@mui/material/LinearProgress";
import Modal from '@mui/material/Modal';
import Router from "next/router";
  
// MODULES FOR DRAG&DROP
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DragDropContainer } from "../dragdrop/DragDropContainer";
// import MyToolTip from "../base/MyToolTip";

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
      flexDirection: "row",
    },
  });
  
export default function Basic_new(){
    const classes = useStyles();
    const [isFeedback, setIsFeedback] = useState(false);
    const contentData = content;
    const [guideOpen, setGuideOpen] = useState(false);
    const handleGuideOpen = () => setGuideOpen(true);
    const handleGuideClose = () => setGuideOpen(false);
    const [unlock, setUnlock] = useState(true);
    const [markedIssuesOpen, setMarkedIssuesOpen] = useState(false);
    const handleMarkedIssuesOpen = () => setMarkedIssuesOpen(true);
    const handleMarkedIssuesClose = () => setMarkedIssuesOpen(false);
    
    return(
        <>
            <div className="max-w-[1280px] max-h-[720px] w-full h-full fixed top-1/2 left-1/2 -translate-x-1/2 
                            -translate-y-1/2 bg-[url('/images/backgroundBasic.svg')]"
                >
                   
                {/* background image mapping */}
                <div className="absolute  h-[720px] top-0 left-0 bg-[length:700px_700px]  w-6/12 -z-10 object-cover bg-[url('/images/tabletlayout.svg')] ,bg-no-repeat" >
                </div>
                {/* background image mapping */}
                <Grid container className="h-full">
                    <Grid item xs={12}>
                        <Grid container >
                            <Grid item xs={1}>
                                <div className="h-full">
                                    <div className="w-full  bg-no-repeat bg-fill">
                                    <div className={classes.root}>
                                                <div className={classes.stats}>
                                                    {/* {!isFeedback && ( */}
                                                    <BorderLinearProgress variant="determinate" value={30} />
                                                    {/* )} */}
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={5}>
                                <div className="pt-24 w-11/12 px-7">
                                    <DndProvider backend={HTML5Backend}>
                                        <DragDropContainer hideSourceOnDrag={true}>
                                        <Grid container columns={10} className="pl-10">
                                            <Grid
                                            item
                                            container
                                            lg={8}
                                            className="border-2 border-black flex justify-center p-6"
                                            >
                                                {/* <Grid item lg={3}>
                                                    <div>
                                                        <CustomImage_new
                                                        src="/images/Icon1.svg"
                                                        className="h-8"
                                                        />
                                                    </div>
                                                </Grid>
                                                <Grid item lg={3}>
                                                    <CustomImage src="/images/Icon2.svg" className="h-8" />
                                                </Grid>
                                                <Grid item lg={3}>
                                                    <CustomImage src="/images/Icon3.svg" className="h-8" />
                                                </Grid>
                                                <Grid item lg={3}>
                                                    <CustomImage src="/images/Icon4.svg" className="h-8" />
                                                </Grid> */}
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
                                                <CustomImage
                                                    src="/images/help.svg"
                                                    className="h-8"
                                                />
                                                </button>
                                            </Grid>
                                        </Grid>

                                        <div className="flex justify-center pt-4">
                                            <MyImage src="/images/contentImage1.svg" className="w-60 h-36"/>
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
                                            <div className="text-xl text-black pt-2 overflow-auto h-36">
                                            {contentData[0].content}
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
                            <div 
                                    className={`fixed bottom-0 flexd-bottom w-[30%] `}
                            >
                                    <div className={`translate-y-2`}>
                                    <MyImage src="/images/bottomlogo.svg" className={`h-24 w-full`}/>
                                    </div>
                            </div>
                            </Grid>
                            <Grid item xs={4}>
                                    <div className={`fixed bottom-0 w-full flex flex-row `}>
                                    <div className="bottom-0 flexd-bottom translate-x-28">
                                    <div
                                        className="Alex_btn_gra_1 translate-x-6 w-3/4 bg-red-300 flex flex-row items-center justify-center rounded-md"
                                        onClick={()=>{
                                            handleMarkedIssuesOpen();
                                        }}
                                    >
                                        <label>10 issue(s)</label>
                                        <MyImage src="/images/eye.svg" className="h-8 px-2 w-8" />
                                    </div>
                                    <button
                                        className="bg-black rounded-3xl px-14 py-2 text-white font-bold text-2xl"
                                        onClick={() => {
                                        // setCounter(100);
                                        setIsFeedback(true);
                                        Router.push("/submitted");
                                        }}
                                    >
                                        SUBMIT
                                    </button>
                                    </div>
                                </div>
                            </Grid>
                            
                            <Grid item xs={4}>
                                <div
                                    className={` fixed bottom-0 flexd-bottom w-[30%] `}
                                >
                                    <div className="translate-y-2 translate-x-11">
                                    <MyImage src="/images/bottomlambmeter.svg" className="h-24" />
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
                <Modal
                open={markedIssuesOpen}
                onClose={handleMarkedIssuesClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <div className="absolute  left-1/2 -translate-x-1/2 bottom-0 bg-gradient-to-b from-[#FF7575] to-[#FFD0D0] pt-6 w-[800px]">
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
                    <div className="text-black text-xl text-center">
                        The title is all-captitalized!
                    </div>
                    <div className="text-black text-xl text-center">
                        The title is all-captitalized!
                    </div>
                    <div className="text-black text-xl text-center">
                        The title is all-captitalized!
                    </div>
                    <div className="text-black text-xl text-center">
                        The title is all-captitalized!
                    </div>
                    <div className="text-black text-xl text-center">
                        The title is all-captitalized!
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
                        // setCounter(100);
                        setIsFeedback(true);
                        Router.push("/submitted");
                        
                        }}
                    >
                        SUBMIT
                    </button>
                    </div>
                </div>
                </Modal>
                    
            </div>
          
        </>
    );
}