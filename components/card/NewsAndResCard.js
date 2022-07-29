import React, { useState } from "react";
import CustomImage from "../base/CustomImage";

export default function NewsAndResCard({
  imgsrc = "",
  btnstatus = "",
  title = "Class Technologies Inc, Closes $30 Million Series A",
  description = "Class Technologies Inc, the company that created Class",
  ...props
}) {
  return (
    <div className="w-full h-full flex flex-row pb-4">
      <div className="relative w-1/2 ">
        <div className="absolute w-5/6 bottom-1/4 right-0">
          <div className="flex justify-end pr-6">
            <button className="rounded-3xl bg-red-700 text-white text-center text-xs sm:text-lg px-4 py-2">
              {btnstatus}
            </button>
          </div>
        </div>
        <div className="w-full h-full ">
          <CustomImage src={imgsrc}  className="w-full h-full"/>
        </div>
      </div>
      <div className="w-1/2 px-4 md:px-8">
        <div className="text-lg md:text-2xl text-[#030303]">{title}</div>
        <div className="text-sm md:text-xl text-[#5E5E5E]">{description}</div>
      </div>
    </div>
  );
}
