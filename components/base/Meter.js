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
  const [percent, setPercent] = useState(Math.ceil(280/100*point));
  // console.log("meterwidht",percent);
  return (
    <>
    <div className={`fixed h-[30px] w-[280px] bg-white -translate-y-20 translate-x-20`} style={{width:percent+'px'}}>

    </div>
    <div className={`fixed h-[24px]  -translate-y-20 translate-x-20`} style={{width:percent+'px', backgroundColor:color}}>

    </div>
    <div className="fixed bg-[url('/images/MarkMeter.png')] w-[280px] h-[28px] bg-cover bg-no-repeat -translate-y-[5.1rem] translate-x-20">

    </div>
    </>
  );
}





