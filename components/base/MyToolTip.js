import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import { blue, lightBlue, red } from "@mui/material/colors";
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { BoltRounded } from "@mui/icons-material";
import stickers from "../../public/assets/sticker.json";
import { faAlignCenter } from "@fortawesome/free-solid-svg-icons";


const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: 'red',
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'white',
    border: '1px solid red',
     width:128,
    color: 'red',
    fontWeight:'bold',
    
  },
}));

export default function MyToolTip(props) {
  const stickerData = stickers;
//  console.log(props);
  return (
    <>
       <BootstrapTooltip placement='top' title={props.title ? props.title : stickerData[props.stickerId].issue}
        className={`break-word`}
      >
        <div>
        {props.children}  
        </div>
      </BootstrapTooltip>
      
    </>
  );
}

