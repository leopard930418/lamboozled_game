import React, { useState, useRef } from "react";

export default function MyImage({
  point = 50,
 
 }) {

  const [percent, setPercent] = useState(Math.ceil(280/100*point));
  console.log("meterwidht",percent);
  return (
    <>
    <div className={`fixed h-[30px] w-[280px] bg-white -translate-y-20 translate-x-20`} style={{width:percent+'px'}}>

    </div>
    <div className={`fixed h-[24px]  bg-[#c7d647] -translate-y-20 translate-x-20`} style={{width:percent+'px'}}>

    </div>
    <div className="fixed bg-[url('/images/MarkMeter.png')] w-[280px] h-[28px] bg-cover bg-no-repeat -translate-y-[5.1rem] translate-x-20">

    </div>
    </>
  );
}





