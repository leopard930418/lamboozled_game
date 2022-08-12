//alex created
import React, { useEffect, useState } from "react";
import { Container } from "postcss";
import CustomImage from "../base/CustomImage";
import MyImage from "../base/MyImage";
// FOR IMPORTING ARITCLE DATA
import content from "../../public/assets/articles.json";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
// MODULES FOR DRAG&DROP
import Router from "next/router";
export default function introStep_4(){

    const [moveOnMode, setMoveOnMode] = useState(false);
    
    return(
        <>
            <div className={`max-w-[1280px] max-h-[790px] w-full h-full fixed top-1/2 left-1/2 -translate-x-1/2 
                            -translate-y-1/2 bg-[url('/images/feedback.svg')]`}
                >
                {/* background image mapping */}
                {moveOnMode && (<div className="absolute  bg-cover bg-no-repeat h-[850px] top-0 left-0 ml-20 -translate-y-16 w-6/12 -z-10 object-cover bg-[url('/images/tabletlayout.svg')]" >
                </div>)}
                {/* background image mapping */}
                <Grid container className="h-full">
                    <Grid item xs={12}>
                        <Grid container >
                            <Grid item xs={1}>
                                
                            </Grid>
                            <Grid item xs={5}>
                            {moveOnMode ? (<>
                                <div className="w-11/12 justify-self-center pt-12 ml-10">
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
                                    <div className="h-48 max-h-56  justify-center w-full overflow-x-hidden">
                                        <div className="text-lg text-[#0DA71C] font-semibold text-center py-3 w-full">
                                        The title is all-capitalized(+2)
                                        </div>
                                    </div>
                                    <div className="flex justify-center">
                                        <label className="bg-black rounded-3xl px-16 py-2 text-white font-bold text-lg">
                                            Missed Or Mismarked
                                        </label>
                                    </div>{" "}
                                    <div className="h-2/5 max-h-56  justify-center w-full overflow-x-hidden">
                                        <div className="flex flex-row justify-between items-center">
                                            <div className="w-[90%] text-lg text-[#FC5757] font-semibold text-center py-4">
                                                The title uses dramatic punctations!(-2)
                                            </div>
                                            <div>
                                                <button className="bg-[#FC5757] px-4 py-2 text-white " 
                                                    onClick={()=>{setMoveOnMode(true);}}
                                                >
                                                View
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <div className="absolute bottom-40 right-20">
                                </div>
                            </>):(  <div>
                                        <div className=" pt-80 ">
                                        <button
                                            className="bg-[#D8EEFB] rounded-3xl px-14 py-2 text-black font-bold text-2xl w-[80%] h-[60px]"
                                            onClick={() => {
                                            setMoveOnMode(true);
                                            }}
                                        >
                                            Yes, try again
                                        </button>
                                        </div>
                                        <div className=" pt-16 ">
                                        <button
                                            className="bg-[#D8EEFB] rounded-3xl px-14 py-2 text-black font-bold text-2xl w-[80%] h-[60px]"
                                            onClick={() => {
                                            setMoveOnMode(true);
                                            }}
                                        >
                                            Nope, let’s move on
                                        </button>
                                        </div>
                                    </div>)}
                            
                            </Grid>
                            <Grid item xs={5}>
                              
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container className="h-full">
                            <Grid item xs={4}>
                            {moveOnMode?(
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
                                {!moveOnMode&&(
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
                <div>
                    <MyImage src="/images/BossMedium.svg" className="absolute right-[10%] top-4 w-[310px] h-[395px]"/>
                    
                    {moveOnMode ? (
                            <><MyImage src="/images/AlertPanel.svg" className="absolute right-[5%] bottom-28 w-[459px] h-[240px]  break-words p-8"
                            >
                            <span className=" text-3xl">
                            Your correct marks will increase the Lamboozled Meter, and the wrong ones will decrease it. The higher it is, the better you did!
                            </span>
                            </MyImage>
                            <MyImage src="/images/ArrowYellow.svg" className="absolute right-[0.5%] top-[65%]  w-[80px] h-[79px] cursor-pointer"
                                onClick={()=>{
                                        Router.push("/feedback");
                                        }}        
                            /></>
                        ):( <>
                            <MyImage src="/images/AlertPanel.svg" className="absolute right-[5%] bottom-28 w-[459px] h-[186px]  break-words p-8"
                            >
                            <span className=" text-3xl">
                                That’s it for the practice round. Do you want to try again?
                            </span>
                            </MyImage>
                           
                            </>                    
                        )}
                    
                </div> 
             
                    
            </div>
          
        </>
    );
}