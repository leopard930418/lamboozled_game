import React from "react";
import { useState } from "react";
import Day1_3 from "../basics/day1_3";
import FeedBack from "../basics/FeedBack";

export default function StoryDay1() {
  //   const [cntArt, setcntArt] = useState(2);
  const articlesId = [0, 1];
  const [curArtIndex, setCurArtIndex] = useState(0);
  const handleCurArtIndex = () => {
    setCurArtIndex(curArtIndex + 1);
  };
  const [isFeedback, setIsFeedBack] = useState(false);
  const handleIsFeed = (value) => setIsFeedBack(value);


  return (
    <>
      {!isFeedback ? (
        <div>
          <Day1_3
            curArtId={articlesId[curArtIndex]}
            curArtIndex={curArtIndex}
            handleIsFeed={handleIsFeed}
            unlockedStickers={[0, 1]}
          />
        </div>
      ) : (
        <div>
          <FeedBack
            curArtIndex={articlesId[curArtIndex]}
            leftArts={articlesId.length - Number(curArtIndex) - 1}
            handleIsFeed={handleIsFeed}
            handleCurArtIndex={handleCurArtIndex}
     
          />
        </div>
      )}
    </>
  );
}
