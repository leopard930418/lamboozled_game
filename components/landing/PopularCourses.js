import { Grid, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import CourseCard from "../card/CourseCard";

export default function PopularCourses() {
  const [showAll, setShowAll] = useState(false);
  const isPhoneMode = useMediaQuery("(max-width:600px)");

  const courseData = [
    {
      imgsrc: "/images/DesignCourse.svg",
      chipsrc: "/images/Designchip.svg",
      review: 5,
      title: "Mathematics",
      description: "Lörem ipsum makrov tåsk vanade tåsönde. Hemiskade",
      accessTime: "12hr 42mins",
      lecturesCount: 43,
      avatarsrc: "/images/avatar1.png",
      instructorName: "Julie Blees",
      price: 6.38,
    },
    {
      imgsrc: "/images/WorkCourse.svg",
      chipsrc: "/images/Designchip.svg",
      review: 5,
      title: "Programming",
      description: "Lörem ipsum makrov tåsk vanade tåsönde. Hemiskade",
      accessTime: "12hr 42mins",
      lecturesCount: 43,
      avatarsrc: "/images/avatar2.png",
      instructorName: "Julie Blees",
      price: 6.38,
    },
    {
      imgsrc: "/images/SystemsCourse.svg",
      chipsrc: "/images/Designchip.svg",
      review: 5,
      title: "Relational Database",
      description: "Lörem ipsum makrov tåsk vanade tåsönde. Hemiskade",
      accessTime: "12hr 42mins",
      lecturesCount: 43,
      avatarsrc: "/images/avatar3.png",
      instructorName: "Julie Blees",
      price: 6.38,
    },
    {
      imgsrc: "/images/DesignCourse.svg",
      chipsrc: "/images/Designchip.svg",
      review: 5,
      title: "Mathematics",
      description: "Lörem ipsum makrov tåsk vanade tåsönde. Hemiskade",
      accessTime: "12hr 42mins",
      lecturesCount: 43,
      avatarsrc: "/images/avatar1.png",
      instructorName: "Julie Blees",
      price: 6.38,
    },
    {
      imgsrc: "/images/WorkCourse.svg",
      chipsrc: "/images/Designchip.svg",
      review: 5,
      title: "Programming",
      description: "Lörem ipsum makrov tåsk vanade tåsönde. Hemiskade",
      accessTime: "12hr 42mins",
      lecturesCount: 43,
      avatarsrc: "/images/avatar2.png",
      instructorName: "Julie Blees",
      price: 6.38,
    },
    {
      imgsrc: "/images/SystemsCourse.svg",
      chipsrc: "/images/Designchip.svg",
      review: 5,
      title: "Relational Database",
      description: "Lörem ipsum makrov tåsk vanade tåsönde. Hemiskade",
      accessTime: "12hr 42mins",
      lecturesCount: 43,
      avatarsrc: "/images/avatar3.png",
      instructorName: "Julie Blees",
      price: 6.38,
    },
  ];
  return (
    <div className="bg-[#F5F5F5] h-full px-2 py-10 md:p-20">
      <div className=" pt-10">
        <div className="text-2xl md:text-4xl pb-10 text-black text-center font-bold">
          Most PoPular Courses
        </div>
      </div>
      <div className="">
        <Grid
          container
          spacing={4}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          {courseData.map((items, index) =>
            showAll ? (
              <Grid item lg={4} md={4} sm={12} xs={12} key={index}>
                <CourseCard
                  imgsrc={items.imgsrc}
                  chipsrc={items.chipsrc}
                  review={items.review}
                  title={items.title}
                  description={items.description}
                  accessTime={items.accessTime}
                  lecturesCount={items.lecturesCount}
                  avatarsrc={items.avatarsrc}
                  instructorName={items.instructorName}
                  price={items.price}
                />
              </Grid>
            ) : (
              index < (isPhoneMode ? 3 : 6) && (
                <Grid item lg={4} md={4} sm={12} xs={12} key={index}>
                  <CourseCard
                    imgsrc={items.imgsrc}
                    chipsrc={items.chipsrc}
                    review={items.review}
                    title={items.title}
                    description={items.description}
                    accessTime={items.accessTime}
                    lecturesCount={items.lecturesCount}
                    avatarsrc={items.avatarsrc}
                    instructorName={items.instructorName}
                    price={items.price}
                  />
                </Grid>
              )
            )
          )}
        </Grid>
      </div>
      <div className="py-12 flex justify-center">
        <button
          className="rounded-3xl bg-red-700 md:bg-black text-white py-2 px-6"
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
