import React from "react";
import { useState } from 'react'
import Day4_8 from '../basics/day4_8'
import FeedBack from '../basics/FeedBack'

export default function StoryDay4({meter = 50, handleMeter,handleTheDay}) {
    const [cntArt, setcntArt] = useState(3);
    const articlesId = [7,8,9];
    const [curArtIndex, setCurArtIndex] = useState(0);
    const handleCurArtIndex = () => {setCurArtIndex(curArtIndex+1);}
    const [isFeedback, setIsFeedBack] = useState(false);
    const handleIsFeed = (value)=>setIsFeedBack(value);
    const [markedStickers, setMarkedStickers] = useState([]);
    const handleMarkedStickers = (sti_arr) => setMarkedStickers(sti_arr);
  
   
    return (
        <>
            {!isFeedback ? (
                <div >
                    <Day4_8     curArtId = {articlesId[curArtIndex]} 
                                curArtIndex = {curArtIndex}
                                meter={meter} 
                                handleIsFeed={handleIsFeed} 
                                handleMarked = {handleMarkedStickers}
                                unlockedStickers={[0,1,2,3,]} />
                </div>
            ):(
                <div >
                    <FeedBack   curArtIndex = {articlesId[curArtIndex]} 
                                meter={meter} 
                                leftArts = {articlesId.length-Number(curArtIndex)-1} 
                                handleIsFeed={handleIsFeed} 
                                handleCurArtIndex={handleCurArtIndex} 
                                handleTheDay={handleTheDay}
                                markedStickers = {markedStickers}
                                handleMeter = {handleMeter}/>
                </div>
            )}
        </>

    )
  }
  