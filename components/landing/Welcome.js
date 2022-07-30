import React from "react";
import CustomImage from "../base/CustomImage";
export default function Welcome() {
  return (
    <>
      <div className=" bg-background w-full h-screen bg-no-repeat bg-cover">
        <div className="relative translate-x-20 w-5/12">
          <img
            src="/images/tabletlayout.svg"
            className="absolute w-full h-screen top-0 left-0 -z-10 object-fill"
          ></img>
          <div className="w-1/2 flex flex-row pt-32 justify-center">
            <div className="w-1/3 flex flex-row">
              <CustomImage src="/images/sticker1.svg" className="h-8" />
              <CustomImage src="/images/sticker2.svg" className="h-8" />
            </div>
            <div className="w-1/6">
              <CustomImage src="/images/help.svg" className="h-8" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
