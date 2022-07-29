import { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import CustomImage from "../base/CustomImage";
import BlogCard from "../card/BlogCard";
import BlogSmallCard from "../card/BlogSmallCard";
import LastestNews from "../History/LastestNews";

export default function BlogMain() {
  const [buttonActive, setButtonActive] = useState();
  const clickTab = (num) => {
    setButtonActive(num);
  };
  const isPhoneMode = useMediaQuery("(max-width:600px)");

  return (
    <>
      <div className="w-full h-full pt-20">
        <CustomImage
          src={`/images/BlogHeader${isPhoneMode ? "M" : ""}.svg`}
          className="w-full"
        />
      </div>
      <div className="w-full h-full p-4 md:p-20 flex flex-col">
        <div className="text-2xl md:text-4xl text-[#030303] font-bold py-8 px-4">
          Freatured Blog Posts
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/3">
            <BlogCard
              imgsrc="/images/BlogImage1.svg"
              title="What Are Sun Salutations? Start Your Day Right..."
              description="It’s a simple question that we get asked a lot as yoga instructors.What is a Sun Salutation and why is it important?"
              createDate="April 7, 2021"
              duration="10 min read"
            />
          </div>
          <div className="w-full md:w-1/3">
            <BlogCard
              imgsrc="/images/BlogImage2.svg"
              title="What Causes Pigmentation and Dull Skin"
              description="First things first, pigmentation is very normal, and you shouldn’t be sad to have it, because just like wrinkles, pigmentation can also be a sign of ageing,"
              createDate="April 15, 2021"
              duration="10 min read"
            />
          </div>
          <div className="w-full md:w-1/3 flex flex-col">
            <BlogSmallCard
              imgsrc="/images/BlogImage3.svg"
              title="10 Things You Should Know Before You....."
              createDate="April 15, 2021"
              duration="10 min read"
            />
            <BlogSmallCard
              imgsrc="/images/BlogImage3.svg"
              title="10 Things You Should Know Before You....."
              createDate="April 15, 2021"
              duration="10 min read"
            />
            <BlogSmallCard
              imgsrc="/images/BlogImage3.svg"
              title="10 Things You Should Know Before You....."
              createDate="April 15, 2021"
              duration="10 min read"
            />
          </div>
        </div>
      </div>
      <LastestNews />
      <div className="bg-[#D1222A] h-full">
        <div className="flex flex-col-reverse md:flex-row-reverse justify-center">
          <div className="w-full md:w-1/3 justify-center md:justify-start">
            <CustomImage src="/images/BlogImage4.svg" />
          </div>
          <div className="w-full md:w-2/3 flex items-center justify-center">
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start pt-10 md:pt-0">
              <div className="text-base pb-4 text-[#F9AA1B] text-center md:text-left font-bold">
                OUR BLOG
              </div>
              <div className="text-2xl md:text-4xl pb-4 text-white text-center md:text-left font-bold">
                Subscribr Our Newsletter
              </div>
              <div className="text-base md:text-2xl text-[#F2F2F2] text-center md:text-left pr-2 md:pr-8">
                Our goal is top at the heart of creative services industry as a
                digital creator. In has a after comment.
              </div>
              <div className="w-full py-8 pl-4 md:pl-0 flex justify-center space-x-4">
                <div className="w-2/3 ">
                  <input
                    placeholder="Enter your email address"
                    className="w-full bg-white rounded-md py-2 px-4"
                  ></input>
                </div>
                <div className="w-1/3">
                  <button
                    className={`rounded-md bg-[#F9AA1B] text-white py-2 px-4`}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
