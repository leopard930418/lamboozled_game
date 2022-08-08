import React from "react";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Router from "next/router";
export default function Toolbox() {
  return (

  <div className=" bg-background w-full h-screen bg-no-repeat bg-cover">
      <div className="text-center cursor-pointer " onClick={()=>{Router.push('/')}}>AAAAAAAL</div>
      <div className="p-3 w-32 h-19 text-center cursor-pointer  border-4 border-black ">
          <span className="font-bold text-3xl "> BACK</span>  
      </div>
      <div className="w-32  grid grid-cols-2 cursor-pointer border-4 border-black ">
          
          <Avatar className="m-2 " alt="Rem-y Sharp" src="/images/sticker_allcap.svg" variant="square"/>
          <Avatar className="m-2 " alt="Rem-y Sharp" src="/images/sticker_punctuation.svg" variant="square"/>
          <Avatar className="m-2 " alt="Rem-y Sharp" src="/images/sticker unverified-no existing social media.svg" variant="square"/>
          <Avatar className="m-2 " alt="Rem-y Sharp" src="/images/sticker unlisted author.svg" variant="square"/>
          <Avatar className="m-2 " alt="Rem-y Sharp" src="/images/sticker suspocious domain.svg" variant="square"/>
          <Avatar className="m-2 " alt="Rem-y Sharp" src="/images/sticker satarical web.svg" variant="square"/>
          <Avatar className="m-2 " alt="Rem-y Sharp" src="/images/sticker photoshopped.svg" variant="square"/>
          
      </div>
      <div className="bg-backgroundhelp w-32 h-20 text-center cursor-pointer left-0 border-4 border-black object-cover">
        
      </div>
        
                       
            
      
     
          
      

       
      
      
      
    </div>
  
  );
}