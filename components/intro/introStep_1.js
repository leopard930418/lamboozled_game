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
  
export default function IntroStep_1({handleStepId}){
    const classes = useStyles();
    const [isFeedback, setIsFeedback] = useState(false);
    const contentData = content;
    const [guideOpen, setGuideOpen] = useState(false);
    const handleGuideOpen = () => setGuideOpen(true);
    const handleGuideClose = () => setGuideOpen(false);
    // const [markedIssuesOpen, setMarkedIssuesOpen] = useState(false);
    // const handleMarkedIssuesOpen = () => setMarkedIssuesOpen(true);
    // const handleMarkedIssuesClose = () => setMarkedIssuesOpen(false);
    // const [reviewMode, setReviewMode] = useState(false);
  
    return(
        <>
            <div></div>
            <div className={`max-w-[1280px] max-h-[790px] w-full h-full fixed top-1/2 left-1/2 -translate-x-1/2 
                            -translate-y-1/2 bg-[url('/images/IntroBackground.svg')]`}
                >
                <div className="absolute  h-[720px] top-0 left-0 bg-[length:700px_700px]  w-6/12 -z-10 object-cover bg-[url('/images/tabletlayout.svg')] bg-no-repeat" >
                </div>
                {/* background image mapping */}
                <Grid container className="h-full">
                    <Grid item xs={12}>
                        <Grid container >
                            <Grid item xs={1}>
                                <div 
                                        className={`fixed bottom-0 flexd-bottom w-[30%] `}
                                >
                                    <div className={`translate-y-2`}>
                                    <MyImage src="/images/bottomlogo.svg" className={`h-24 w-full`}/>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={5}>
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
                                                    className="h-8 opacity-75 "
                                                    />
                                                
                                                </div>
                                            </Grid>
                                            <Grid item lg={3}>
                                                <CustomImage src="/images/Icon2.svg" className="h-8 " />
                                            </Grid>
                                            <Grid item lg={3}>
                                                {/* <CustomImage src="/images/Icon3.svg" className="h-8 opacity-75" style={{backgroundColor: '#000000', }}/> */}
                                            </Grid>
                                            <Grid item lg={3}>
                                                {/* <CustomImage src="/images/Icon4.svg" className="h-8 opacity-75" style={{backgroundColor: '#000000', }}/> */}
                                            </Grid>
                                        </Grid>
                                        <Grid
                                        item
                                        lg={2}
                                        className="border-2 border-black flex justify-center"
                                        >
                                            <button
                                            
                                            >
                                            <CustomImage
                                                src="/images/help.svg"
                                                className="h-8"
                                            />
                                            </button>
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
                                                onClick={()=>{handleGuideClose();
                                                    handleStepId(2);
                                                    console.log("introStep_1: set id" + 2);    
                                                }}

                                            >
                                                Got it!
                                            </button>
                                            </div>
                                        </div>
                                    </Modal>    
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
                            </Grid>
                            <Grid item xs={5}>
                                
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
                         
                            </Grid>
                            <Grid item xs={4}>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <div>
                    {!guideOpen && (
                        <>
                        <svg  className="absolute top-16 left-[33%] button" expanded = "true" height = "100px" width = "100px" 
                            onClick={() => {
                                console.log("help clicked");
                                handleGuideOpen();
                            }}
                        >
                        <circle className = "innerCircle" cx = "50%" stroke = "#FF4040" strokeWidth = "10%" cy = "50%" r = "25%" fill = "none"/>
                        </svg>
                        <MyImage src="/images/BossMedium.svg" className="absolute right-[15%] bottom-32 w-[310px] h-[395px]"/>
                        <MyImage src="/images/AlertPanel.svg" className="absolute right-[10%] bottom-5 w-[769px] h-[238px]  break-words p-8"
                        >
                            <span className=" text-3xl">This is your desk, and you’ll be able to use the 
                            computer after you get promoted. For now, please click the question mark to see your task. 
                            </span>
                        </MyImage>
                        </>
                    )}
                </div>
                    
            </div>
          
        </>
    );
}