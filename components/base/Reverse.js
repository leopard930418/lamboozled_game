import React from "react";
import MyImage from "./MyImage";

import CustomImage from "../base/CustomImage";

export default function Reverse({ onLoad = () => {}, ...props }) {
  return (
    <>
      <div className="h-[20%] w-full float-left ">
        <div className="h-full w-[50%] float-left">
          <button className="bg-black rounded-full text-white text-lg px-4 py-0 float-right mt-5">
            Back
          </button>
        </div>
        <div className="h-full w-[50%] float-left">
          <div className="float-right w-[80px] h-full border-black border-l-2">
            <CustomImage src="/images/help.svg" className="h-8 mt-5 ml-5" />
          </div>
          <div className="float-right h-full w-[100px] border-black border-l-2"></div>
        </div>
      </div>
      <div className="h-[80%] w-full float-left  border-black border-t-2 border-l-2">
        <div className="h-[100%] w-[30%] float-left mt-7 border-black border-r-2">
        
        </div>
        <div className="h-[100%] w-[30%] float-left mt-7 border-black border-r-2">
        
        </div>
        <div className="h-[100%] w-[30%] float-left mt-7 border-black border-r-2">
        
        </div>

        <div className="h-[90%] w-[30%] float-left mt-7">Posts</div>
      </div>
    </>
  );
}
