import React from "react";
import MyImage from "./MyImage";

import CustomImage from "../base/CustomImage";
import { Adv_DragDropContainer } from "../dragdrop/Adv_DragDropContainer";

export default function Social({
  handleSceneP,
  hidesourceondrag,
  stickers,
  handlemarkedstickers,
  unlock = true,
  sceneindex,
  onLoad = () => {},
  ...props
}) {
  console.log("Social", stickers);
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
          <div className="h-[80%] w-[70%] float-left mt-7 border-black border-r-2">
            <div className="text-[24px] ml-8 w-full h-[20%]">
              Username / Source Name
            </div>
            <div className=" float-left w-[40%] h-full ">
              <MyImage
                src="/images/UnkownAvatar.svg"
                className="h-32 w-32 ml-6 mt-6"
              ></MyImage>
              <MyImage
                src="/images/GreenCheck.svg"
                className="h-10 w-10 ml-28 mt-[-35px]"
              ></MyImage>
            </div>
            <div className="text-[18px]  w-[60%] h-full float-left mt-10">
              <div>Registered a year ago</div>
              <div className="mt-4">Follows: 5231</div>
            </div>
          </div>
          <div className="h-[90%] w-[30%] float-left mt-7">Posts</div>
        </div>
      </Adv_DragDropContainer>
    </div>
  );
}
