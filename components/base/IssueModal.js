import React, { useState } from "react";
import stickers from "../../public/assets/sticker.json";
import Router from "next/router";

export default function CustomImage({
  open = "",
  IssuClose = "",
  markedStickers,
  setIsFeedback,
  ...props
}) {
  const [openF, setOpenF] = useState(open);

  return (
    <>
      {open ? (
        <div className="fixed  left-1/2 z-50 -translate-x-1/2 translate-y-1p bottom-0 bg-gradient-to-b from-[#FF7575] to-[#FFD0D0] pt-6 w-[800px]">
          <img
            src="/images/MarkCloseIcon.svg"
            className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 cursor-pointer"
            onClick={() => {
              IssuClose();
            }}
          ></img>
          <div className="text-3xl text-center font-bold underline ">
            MARKED ISSUES
          </div>
          <div className="pt-6 px-4 text-2xl text-center">
            {markedStickers.map((stickerid, index) => {
              if (stickerid > -1) {
                return (
                  <div key={index} classNameo="text-black text-xl text-center">
                    {stickers[stickerid].issue}
                  </div>
                );
              }
            })}
          </div>
          <div className="flex justify-center pt-12 itsok">
            <button
              className="bg-black rounded-3xl px-14 py-2 text-white font-bold text-2xl"
              onClick={() => {
                // setCounter(100);
                setIsFeedback(true);
                //Router.push("/feedback");
              }}
            >
              SUBMIT
            </button>
          </div>
          {/* {()=>setOpenF(open)} */}
        </div>
      ) : (
        <>
          {/* <button
            className="bg-black rounded-3xl px-14 py-2 text-white font-bold text-2xl"
            onClick={() => {
              // setCounter(100);
              setIsFeedback(true);
              Router.push("/submitted");
            }}
          >
            SUBMIT
          </button> */}
        </>
      )}
    </>
  );
}
