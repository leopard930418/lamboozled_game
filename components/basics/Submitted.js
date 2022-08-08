import React, { useEffect, useState } from "react";
import { Container } from "postcss";
import CustomImage from "../base/CustomImage";
import MyImage from "../base/MyImage";
// FOR IMPORTING ARITCLE DATA
import content from "../../public/assets/articles.json";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Tooltip from '@mui/material/Tooltip';
import { withStyles, makeStyles } from "@mui/styles";
import LinearProgress from "@mui/material/LinearProgress";
import Modal from '@mui/material/Modal';
// MODULES FOR DRAG&DROP
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DragDropContainer } from "../dragdrop/DragDropContainer";
import Router from "next/router";
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
  
export default function Submitted(){
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
    
    const [reviewMode, setReviewMode] = useState(false);
    
    return(
        <>
            <div className={`max-w-[1280px] max-h-[790px] w-full h-full fixed top-1/2 left-1/2 -translate-x-1/2 
                            -translate-y-1/2 bg-${reviewMode?("[url('/images/backgroundBasic.svg')]"):("[url('/images/feedback.svg')]")}`}
                >
                {/* <div className={`max-w-[1280px] max-h-[790px] w-full h-full fixed top-1/2 left-1/2 -translate-x-1/2 
                            -translate-y-1/2 bg-[url('/images/feedback.svg')]`}
                > */}
                {/* background image mapping */}
                {reviewMode?(<div className="absolute  h-[720px] top-0 left-0 bg-[length:700px_700px]  w-6/12 -z-10 object-cover bg-[url('/images/tabletlayout.svg')] ,bg-no-repeat" >
                </div>):(<div className="absolute  bg-cover bg-no-repeat h-[850px] top-0 left-0 ml-20 -translate-y-16 w-6/12 -z-10 object-cover bg-[url('/images/tabletlayout.svg')]" >
                </div>)}
                {/* background image mapping */}
                <Grid container className="h-full">
                    <Grid item xs={12}>
                        <Grid container >
                            <Grid item xs={1}>
                                {reviewMode&&(<div 
                                        className={`fixed bottom-0 flexd-bottom w-[30%] `}
                                >
                                    <div className={`translate-y-2`}>
                                    <MyImage src="/images/bottomlogo.svg" className={`h-24 w-full`}/>
                                    </div>
                                </div>)}
                            </Grid>
                            <Grid item xs={5}>
                                {reviewMode? (
                                    <div className="pt-24 w-11/12 px-7">
                                        <Grid container columns={10} className="pl-10">
                                            <Grid
                                            item
                                            container
                                            lg={8}
                                            className="border-2 border-black flex justify-center p-1"
                                            >

                                                <Grid item lg={3}>
                                                    <div>
                                                        <CustomImage
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
                                    </div>
                                ):(
                                    <>
                                        <div className="w-3/4 justify-self-center pt-12 ml-20">
                                        <div>
                                            <div className="absolute top-20  right-[50%] w-20 h-20 rounded-full bg-[#C7C7C7]">
                                                <div className="h-full flex justify-center items-center text-black text-3xl font-bold">
                                                    0
                                                </div>
                                            </div>
                                            <div className="flex justify-center pt-12">
                                                <label className="bg-black rounded-3xl px-16 py-2 text-white font-bold text-lg text-center">
                                                    Correct Marks (1/2)
                                                </label>
                                            </div>
                                            <div className="h-2/5 max-h-56  justify-center w-full overflow-x-hidden">

                                                <div className="text-lg text-[#0DA71C] font-semibold text-center py-3 w-full">
                                                The title is all-capitalized
                                                </div>
                                                <div className="text-lg text-[#0DA71C] font-semibold text-center py-3 w-full">
                                                The title is all-capitalized
                                                </div>
                                            </div>


                                            <div className="flex justify-center">
                                                <label className="bg-black rounded-3xl px-16 py-2 text-white font-bold text-lg">
                                                    Missed Or Mismarked
                                                </label>
                                            </div>{" "}
                                            <div className="h-2/5 max-h-56  justify-center w-full overflow-x-hidden">
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
                                        </div>
                                        <div className="absolute bottom-40 right-20">
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
                                                Router.push("/");
                                                }}
                                            >
                                                NEXT
                                            </button>
                                            <button
                                                className="bg-black rounded-3xl px-14 py-2 text-white font-bold text-2xl"
                                                onClick={() => {
                                                setReviewMode(true);
                                                
                                                }}
                                            >
                                                REVIEW
                                            </button>
                                             <button
                                                className="bg-black rounded-3xl px-14 py-2 text-white font-bold text-2xl"
                                                onClick={() => {
                                                setReviewMode(true);
                                                
                                                }}
                                            >
                                                END THE DAY
                                            </button>
                                            </div>
                                        </div>
                                    </>
                                )}
                                
                            </Grid>
                            <Grid item xs={5}>
                                {/* <div className=" justify-center pt-[30%] pl-[20%] p-20">
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
                                </div> */}
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container className="h-full">
                            <Grid item xs={4}>
                            {reviewMode?(
                                <div 
                                    className={`fixed bottom-0 flexd-bottom w-[30%] `}
                                >
                                        <div className={`translate-y-2`}>
                                        <MyImage src="/images/bottomlogo.svg" className={`h-24 w-full`}/>
                                        </div>
                                </div>
                            ):(
                            ""
                            )}
                           
                            </Grid>
                            <Grid item xs={4}>
                                {/* <div className={`fixed bottom-0 w-full flex flex-row `}>
                                    <div className="bottom-0 flexd-bottom translate-x-28">
                                    <div
                                        className="Alex_btn_gra_1 translate-x-6 w-3/4 bg-red-300 flex flex-row items-center justify-center rounded-md"
                                        onClick={handleMarkedIssuesOpen}
                                    >
                                        <label>10 issue(s)</label>
                                        <MyImage src="/images/eye.svg" className="h-8 px-2 w-8" />
                                    </div>
                                    <button
                                        className="bg-black rounded-3xl px-14 py-2 text-white font-bold text-2xl"
                                        onClick={() => {
                                        // setCounter(100);
                                        setIsFeedback(true);
                                        }}
                                    >
                                        SUBMIT
                                    </button>
                                    </div>
                                </div> */}
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

             
                    
            </div>
          
        </>
    );
}