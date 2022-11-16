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
        // <div className="h-[60%] w-[90%] border-2 border-orange-500  bottom-0  z-[199999999] absolute">
        <div className="fixed  left-1/2 z-[1501] -translate-x-[50%] translate-y-1 bottom-1 bg-white pt-6 w-[800px]">
          <img
            src="/images/MarkCloseIcon.svg"
            className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 cursor-pointer"
            onClick={() => {
              IssuClose(false);
            }}
          ></img>
          <div className="text-3xl text-center font-bold underline ">
            MARKED ISSUES
          </div>
          <div className="pt-6 px-4 text-2xl text-center">
            {[...markedStickers].map((stickerid, index) => {
              if (stickerid == "1") {
                return (
                  <div key={index} className="text-black text-xl text-center">
                    {stickers[index].issue}
                  </div>
                );
              }
            })}
          </div>
          <div className="flex justify-center pt-12 itsok">
            <button
              className="bg-[#dc694a] rounded-3xl px-14 py-2 text-white font-bold text-2xl"
              onClick={() => {
                // setCounter(100);
                handleIsFeed(true);
                //Router.push("/feedback");
                calcResult();
              }}
            >
              SUBMIT
            </button>
          </div>
          {/* {()=>setOpenF(open)} */}
        </div>
      ) : (
        // </div>
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
