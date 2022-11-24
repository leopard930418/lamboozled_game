import React, { useState } from "react";
import MyImage from "./MyImage";

import CustomImage from "../base/CustomImage";
import { Adv_DragDropContainer } from "../dragdrop/Adv_DragDropContainer";
import Modal from "@mui/material/Modal";

export default function Social({
  handleSceneP,
  hidesourceondrag,
  stickers,
  onscreen = true,
  socialData,
  reviewMode,
  onLoad = () => {},
  ...props
}) {
   console.log("socialdata", socialData);
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
            <div
              className="float-right w-[80px] h-full border-black border-l-2"
              onClick={() => {
                handleGuideOpen();
              }}
            >
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
              {socialData.verifyIcon && (
                <MyImage
                  src="/images/GreenCheck.svg"
                  className="h-10 w-10 ml-28 mt-[-35px]"
                ></MyImage>
              )}
            </div>
            <div className="text-[18px]  w-[60%] h-full float-left mt-10">
              {socialData.registerDate ? (
                <div>Registered a year ago</div>
              ) : (
                // <div className="text-[#FC5757]">Registered a day ago</div>
                <div className="">Registered a day ago</div>
              )}
              {socialData.follower ? (
                <div className="mt-4">Followers: {socialData.fake_follows}</div>
              ) : (
                <div className="mt-4 text-[#FC5757]">
                  Followers: {socialData.nor_follows}
                </div>
              )}
            </div>
          </div>
          {socialData.post ? (
            <div className="h-[90%] w-[30%] float-left mt-7">
              <div className="w-[120px] h-[17px] ml-3 ">Posts</div>
              <div className="w-[120px] h-[17px] mt-4 ml-3 bg-[#EAEAEA]"></div>
              <div className="w-[100px] h-[17px] mt-4 ml-3 bg-[#EAEAEA]"></div>
              <div className="w-[60px] h-[17px] mt-4 ml-3 bg-[#EAEAEA]"></div>
              <div className="w-[90px] h-[17px] mt-4 ml-3 bg-[#EAEAEA]"></div>
              <div className="w-[100px] h-[17px] mt-4 ml-3 bg-[#EAEAEA]"></div>
            </div>
          ) : (
            // <div className="h-[90%] w-[30%] float-left mt-7 text-[#FC5757]">
            <div className="h-[90%] w-[30%] float-left mt-7 ">
              <div className="w-[120px] h-[17px] ml-3 ">No Posts</div>
            </div>
          )}
        </div>
      </Adv_DragDropContainer>
      <Modal
            open={guideOpen}
            onClose={handleGuideClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="z-[1501]"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#C4C4C4] p-4">
              <div className="flex flex-row space-x-8">
                <div className="rounded-[50%] p-2 w-12 h-12 text-center bg-white text-black text-3xl">
                  1
                </div>
                <div className="rounded-[50%] p-2 w-12 h-12 text-center bg-white text-black text-3xl">
                  2
                </div>
                <div className="rounded-[50%] p-2 w-12 h-12 text-center bg-white text-black text-3xl">
                  3
                </div>
              </div>

              <div className="pt-6 px-4">
                <div className="text-black text-3xl">
                  Show GIFs one by one, player can click from top left corner to
                  switch
                </div>
                <div className="text-black text-3xl">
                  1) Drag a sticker to mark an issue
                </div>
                <div className="text-black text-3xl">
                  2) Drag back to remove it
                </div>
                <div className="text-black text-3xl">
                  3) Drag a sticker to the (?) to learn more about it
                </div>
              </div>

              <div className="flex justify-end pt-4">
                <button
                  className="px-4 py-2 bg-white text-3xl"
                  onClick={handleGuideClose}
                >
                  Got it!
                </button>
              </div>
            </div>
          </Modal>
    </div>
  );
}
