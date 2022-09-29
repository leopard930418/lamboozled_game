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
      <div className="flex w-full justify-center pt-16 ">
        <div className="w-5/12 space-y-4 pl-5">
          <MyImage
            src="/images/BossFace1.svg"
            className="w-[230px] h-[137px]"
          ></MyImage>
          <div>
            “I put my handsome face here to give you support. I believe you can
            figure out how to use the computer by yourself.”
          </div>
        </div>
        <div className="w-6/12  p-2  flex ">
          <div className="space-y-6 ml-8">
            <button
              className={` bg-black rounded-full text-white text-lg px-4 py-0`}
              onClick={() => {
                handleScene(1);
              }}
            >
              Check Social Media Account
            </button>
            <button
              className={` bg-black rounded-full text-white text-lg px-4 py-0 `}
              onClick={() => {
                handleScene(2);
              }}
            >
              Check Source Website
            </button>
            <button
              className={`bg-black rounded-full text-white text-lg px-4 py-0 `}
              onClick={() => {
                handleScene(3);
              }}
            >
              Go To Fact-Checking Hub
            </button>
            <button
              className={`bg-black rounded-full text-white text-lg px-4 py-0 `}
              onClick={() => {
                handleScene(4);
              }}
            >
              Do Reverse Image Search
            </button>
            <button
              className={`bg-black rounded-full text-white text-lg px-4 py-0 `}
              onClick={() => {
                handleScene(5);
              }}
            >
              Check Other Reports
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
                                   