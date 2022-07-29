import { Grid, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import InstructorCard from "../card/InstructorCard";
export default function Instructors() {
  const InstructorData = [
    {
      avatarsrc: "/images/avatar1.png",
      instructorName: "Julie Blees",
      role: "Design and Development",
      visitedCount: 152232,
      courseCount: 22,
    },
    {
      avatarsrc: "/images/avatar1.png",
      instructorName: "Julie Blees",
      role: "Design and Development",
      visitedCount: 152232,
      courseCount: 22,
    },
    {
      avatarsrc: "/images/avatar1.png",
      instructorName: "Julie Blees",
      role: "Design and Development",
      visitedCount: 152232,
      courseCount: 22,
    },
    {
      avatarsrc: "/images/avatar1.png",
      instructorName: "Julie Blees",
      role: "Design and Development",
      visitedCount: 152232,
      courseCount: 22,
    },
    {
      avatarsrc: "/images/avatar1.png",
      instructorName: "Julie Blees",
      role: "Design and Development",
      visitedCount: 152232,
      courseCount: 22,
    },
    {
      avatarsrc: "/images/avatar1.png",
      instructorName: "Julie Blees",
      role: "Design and Development",
      visitedCount: 152232,
      courseCount: 22,
    },
  ];
  const [showAll, setShowAll] = useState(false);
  const isPhoneMode = useMediaQuery("(max-width:600px)");

   return (
    <div className="bg-[#D1222A] h-full px-2 py-12 md:p-20">
      <div className="flex flex-col justify-center items-center pb-10">
        <div className="text-2xl md:text-4xl pb-4 text-white text-center bold">
          Instructors that are Most Popular{" "}
        </div>
        <div className="text-base md:text-2xl text-white text-center">
          Loem ipsum makcov task vanade Hemiskade mevatuledes
        </div>
      </div>
      <Grid container spacing={2}>
        {InstructorData.map((items, index) =>
          showAll ? (
            <Grid item lg={4} md={4} sm={12} xs={12} key={index}>
              <InstructorCard
                avatarsrc={items.avatarsrc}
                instructorName={items.instructorName}
                role={items.role}
                visitedCount={items.visitedCount}
                courseCount={items.courseCount}
              />
            </Grid>
          ) : (
            index < (isPhoneMode? 3:6) && (
              <Grid item lg={4} md={4} sm={12} xs={12} key={index}>
                <InstructorCard
                  avatarsrc={items.avatarsrc}
                  instructorName={items.instructorName}
                  role={items.role}
                  visitedCount={items.visitedCount}
                  courseCount={items.courseCount}
                />
              </Grid>
            )
          )
        )}
      </Grid>
      <div className="py-12 flex justify-center">
        <button
          className="rounded-3xl bg-black text-white py-2 px-6"
          onClick={() => {
            setShowAll(true);
          }}
        >
          View All
        </button>
      </div>
    </div>
  );
}
