import React, { useState, useRef } from "react";

export default function MyImage({
  point = 50,
 
 }) {

  const [percent, setPercent] = useState(Math.ceil(280/100*point));
  console.log("meterwidht",percent);
  return (
    <>
    
    <div className={`fixed h-[27px] bg-cover bg-no-repeat bg-red-700 -translate-y-20 translate-x-20`} style={{width:percent+'px'}}>

    </div>
    <div className="fixed bg-[url('/images/MarkMeter.png')] w-[280px] h-[27px] bg-cover bg-no-repeat -translate-y-20 translate-x-20">

    </div>
    </>
  );
}





