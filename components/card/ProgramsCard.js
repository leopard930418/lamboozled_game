import React, { useState } from "react";
import CustomImage from "../base/CustomImage";

export default function ProgramsCard({
  imgsrc = "",
  btnstatus = "",
  title = "Lorem ipsum dolor sitamet, consectetur",
  description = "The Basketball Home Gym for both basketball strength and basketball conditioning...",
  ...props
}) {
  return (
    <div className="w-full flex flex-row pb-4">
      <div className="w-5/12">
        <div className="w-full h-full ">
          <CustomImage src={imgsrc} className=" rounded-xl w-full h-full object-cover"/>
        </div>
      </div>
      <div className="w-7/12 pl-10">
        <div className="text-lg md:text-2xl text-[#030303] py-4">{title}</div>
        <div className="text-sm md:text-xl text-[#5E5E5E]">{description}</div>
      </div>
    </div>
  );
}
