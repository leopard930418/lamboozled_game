import React, { useState } from "react";

import StarIcon from "@mui/icons-material/Star";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import TopicIcon from "@mui/icons-material/Topic";

import CustomImage from "../base/CustomImage";
import CustomText from "../base/CustomText";
import { Divider, Grid } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

export default function CourseCard1({
  imgsrc = "",
  avatarsrc = "",
  chipsrc = "",
  review = 0,
  visitedCount = 0,
  title = "",
  description = "",
  accessTime = "",
  lecturesCount = 0,
  instructorName = "",
  price = 0,
  ...props
}) {
  return (
    <div className="w-full rounded-md bg-white shadow-md ">
      <div className="w-full flex flex-row ">
        <div className="w-1/4 p-4">
          <div className="w-full">
            <CustomImage src={imgsrc} className="object-cover"></CustomImage>
          </div>
        </div>
        <div className="w-3/4 p-4 flex flex-col">
          <div className="flex flex-row justify-between">
            <div className="flex justify-start">
              <CustomImage src={chipsrc} className="h-8"></CustomImage>
            </div>
            <div className="flex flex-row items-center space-x-2">
              <AccessTimeIcon style={{ color: "#F9AA1B" }} />
              <div className="text-left text-black text-lg ">{accessTime}</div>
              <TopicIcon style={{ color: "#D1222A" }} />
              <div className="text-left text-black text-lg ">
                {lecturesCount}Lectures
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center py-2 space-x-2">
            <StarIcon style={{ color: "#FF7E07" }} />
            <div className="text-left text-black text-lg ">{review}</div>{" "}
            <PermIdentityIcon />
            <div className="text-left text-black text-lg ">{visitedCount}</div>
          </div>
          <div className="flex flex-row justify-between items-center space-x-4">
            <div className="flex flex-col">
              <div className="py-2 text-3xl font-bold text-[#030303] text-left">
                {title}
              </div>
              <div className="pb-2 text-xl text-[#030303] text-left break-words">
                {description}
              </div>
            </div>
            <div className="text-2xl text-black font-bold">${price}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
