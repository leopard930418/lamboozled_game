import React from "react";
import CustomImage from "../base/CustomImage";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export default function BlogCard({
  title = "",
  imgsrc = "",
  description = "",
  createDate = "",
  duration = "",
}) {
  return (
    <div className="p-2 md:p-4">
      <div className="flex flex-col">
        <div>
          <CustomImage src={imgsrc} className="w-full" />
        </div>
        <div className="text-2xl text-[#030303] font-bold py-2">{title}</div>
        <div className="text-sm text-[#5E5E5E] py-4">{description}</div>
        <div className="flex flex-row pt-4">
          <div className="flex flex-row">
            <CalendarMonthIcon style={{ color: "#5E5E5E",opacity:"50%" }} />
            <div>{createDate}</div>
          </div>
          <div className="flex flex-row">
            <AccessTimeIcon style={{ color: "#5E5E5E",opacity:"50%" }} />
            <div>{duration}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
