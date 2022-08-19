// Alex created
import React from "react";
import StoryDay1 from "./StoryDay1";
import StoryDay2 from "./StoryDay2";
import StoryDay3 from "./StoryDay3";
import StoryDay4 from "./StoryDay4";
import StoryDay5 from "./StoryDay5";
import StoryDay6 from "./StoryDay6";
import StoryDay7 from "./StoryDay7";
import StoryDay8 from "./StoryDay8";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import {} from "../../store/reducers/gameSlice";
export default function Story() {
  // const dispatch = useDispatch();
  const theDay = useSelector((state) => state.game?.theDay ?? 1);
  return (
    <div>
      {theDay==1 &&(
        <StoryDay1 />
      )}
      {theDay==2 && (
        <StoryDay2 />
      )}
      {theDay==3 && (
        <StoryDay3 />
      )}
      {theDay==4 && (
        <StoryDay4 />
      )}
      {theDay==5 && (
        <StoryDay5 />
      )}
      {theDay==6 && (
        <StoryDay6 />
      )}
      {theDay==7 && (
        <StoryDay7 />
      )}
      {theDay==8 && (
        <StoryDay8 />
      )}
      
    </div>
  );
}
