import React from "react";
import { useState } from "react";
import Day1_3 from "../basics/day1_3";
import FeedBack from "../basics/FeedBack";

export default function StoryDay2({ meter = 50, handleMeter, handleTheDay }) {
  const articlesId = [2, 3];
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
            meter={meter}
            handleIsFeed={handleIsFeed}
            unlockedStickers={[0, 1, 2]}
            curDay = {2}
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
            curDay = {2}
          />
        </div>
      )}
    </>
  );
}
