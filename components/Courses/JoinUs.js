import { Grid } from "@mui/material";
import React from "react";
import CustomImage from "../base/CustomImage";
export default function JoinUs({ imgsrc = "",title="", description="",btncolor=""
 }) {
  return (
    <div className="bg-[#D1222A] h-full">
      <div className="flex flex-col-reverse md:flex-row">
        <div className="w-full md:w-1/3">
          <CustomImage src={imgsrc} />
        </div>
        <div className="w-full md:w-2/3 flex items-center p-4 md:p-20">
          <div className="flex flex-col items-center md:items-start pt-10 md:pt-0">
            <div className="text-2xl md:text-4xl pb-4 text-white text-left bold">
              {title}
            </div>
            <div className="text-base md:text-2xl text-white text-center md:text-left pr-2 md:pr-8">
              {description}
            </div>
            <div className="py-8 flex justify-start">
              <button className={`rounded-3xl bg-${btncolor} text-white py-2 px-4`}>
                Join Us Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
