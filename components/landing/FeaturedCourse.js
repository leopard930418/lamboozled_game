import React, { useState } from "react";
import CourseCard from "../card/CourseCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function FeaturedCourse() {
  const isPhoneMode = useMediaQuery("(max-width:600px)");
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: isPhoneMode ? 1 : 4,
    swipeToSlide: true,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };
  const [showAll, setShowAll] = useState(false);
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
        <div className="text-2xl md:text-4xl pb-10 text-black text-center md:text-left font-bold">
          Featured Courses
        </div>
      </div>
      <div className="">
        {isPhoneMode ? (
          <div className="space-y-4">
            {courseData.map((items, index) =>
              showAll ? (
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
                  key={index}
                />
              ) : (
                index < 3 && (
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
                    key={index}
                  />
                )
              )
            )}
           
            <div className="flex justify-center">
              <button
                className="rounded-3xl bg-red-700 text-white py-2 px-4"
                onClick={() => {
                  setShowAll(true);
                }}
              >
                View All
              </button>
            </div>
          </div>
        ) : (
          <Slider {...settings}>
            {courseData.map((items, index) => (
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
                key={index}
              />
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
}
