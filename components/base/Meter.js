import React, { useState, useRef } from "react";

export default function MyImage({
  point = 50,
 
 }) {
  let color = '#000000';
  if(point<26){
    color='#db5f10';
  }else if(point < 50){
    color = '#e7b375';
  }else if(point < 76){
    color = '#d6d681';
  }else{
    color = '#93d58f';
  }
  const [percent, setPercent] = useState(Math.ceil(230/100*point));
  // console.log("meterwidht",percent);
  return (
    <>
    <div className={`fixed h-[28px] w-[240px] bg-white  translate-x-[115px] -translate-y-20`} style={{width:percent+'px'}}>

    </div>
    <div className={`fixed h-[23px]   translate-x-28 -translate-y-20`} style={{width:percent+'px', backgroundColor:color}}>

    </div>
    <div className="fixed bg-[url('/images/MarkMeter.png')] w-[230px] h-[23px] bg-cover bg-no-repeat  translate-x-28 -translate-y-20">

    </div>
    </>
  );
}





