import React from "react";
import { useState } from "react";
import Day4_8 from "../basics/day4_8";
import FeedBack from "../basics/FeedBack";
import sources from "../../public/assets/sources.json";
import content from "../../public/assets/articles.json";
import { useDispatch } from "react-redux";
import {
  updateDataForFeedBack,
} from "../../store/reducers/gameSlice";
export default function StoryDay4({ meter = 50, handleMeter, handleTheDay }) {
  const [cntArt, setcntArt] = useState(3);
  const articlesId = [7, 8, 9];
  const [curArtIndex, setCurArtIndex] = useState(0);
  const handleCurArtIndex = () => {
    setCurArtIndex(curArtIndex + 1);
  };
  const [isFeedback, setIsFeedBack] = useState(false);
  const handleIsFeed = (value) => setIsFeedBack(value);
  const dispatch = useDispatch();
  const srcContent = sources;
  const art_answer = content[articlesId[curArtIndex]].answer_key;
  //for source
  let fiveOrSix = true;
  if (art_answer.charAt(5) == "1") {
    fiveOrSix = true;
  } else if (art_answer.charAt(6) == "1") {
    fiveOrSix = false;
  }
  const srcIndex = Math.floor(Math.random() * srcContent.length);
  const sourceData = { fiveOrSix: fiveOrSix, srcContent: srcContent[srcIndex] };
  //for social
  let registerDate = true;
  let follower = true;
  let post = true;
  let verifyIcon = true;
  let howmany = 0;
  let randN = 0;
  if (art_answer.charAt(4) == "1") {
    howmany = Math.floor(Math.random() * 4 + 1);
    for (let index = 0; index < howmany; index++) {
      randN = Math.floor(Math.random() * 4 + 1);
      if (randN == 1) registerDate = false;
      else if (randN == 2) follower = false;
      else if (randN == 3) post = false;
      
    }
    verifyIcon = false;
  }
  const socialData = {
    verifyIcon: verifyIcon,
    registerDate: registerDate,
    follower: follower,
    post: post,
    nor_follows: Math.floor(Math.random() * 10 + 1),
    fake_follows: Math.floor(Math.random() * 9999 + 3000),
  };
  //for lateral
  const lateralData = {
    lateral:art_answer.charAt(11) == "1" ? true:false,
    curArtId:articlesId[curArtIndex],
    curArt:content[articlesId[curArtIndex]],

  };
  
  //concat all
  const advancedData = { socialData: socialData, sourceData: sourceData, lateralData:lateralData };
  dispatch(updateDataForFeedBack(advancedData));
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
            advancedData={advancedData}
            curDay = {4}
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
            curArtId={articlesId[curArtIndex]}
            curDay = {4}
          />
        </div>
      )}
    </>
  );
}
