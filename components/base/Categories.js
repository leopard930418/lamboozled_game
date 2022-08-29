import React from "react";
import MyImage from "./MyImage";
import { useSelector } from "react-redux";
export default function Categories({
  src = "",
  title = "",
  alt = "",
  handleScene,
  onLoad = () => {},
  ...props
}) {
  const theDay = useSelector((state) => state?.game?.theDay ?? 1);
  return (
    <div className="w-full h-full" {...props}>
      <MyImage
        src="/images/SearchBar.svg"
        className="w-[520px] h-[35px] ml-[53px] mt-[40px] float-left justify-between"
      >
        <span className="ml-[20px] mt-[5px] float-left text-[#4F4F4F] ">
          Click the bar to begin your search
        </span>
        <MyImage
          src="/images/SearchIcon.svg"
          className="float-right w-[29px] h-[27px] mr-[9px] mt-[3px]"
        />
      </MyImage>
      <div className="float-left w-full justify-center">
        <div className="w-9/12 shadow-[0_0px_6px_2px_rgba(0,0,0,0.25)] p-2 flex flex-col space-y-4 ml-[80px] mt-[25px]">
          <div className="text-black text-lg">
            Contextual Clue - Analysis of News Source
          </div>
          <div className="flex flex-row">
            <button
              className={`${
                theDay > 3 ? "show" : "hidden"
                // theDay > 0 ? "show" : "hidden"
              } bg-black rounded-full text-white text-lg px-4 py-0`}
              onClick={() => {
                handleScene(1);
              }}
            >
              Social Media Account
            </button>
            <button
              className={`${
                theDay > 4 ? "show" : "hidden"
                // theDay > 0 ? "show" : "hidden"
              } bg-black rounded-full text-white text-lg px-4 py-0 ml-6`}
              onClick={() => {
                handleScene(2);
              }}
            >
              Source Website
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${
          theDay > 5 ? "show" : "hidden"
          // theDay > 0 ? "show" : "hidden"
        } float-left w-full justify-center ml-20 mt-6`}
      >
        <div className="w-9/12 shadow-[0_0px_6px_2px_rgba(0,0,0,0.25)] p-2 flex flex-col space-y-4">
          <div className="text-black text-lg">
            External Clue - Analysis of External Information
          </div>
          <div className=" float-left">
            <button
              className={`bg-black rounded-full text-white text-lg px-4 py-0 float-left`}
              onClick={() => {
                handleScene(3);
              }}
            >
              Fact-Checking Hub
            </button>
            <button
              className={`bg-black rounded-full text-white text-lg px-4 py-0 ml-6`}
              onClick={() => {
                handleScene(4);
              }}
            >
              Reverse Image Search
            </button>
            <button
              className={`bg-black rounded-full text-white text-lg px-4 py-0 ml-0 mt-6`}
              onClick={() => {
                handleScene(5);
              }}
            >
              Lateral Reading
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
