import React, { useState } from "react";

import StarIcon from "@mui/icons-material/Star";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ImportContactsIcon from '@mui/icons-material/ImportContacts';

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ArticleIcon from "@mui/icons-material/Article";

import CustomImage from "../base/CustomImage";
import CustomText from "../base/CustomText";
import { Divider, Grid } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

export default function InstructorCard({
  avatarsrc = "",
  description = "",
  instructorName = "",
  role="",
  courseCount=0,
  visitedCount=0,
  ...props
}) {
  return (
    <div className="h-full w-full rounded-md bg-white shadow-md p-4">
      <div className="w-1/6">
        <Stack direction="row" spacing={2}>
          <Avatar alt="Remy Sharp" src={avatarsrc} />
        </Stack>
      </div>
      <div className="w-5/6 flex flex-col justify-start">
        <div className="text-2xl font-bold">{instructorName}</div>
        <div className="text-lg text-[#F9AA1B]">{role}</div>
        <div className="flex flex-row items-center pl-4 py-2 space-x-2">
          <PermIdentityIcon />
          <CustomText align="left" color="black" className="w-full" size="lg">
            {visitedCount}
          </CustomText>
          <ImportContactsIcon style={{ color: "#D1222A" }} />
          <CustomText align="left" color="black" className="w-full" size="lg">
            {courseCount} Courses
          </CustomText>
        </div>
      </div>
    </div>
  );
}
