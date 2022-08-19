import React from "react";
import MyImage from "./MyImage";

import CustomImage from "../base/CustomImage";
import { Adv_DragDropContainer } from "../dragdrop/Adv_DragDropContainer";

export default function Source({
  handleSceneP,
  hidesourceondrag,
  stickers,
  handlemarkedstickers,
  unlock = true,
  markedstickers,
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
        markedstickers={markedstickers}
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
        {/* <div className="h-[80%] w-full float-left  border-black border-t-2 border-l-2 text-center">
        <MyImage
          src="/images/SearchBar.svg"
          className="w-[520px] h-[35px] ml-[53px] float-left mt-[30px] justify-between"
        >
          <span className="ml-[20px] mt-[5px] float-left text-[#4F4F4F] ">
            https://www. + correct_url/wrong_url based on answer
          </span>
        </MyImage>
        <div className="text-[38px] float-left ml-[170px]" style={{fontFamily:"Patrick Hand",}}>
            The Fluffington Post   
        </div>
        <div className="w-full h-[60%] float-left">
            <div className="float-left ml-14">
                <MyImage
                    src="/images/contentImage1.svg"
                    className="w-32 h-20"
                />
                <div className="w-[120px] h-[17px] mt-4 bg-[#EAEAEA]">

                </div>
                <div className="w-[100px] h-[17px] mt-4 bg-[#EAEAEA]">

                </div>
            </div>
            <div className="float-left ml-14">
                <MyImage
                    src="/images/contentImage1.svg"
                    className="w-32 h-20"
                />
                <div className="w-[120px] h-[17px] mt-4 bg-[#EAEAEA]">

                </div>
                <div className="w-[100px] h-[17px] mt-4 bg-[#EAEAEA]">

                </div>
            </div>
            <div className="float-left ml-14">
                <MyImage
                    src="/images/contentImage1.svg"
                    className="w-32 h-20"
                />
                <div className="w-[120px] h-[17px] mt-4 bg-[#EAEAEA]">

                </div>
                <div className="w-[100px] h-[17px] mt-4 bg-[#EAEAEA]">

                </div>
            </div>
        </div>

      </div> */}
        <div className="h-[80%] w-full float-left  border-black border-t-2 border-l-2 text-center">
          <MyImage
            src="/images/Error404.svg"
            className="w-[334px] h-[191px] mt-6 ml-36"
          />
          <div className="text-center text-[32px] mt-4 font-bold">
            PAGE NOT FOUND
          </div>
        </div>
      </Adv_DragDropContainer>
    </div>
  );
}
