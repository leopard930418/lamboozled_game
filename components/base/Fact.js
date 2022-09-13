import React, {useState} from "react";
import MyImage from "./MyImage";

import CustomImage from "../base/CustomImage";
import { Adv_DragDropContainer } from "../dragdrop/Adv_DragDropContainer";
import sources from "../../public/assets/sources.json";
import externals from "../../public/assets/external.json";
import HelpModal from "../helpModal";
export default function Fact({
  handleSceneP,
  hidesourceondrag,
  stickers,
  onscreen = true,

  onLoad = () => {},
  ...props
}) {
  const srcContent = sources;
  const [guideOpen, setGuideOpen] = useState(false);
  const handleGuideOpen = () => setGuideOpen(true);
  const handleGuideClose = () => setGuideOpen(false);  
  return (
    <div {...props}>
      <Adv_DragDropContainer
        hidesourceondrag={hidesourceondrag}
        stickers={stickers}
        onscreen ={onscreen}
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
            <div className="float-right w-[80px] h-full border-black border-l-2" onClick={handleGuideOpen}>
              <CustomImage src="/images/help.svg" className="h-8 mt-5 ml-5" />
            </div>
            <div className="float-right h-full w-[140px] border-black border-l-2"></div>
          </div>
        </div>
        <div className="h-[80%] w-full float-left  border-black border-t-2 border-l-2 text-center">
          <div
            className="text-[38px] float-left ml-[170px] font-bold"
            style={{ fontFamily: "Patrick Hand" }}
          >
            Fact-Checking Hub
          </div>
          <div className="w-full h-[80%] float-left ">
            <div className="w-[60%] h-[85%] shadow-[0_0px_6px_2px_rgba(0,0,0,0.25)] float-left mt-3 ml-6">
              <div
                className="text-[18px] float-left justify-center w-full border-b-2 border-black"
                style={{ fontFamily: "Patrick Hand" }}
              >
                Factual Reporting Score
              </div>
              <div
                className="w-full h-[80%] overflow-x-hidden"
                style={{ fontFamily: "Patrick Hand" }}
              >
                {srcContent.map((source, index) => {
                  let width = Math.floor(source.score * 1.2);
                  return (
                    <div className="w-full mt-4 float-left justify">
                      <div className="float-left  text-[#7B7F8C] w-3/6">
                        {source.name}
                      </div>
                      <div className="border-2 border-black w-[120px] h-4 float-left mt-1 ">
                        <div
                          className={`border-2 border-black h-4 -mt-[2px] -ml-[1px] bg-[#605F5B]`}
                          style={{width:width}}
                        ></div>
                      </div>

                      <span className="-mt-3">{source.score}%</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="w-[25%] h-[85%] shadow-[0_0px_6px_2px_rgba(0,0,0,0.25)] float-left mt-3 ml-6">
              <div
                className="text-[18px] float-left  justify-center w-full border-b-2 border-black"
                style={{ fontFamily: "Patrick Hand" }}
              >
                Satirical Sites
              </div>
              <div>
                <div
                  className="text-center mt-10 text-[#7B7F8C]"
                  style={{ fontFamily: "Patrick Hand" }}
                >
                  {srcContent.map((source, index) => {
                    if(source.satirical == true)
                    return(<div className="mt-3 pt-2 ">{source.name} </div>)
                  })}
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </Adv_DragDropContainer>
      <HelpModal
        open={guideOpen}
        handleGuideClose={handleGuideClose}
      />
    </div>
  );
}
