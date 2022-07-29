import { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import Pagination from "@mui/material/Pagination";
import CustomImage from "../base/CustomImage";
import CourseCard from "../card/CourseCard";
import ColumnChart from "../base/ColumnChart";

export default function CourseMain() {
  const [buttonActive, setButtonActive] = useState();
  const clickTab = (num) => {
    setButtonActive(num);
  };
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
    <>
      <div className="w-full h-full pt-20">
        <CustomImage
          src={`/images/CourseHeader${isPhoneMode ? "M" : ""}.svg`}
          className="w-full"
        />
      </div>
      <ColumnChart />
      <div className="w-full h-full p-4 md:p-20 flex flex-col-reverse md:flex-row">
        <div className="w-full md:w-2/3">
          <div className=" flex flex-row flex-wrap items-center space-x-4 py-8">
            <button
              onClick={() => clickTab(0)}
              className={`flex flex-row rounded-3xl  px-4 py-2 space-x-4 ${
                buttonActive == 0 ? "bg-btncolor" : "bg-[#EAF0ED]"
              }`}
              style={{ display: "flex" }}
            >
              <div className="whitespace-nowrap text-black text-xl font-bold">
                Design & Development
              </div>
            </button>
            <button
              onClick={() => clickTab(1)}
              className={`flex flex-row rounded-3xl  px-4 py-2 space-x-4 ${
                buttonActive == 1 ? "bg-btncolor" : "bg-[#EAF0ED]"
              }`}
              style={{ display: "flex" }}
            >
              <div className="whitespace-nowrap text-black text-xl font-bold">
                Work & Ethics
              </div>
            </button>
            <button
              onClick={() => clickTab(2)}
              className={`flex flex-row rounded-3xl  px-4 py-2 space-x-4 ${
                buttonActive == 2 ? "bg-btncolor" : "bg-[#EAF0ED]"
              }`}
              style={{ display: "flex" }}
            >
              <div className="whitespace-nowrap text-black text-xl font-bold">
                Technology
              </div>
            </button>
            <button
              onClick={() => clickTab(3)}
              className={`flex flex-row rounded-3xl  px-4 py-2 space-x-4 ${
                buttonActive == 3 ? "bg-btncolor" : "bg-[#EAF0ED]"
              }`}
              style={{ display: "flex" }}
            >
              <div className="whitespace-nowrap text-black text-xl font-bold">
                Law
              </div>
            </button>
          </div>
          <div className="flex flex-col space-y-4">
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
                isHorizontal={isPhoneMode ? false : true}
                key={index}
              />
            ))}
          </div>
          <div className="flex justify-end py-4">
            <Pagination count={10} variant="outlined" color="primary" />
          </div>
        </div>
        <div className="w-full md:w-1/3 flex flex-col p-4 md:p-12">
          <div className="flex justify-center ">
            <CustomImage src="/images/CourseIcon1.svg"></CustomImage>
          </div>
          <div className="text-xl text-[#030303] text-center p-4 md:p-8">
            <span className="font-bold">10 Million</span> Students Learning
            around the world
          </div>
          <div className="flex justify-center ">
            <CustomImage src="/images/CourseIcon2.svg"></CustomImage>
          </div>
          <div className="text-xl text-[#030303] text-center p-4 md:p-8">
            Courses from
            <span className="font-bold">200 Universities and experts</span>
          </div>
          <div className="flex justify-center ">
            <CustomImage src="/images/CourseIcon3.svg"></CustomImage>
          </div>
          <div className="text-xl text-[#030303] text-center p-4 md:p-8">
            <span className="font-bold">80% Learners</span> already started the
            professional careers
          </div>
          <div className="rounded-lg bg-[#2E6D48] bg-opacity-10 p-8">
            <div className="text-2xl font-bold text-[#030303] pb-4">
              All Courses Include
            </div>
            <div className="flex flex-col space-y-4">
              <div className="flex flex-row items-center">
                <div>
                  <CustomImage src="/images/checkIcon.svg"></CustomImage>
                </div>
                <div className="text-[#030303] text-base md:text-xl pl-4 ">
                  100% online
                </div>
              </div>
              <div className="flex flex-row items-center">
                <div>
                  <CustomImage src="/images/checkIcon.svg"></CustomImage>
                </div>
                <div className="text-[#030303] text-base md:text-xl pl-4">
                  Qualified Instructors
                </div>
              </div>
              <div className="flex flex-row items-center">
                <div>
                  <CustomImage src="/images/checkIcon.svg"></CustomImage>
                </div>
                <div className="text-[#030303] text-base md:text-xl pl-4">
                  Top Notch Course
                </div>
              </div>
              <div className="flex flex-row items-center">
                <div>
                  <CustomImage src="/images/checkIcon.svg"></CustomImage>
                </div>
                <div className="text-[#030303] text-base md:text-xl pl-4">
                  100% Refund Policy
                </div>
              </div>
              <div className="flex flex-row items-center">
                <div>
                  <CustomImage src="/images/checkIcon.svg"></CustomImage>
                </div>
                <div className="text-[#030303] text-base md:text-xl pl-4">
                  Guaranteed Job
                </div>
              </div>
            </div>
            {/* <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="100% online"
                className="text-[#030303]"
              />
            </FormGroup>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Qualified Instructors"
                className="text-[#030303]"
              />
            </FormGroup>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Top Notch Course"
                className="text-[#030303]"
              />
            </FormGroup>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="100% Refund Policy"
                className="text-[#030303]"
              />
            </FormGroup>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Guaranteed Job"
                className="text-[#030303]"
              />
            </FormGroup> */}
          </div>
        </div>
      </div>
    </>
  );
}
