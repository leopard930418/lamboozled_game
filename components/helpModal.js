import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import stickers from "../public/assets/sticker.json";

export default function HelpModal({open, handleGuideClose}) {
    console.log(open, handleGuideClose);
  return (
    <Modal
      open={open}
      onClose={handleGuideClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="z-[1501]"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#C4C4C4] p-4">
        <div className="flex flex-row space-x-8">
          <div className="rounded-[50%] p-2 w-12 h-12 text-center bg-white text-black text-3xl">
            1
          </div>
          <div className="rounded-[50%] p-2 w-12 h-12 text-center bg-white text-black text-3xl">
            2
          </div>
          <div className="rounded-[50%] p-2 w-12 h-12 text-center bg-white text-black text-3xl">
            3
          </div>
        </div>

        <div className="pt-6 px-4">
          <div className="text-black text-3xl">
            Show GIFs one by one, player can click from top left corner to
            switch
          </div>
          <div className="text-black text-3xl">
            1) Drag a sticker to mark an issue
          </div>
          <div className="text-black text-3xl">2) Drag back to remove it</div>
          <div className="text-black text-3xl">
            3) Drag a sticker to the (?) to learn more about it
          </div>
        </div>

        <div className="flex justify-end pt-4">
          <button
            className="px-4 py-2 bg-white text-3xl"
            onClick={handleGuideClose}
          >
            Got it!
          </button>
        </div>
      </div>
    </Modal>
  );
}
