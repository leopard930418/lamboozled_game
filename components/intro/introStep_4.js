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
import Modal from '@mui/material/Modal';
// MODULES FOR DRAG&DROP
import Router from "next/router";
export default function introStep_4(){
 
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
           
                {/* background image mapping */}
                {reviewMode?(<div className="absolute  h-[720px] top-0 left-0 bg-[length:700px_700px]  w-6/12 -z-10 object-cover bg-[url('/images/tabletlayout.svg')] bg-no-repeat" >
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
                                                <button className="bg-[#FC5757] px-4 py-2 text-white " 
                                                    onClick={()=>{setReviewMode(true);}}
                                                >
                                                View
                                                </button>
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-between items-center">
                                            <div className="text-lg text-[#FC5757] font-semibold text-center py-4">
                                                There are typo(s) or grammar mistake(s) in this story!
                                            </div>
                                            <div>
                                                <button className="bg-[#FC5757] px-4 py-2 text-white "
                                                onClick={()=>{setReviewMode(true);}}>
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
                                        // setIsFeedback(false);
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
                                        // setReviewMode(true);
                                        Router.push("/");
                                        }}
                                    >
                                        END THE DAY
                                    </button>
                                    <button
                                        className="bg-black rounded-3xl px-14 py-2 text-white font-bold text-2xl"
                                        onClick={() => {
                                        // setReviewMode(true);
                                        Router.push("/intro");
                                        }}
                                    >
                                        INTRODUCTION
                                    </button>
                                    </div>
                                </div>
                            </>
                                
                                
                            </Grid>
                            <Grid item xs={5}>
                              
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
                            
                            </Grid>
                            
                            <Grid item xs={4}>
                                {!reviewMode&&(
                                    <div
                                        className={` fixed bottom-0 flexd-bottom w-[30%] `}
                                    >
                                        <div className="translate-y-2 translate-x-11">
                                            <MyImage src="/images/bottomlambmeter.svg" className="h-24" />
                                        </div>
                                    </div>
                                )

                                }
                                
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

             
                    
            </div>
          
        </>
    );
}