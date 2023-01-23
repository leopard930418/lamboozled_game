import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import { blue, lightBlue, red } from "@mui/material/colors";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
// import Typography from '@mui/material/Typography';
// import { BoltRounded } from "@mui/icons-material";
import stickers from "../../public/assets/sticker.json";
// import { faAlignCenter } from "@fortawesome/free-solid-svg-icons";

const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: "black",
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "white",
    border: "1px solid black",
    width: 128,
    color: "black",
    fontWeight: "bold",
    fontSize:"16px",
    lineHeight: "1.1",
    
  },
}));

export default function MyToolTip(props) {
  const stickerData = stickers;
  return (
    <>
      {props.markedStickers.charAt(props.stickerId) == "1" ? (
        <BootstrapTooltip
          open={props.onscreen}
          placement="top"
          title={props.title ? props.title : stickerData[props.stickerId].issue}
          className={`break-word`}
        >
          <div>{props.children}</div>
        </BootstrapTooltip>
      ) : (
        <div>{props.children}</div>
      )}
    </>
  );
}
