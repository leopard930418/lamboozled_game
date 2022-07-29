import { useState } from "react";
import { Checkbox, FormControlLabel, FormGroup, Grid } from "@mui/material";
import CustomImage from "../base/CustomImage";
import useMediaQuery from "@mui/material/useMediaQuery";
import TeacherCard from "../card/TeacherCard";
import NewsAndResCard from "../card/NewsAndResCard";

export default function LastestNews() {
  const isPhoneMode = useMediaQuery("(max-width:600px)");
  return (
    <>
      <div className="flex flex-col p-2 md:p-20">
        <div className="w-full flex flex-col space-y-4">
          <div className="text-2xl md:text-4xl pb-4 text-[#030303] text-center  font-bold pt-10">
            Lastest News and Resources
          </div>
          <div className="text-base pb-4 text-[#5E5E5E] text-center  ">
            See the Developments that have occurred to Skilliness in the world
          </div>
          <div className="flex flex-col md:flex-row space-x-0 md:space-x-8">
            <div className="w-full md:w-5/12 flex flex-col ">
              <div>
                <CustomImage src="/images/HistoryImage5.svg" className="w-full"/>
              </div>
              <div className="py-8">
                <button className="rounded-3xl bg-red-700 text-white py-2 px-6">
                  NEWS
                </button>
              </div>
              <div className="w-full flex flex-col space-y-4">
                <div className="text-2xl md:text-3xl pb-4 text-[#030303] text-left font-bold pt-10">
                  Class adds $30 million to its balance sheet for a
                  Zoom-friendly edtech solution
                </div>
                <div className="text-lg md:text-xl pb-4 text-[#5E5E5E] text-left ">
                  Class, launched less than a year ago by Blackboard co-founder
                  Michale Chaasen, integrates exclusively...{" "}
                </div>

                <div className="py-4 flex justify-start">
                  <button className="border-b border-black text-[#030303]">
                    Read more
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full md:w-7/12 flex flex-col">
                <NewsAndResCard imgsrc="/images/HistoryImage6.svg" btnstatus="PRESS RELEASE"/>
                <NewsAndResCard imgsrc="/images/HistoryImage7.svg" btnstatus="NEWS"/>
                <NewsAndResCard imgsrc="/images/HistoryImage8.svg" btnstatus="NEWS"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
