import React from "react";
import CustomImage from "../base/CustomImage";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export default function BlogSmallCard({
  title = "",
  imgsrc = "",
  createDate = "",
  duration = "",
}) {
  return (
    <div className="p-0 md:p-4">
      <div className="flex flex-row">
        <div className="w-2/3 flex flex-col">
          <div className="text-2xl text-[#030303] font-bold py-2">{title}</div>
          <div className="flex flex-row">
            <div className="flex flex-row">
              <CalendarMonthIcon style={{ color: "#5E5E5E", opacity: "50%" }} />
              <div>{createDate}</div>
            </div>
            <div className="flex flex-row">
              <AccessTimeIcon style={{ color: "#5E5E5E", opacity: "50%" }} />
              <div>{duration}</div>
            </div>
          </div>
        </div>
        <div className="w-1/3 p-4 md:p-8">
          <div>
            <CustomImage src={imgsrc} className="" />
          </div>
        </div>
      </div>
    </div>
  );
}
