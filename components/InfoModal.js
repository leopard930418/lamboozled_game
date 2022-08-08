import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import stickers from "../public/assets/sticker.json";

export default function InfoModal(props) {
  
    const stickerData = stickers;
    const id = Number(props.stickerId) - 1;
    console.log("dragdropcontainer:"+ props.stickerId);
    console.log("infomodal:" + id);
    // console.log("stickerId ; " + id);
    return (
        <Modal
        open={props.guideOpen}
        onClose={props.handleGuideClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#C4C4C4] p-4">
            
            
            {}
            <div className="flex flex-row justify-center">
              <img src={`/images/Icon${props.stickerId}.svg`} className="h-8" />
            </div>
            
            
            
            <div className="pt-6 px-4">
              <div className="text-black text-3xl">
               {id > 0 ? (stickerData[id].description) : (stickerData[0].description)}
              </div>
            </div>
           
           
            <div className="flex justify-end pt-4">
                <button
                className="px-4 py-2 bg-white text-3xl"
                onClick={props.handleGuideClose}
                >
                Got it!
                </button>
            </div>
          </div>
      </Modal>
    );
}
