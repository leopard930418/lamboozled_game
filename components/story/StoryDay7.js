import React from "react";
import { useState } from "react";
import Day4_8 from "../basics/day4_8";
import FeedBack from "../basics/FeedBack";


export default function StoryDay7({ meter = 50, handleMeter, handleTheDay }) {
  const [cntArt, setcntArt] = useState(3);
  const articlesId = [16, 17, 18];
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
          <Day4_8
            curArtId={articlesId[curArtIndex]}
            curArtIndex={curArtIndex}
            meter={meter}
            handleIsFeed={handleIsFeed}
            unlockedStickers={[0, 1, 2, 3]}
          />
        </div>
      ) : (
        <div>
          <FeedBack
            curArtIndex={articlesId[curArtIndex]}
            meter={meter}
            leftArts={articlesId.length - Number(curArtIndex) - 1}
            handleIsFeed={handleIsFeed}
            handleCurArtIndex={handleCurArtIndex}
          />
        </div>
      )}
    </>
  );
}
