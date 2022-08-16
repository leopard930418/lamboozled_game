// Alex created
import React from "react";
import StoryDay1 from "./StoryDay1";
import StoryDay2 from "./StoryDay2";
import StoryDay3 from "./StoryDay3";
import StoryDay4 from "./StoryDay4";
import { useState } from "react";


export default function Story() {
  const [theDay, setTheDay] = useState(1);
  const handleTheDay = () => {
    setTheDay(theDay + 1);
  };
  const [meter, setMeter] = useState(50);
  const handleMeter = (value) => {
    setMeter(value);
  };
  // console.log("makredstickers:::",handleMeter);
  return (
    <div>
      {theDay==1 &&(
          <StoryDay1 meter = {meter} handleMeter={handleMeter} handleTheDay={handleTheDay} />
        )}
        {theDay==2 && (
          <StoryDay2 meter = {meter} handleMeter={handleMeter} handleTheDay={handleTheDay} />
        )}
        {theDay==3 && (
          <StoryDay3 meter = {meter} handleMeter={handleMeter} handleTheDay={handleTheDay} />
        )}
        {theDay==4 && (
          <StoryDay4 meter = {meter} handleMeter={handleMeter} handleTheDay={handleTheDay} />
        )}
      {/* <StoryDay4
        meter={meter}
        handleMeter={handleMeter}
        handleTheDay={handleTheDay}
      /> */}
    </div>
  );
}
