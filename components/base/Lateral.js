import React from "react";
import MyImage from "./MyImage";

import CustomImage from "../base/CustomImage";
import { Adv_DragDropContainer } from "../dragdrop/Adv_DragDropContainer";

export default function Lateral({
  handleSceneP,
  hidesourceondrag,
  stickers,
  handlemarkedstickers,
  unlock = true,
  sceneindex,
  onLoad = () => {},
  ...props
}) {
  return (
    <div {...props}>
      <Adv_DragDropContainer
        hidesourceondrag={hidesourceondrag}
        stickers={stickers}
        handlemarkedstickers={handlemarkedstickers}
        unlock={unlock}
        sceneindex={sceneindex}
      >
        <div className="h-[20%] w-full float-left ">
          <div className="h-full w-[50%] float-left">
            <button
              className="bg-black rounded-full text-white text-lg px-4 py-0 float-right mt-5"
              onClick={() => {
                handleSceneP();
              }}
            >
              Back
            </button>
          </div>
          <div className="h-full w-[50%] float-left">
            <div className="float-right w-[80px] h-full border-black border-l-2">
              <CustomImage src="/images/help.svg" className="h-8 mt-5 ml-5" />
            </div>
            <div className="float-right h-full w-[140px] border-black border-l-2"></div>
          </div>
        </div>
        <div className="h-[80%] w-full float-left  border-black border-t-2 border-l-2">
          <div className="h-[33%] w-[100%] border-white border-2">
            <MyImage
              src="images/Moogle-logo.svg"
              className="w-[186px] h-[33px] mt-6 ml-4 float-left"
            />
            <MyImage
              src="/images/SearchBar.svg"
              className="w-[350px] h-[35px] ml-[53px] float-left mt-[25px] justify-between rounded-full"
            >
              <span className="ml-[20px] mt-[5px] float-left text-[#4F4F4F] ">
                TitleTitleTitleTitleTitleTitle
              </span>
              <MyImage
                src="/images/SearchIcon.svg"
                className="float-right w-[29px] h-[27px] mr-[9px] mt-[3px]"
              />
            </MyImage>
          </div>
          {/* <div className="h-[33%] w-[100%] border-white border-2">
          <MyImage className="w-20 h-20 float-left  mt-1  mr-10" />
          <div className="text-[18px] font-bold mt-1">
            Alt Title Alt Title Alt Title Alt Title Alt Title Alt Title Alt
            Title Alt Title Alt Source
          </div>
          <div className="ml-10 mt-1">Alt Source</div>
        </div>
        <div className="h-[33%] w-[100%] border-white border-2">
          <MyImage className="w-20 h-20 float-left mt-1 mr-10" />
          <div className="text-[18px] font-bold mt-1">
            Alt Title Alt Title Alt Title Alt Title Alt Title Alt Title Alt
            Title Alt Title Alt Source
          </div>
          <div className="ml-10 mt-1">Alt Source</div>
        </div> */}
          <div className="h-[66%] w-[100%] border-white border-2 text-center">
            <div className="mt-10 text-[#4F4F4F]">No Relevant Result</div>
          </div>
        </div>
      </Adv_DragDropContainer>
    </div>
  );
}
