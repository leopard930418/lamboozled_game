import React from "react";
import MyImage from "./MyImage";

import CustomImage from "../base/CustomImage";

export default function Fact({ onLoad = () => {}, ...props }) {
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
      <div className="h-[80%] w-full float-left  border-black border-t-2 border-l-2 text-center">
        <div
          className="text-[38px] float-left ml-[170px] font-bold"
          style={{ fontFamily: "Patrick Hand" }}
        >
          Fact-Checking Hub
        </div>
        <div className="w-full h-[80%] float-left ">
          <div className="w-[60%] h-[85%] shadow-[0_0px_6px_2px_rgba(0,0,0,0.25)] float-left mt-3 ml-6">
            <div
              className="text-[18px] float-left justify-center w-full border-b-2 border-black"
              style={{ fontFamily: "Patrick Hand" }}
            >
              Factual Reporting Score
            </div>
            <div
              className="w-full h-[80%] overflow-x-hidden"
              style={{ fontFamily: "Patrick Hand" }}
            >
              <div className="w-full mt-4 float-left justify">
                <div className="float-left w-[35%] text-[#7B7F8C] ">The FencePost </div>
                <div className="border-2 border-black w-40 h-4 float-left mt-1 ml-10">
                  <div className="border-2 border-black w-[140px] h-4 -mt-[2px] -ml-[1px] bg-[#605F5B] "></div>
                </div>

                <span className="-mt-3">94%</span>
              </div>

              <div className="w-full mt-4 float-left justify">
                <div className="float-left w-[35%] text-[#7B7F8C]">The Garlic Press</div>
                <div className="border-2 border-black w-40 h-4 float-left mt-1 ml-10">
                  <div className="border-2 border-black w-[40px] h-4 -mt-[2px] -ml-[1px] bg-[#605F5B] "></div>
                </div>

                <span className="-mt-3">94%</span>
              </div>
              <div className="w-full mt-4 float-left justify">
                <div className="float-left w-[35%] text-[#7B7F8C]">The Meadow Examiner</div>
                <div className="border-2 border-black w-40 h-4 float-left mt-1 ml-10">
                  <div className="border-2 border-black w-[40px] h-4 -mt-[2px] -ml-[1px] bg-[#605F5B] "></div>
                </div>

                <span className="-mt-3">94%</span>
              </div>
              <div className="w-full mt-4 float-left justify">
                <div className="float-left w-[35%] text-[#7B7F8C]">The Financial Times </div>
                <div className="border-2 border-black w-40 h-4 float-left mt-1 ml-10">
                  <div className="border-2 border-black w-[40px] h-4 -mt-[2px] -ml-[1px] bg-[#605F5B] "></div>
                </div>

                <span className="-mt-3">94%</span>
              </div>
              <div className="w-full mt-4 float-left justify">
                <div className="float-left w-[35%] text-[#7B7F8C]">The FencePost </div>
                <div className="border-2 border-black w-40 h-4 float-left mt-1 ml-10">
                  <div className="border-2 border-black w-[40px] h-4 -mt-[2px] -ml-[1px] bg-[#605F5B] "></div>
                </div>

                <span className="-mt-3">94%</span>
              </div>
            </div>
          </div>
          <div className="w-[25%] h-[85%] shadow-[0_0px_6px_2px_rgba(0,0,0,0.25)] float-left mt-3 ml-6">
            <div
              className="text-[18px] float-left  justify-center w-full border-b-2 border-black"
              style={{ fontFamily: "Patrick Hand" }}
            >
              Satirical Sites
            </div>
            <div>
              <div className="text-center mt-10 text-[#7B7F8C]" style={{ fontFamily: "Patrick Hand" }}>
                <div className="mt-3 pt-2 ">The lonion </div>
                <div className="mt-3 pt-2 ">Last Sheep Tonight </div>
                <div className="mt-3 pt-2 ">Cracked Sheep</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}