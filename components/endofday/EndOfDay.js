// Alex created
import React from "react";
import EndOfDay_1 from "./EndOfDay_1";
import EndOfDay_2 from "./EndOfDay_2";
import EndOfDay_3 from "./EndOfDay_3";
import EndOfDay_4 from "./EndOfDay_4";
import EndOfDay_5 from "./EndOfDay_5";
import EndOfDay_6 from "./EndOfDay_6";
import EndOfDay_7 from "./EndOfDay_7";
import EndOfDay_8 from "./EndOfDay_8";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import {} from "../../store/reducers/gameSlice";
export default function Story() {
  // const dispatch = useDispatch();
  const theDay = useSelector((state) => state.game?.theDay ?? 1);
  return (
    <div>
      {/* temp test */}
      {theDay==1 &&(
        <EndOfDay_1 />
        // <EndOfDay_8 />
      )}
      {theDay==2 && (
        <EndOfDay_2 />
      )}
       {theDay==3 && (
        <EndOfDay_3 />
      )}
      {theDay==4 && (
        <EndOfDay_4 />
      )}
      {theDay==5 && (
        <EndOfDay_5 />
      )}
      {theDay==6 && (
        <EndOfDay_6 />
      )}
      {theDay==7 && (
        <EndOfDay_7 />
      )}
      {theDay==8 && (
        <EndOfDay_8 />
      )}
        

    </div>
  );
}
