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
  
export default function IntroStep_3({handleStepId}){
    const classes = useStyles();
    const [isFeedback, setIsFeedback] = useState(false);
    const contentData = content;
    const [guideOpen, setGuideOpen] = useState(false);
    const handleGuideOpen = () => setGuideOpen(true);
    const handleGuideClose = () => setGuideOpen(false);
    
    const [markedIssuesOpen, setMarkedIssuesOpen] = useState(false);
    const handleMarkedIssuesOpen = () => setMarkedIssuesOpen(true);
    const handleMarkedIssuesClose = () => setMarkedIssuesOpen(false);
    
    return(
        <>
            <div className="max-w-[1280px] max-h-[720px] w-full h-full fixed top-1/2 left-1/2 -translate-x-1/2 
                            -translate-y-1/2 bg-[url('/images/IntroBackground.svg')]"
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
                                        <div></div>
                                        <div className={classes.root}>
                                                <div className={classes.stats}>
                                                    {/* {!isFeedback && ( */}
                                                    <BorderLinearProgress variant="determinate" value={31} />
                                                    {/* )} */}
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={5}>
                                <div className="pt-24 w-11/12 px-7">
                                    <DndProvider backend={HTML5Backend}>
                                        <DragDropContainer hideSourceOnDrag={true} stickers={[1,2,]}>
                                        <Grid container columns={10} className="pl-10">
                                            <Grid
                                            item
                                            container
                                            lg={8}
                                            className="border-2 border-black flex justify-center p-6"
                                            >
                                          
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
                <div>
                    {/* ${alertShow&&(
                        <svg  className="absolute top-12 left-[12.5%] button" expanded = "true" height = "150px" width = "150px" 
                        onClick={() => {
                            console.log("Alert clicked");
                            handleAlertClose();
                            console.log(alertShow);
                        }}
                        >
                            <circle className = "innerCircle" cx = "50%" stroke = "#FF4040" strokeWidth = "10%" cy = "50%" r = "25%" fill = "none"/>
                        </svg>
                    )} */}
                    <MyImage src="/images/BossMedium.svg" className="absolute right-[25%] bottom-32 w-[310px] h-[395px]"/>
                    <MyImage src="/images/AlertPanel.svg" className="absolute right-[20%] bottom-5 w-[769px] h-[238px]  break-words p-8"
                    >
                    <span className=" text-3xl">
                    Great! As you start the real job, you need to review each article in 5min. The timer on your left will become red when 1min is left. Easy for now, don’t worry!
                    </span>
                    </MyImage>
                    <MyImage src="/images/ArrowYellow.svg" className="absolute right-[15.5%] top-[85%]  w-[80px] h-[79px] cursor-pointer"
                    onClick={()=>{
                                handleStepId(4);
                                }}        
                    />
                </div> 
                    
            </div>
          
        </>
    );
}