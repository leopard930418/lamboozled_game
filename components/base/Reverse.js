import React, {useState} from "react";
import MyImage from "./MyImage";

import CustomImage from "../base/CustomImage";
import { Adv_DragDropContainer } from "../dragdrop/Adv_DragDropContainer";
import externals from "../../public/assets/external.json";
import HelpModal from "../helpModal";
export default function Reverse({
  handleSceneP,
  hidesourceondrag,
  stickers,
  onscreen = true,
  curArtId,
  reviewMode,
  onLoad = () => {},
  ...props
}) {
  const extData = externals;
  const [guideOpen, setGuideOpen] = useState(false);
  const handleGuideOpen = () => setGuideOpen(true);
  const handleGuideClose = () => setGuideOpen(false);  
  return (
    <div {...props}>
      <Adv_DragDropContainer
        hidesourceondrag={hidesourceondrag}
        stickers={stickers}
        onscreen ={onscreen}
        reviewMode={reviewMode}
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
            <div className="float-right w-[80px] h-full border-black border-l-2"  onClick={handleGuideOpen}>
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
              src="/images/contentImage1.svg"
              className="w-32 h-20 float-left ml-5 mt-2"
            />
            <div className="text-[18px] font-bold text-center mt-3">
              Image Reverse Search
            </div>
            <div className="text-center mt-2">Image Size: 1170 * 720</div>
          </div>
          {extData.map((data, index) => {
            if (data.index == curArtId) {
              return (
                <>
                  <div className="h-[33%] w-[100%] border-white border-2">
                    <MyImage
                      src="/images/contentImage1.svg"
                      className="w-32 h-20 float-left ml-16 mt-2  mr-10"
                    />
                    <div className="text-[18px] font-bold mt-3">
                      {data.image_reverse_titles[0]}
                    </div>
                    <div className="ml-10 mt-2">{data.sources[0]}</div>
                  </div>
                  <div className="h-[33%] w-[100%] border-white border-2">
                    <MyImage
                      src="/images/contentImage1.svg"
                      className="w-32 h-20 float-left ml-16 mt-2 mr-10"
                    />
                    <div className="text-[18px] font-bold mt-3">
                    {data.image_reverse_titles[1]}
                    </div>
                    <div className="ml-10 mt-2">{data.sources[1]}</div>
                  </div>
                </>
              );
            }
          })}
        </div>
      </Adv_DragDropContainer>
      <HelpModal
        open={guideOpen}
        handleGuideClose={handleGuideClose}
      />
    </div>
  );
}
