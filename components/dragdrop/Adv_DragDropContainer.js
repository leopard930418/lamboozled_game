import update from "immutability-helper";
import { useCallback, useState } from "react";
import { useDrop } from "react-dnd";
import { Box } from "./Box.js";
import Tooltip from "@mui/material/Tooltip";
import { ItemTypes } from "./ItemTypes.js";
import InfoModal from "../InfoModal";
import MyToolTip from "../base/MyToolTip";
import CustomImage from "../base/CustomImage.js";
import MyImage from "../base/MyImage";
const styles = {
  position: "relative",
};
export const Adv_DragDropContainer = ({
  children,
  hidesourceondrag,
  stickers = [],
  handlemarkedstickers,
  unlock,
  sceneindex,
}) => {
  //alex added
  let stickersData = [];
  stickers.map((stickerId, index) => {
   

    if (stickerId == 4 || stickerId == 5 || stickerId == 7 || stickerId == 9 || stickerId == 11) {
      stickersData.push({
        top: 25,
        left: 490,
        stickerId: stickerId,
      });
    }
    if (stickerId == 6 || stickerId == 8 || stickerId == 10) {
      stickersData.push({
        top: 25,
        left: 430,
        stickerId: stickerId,
      });
    }
  });
  // console.log("stickerData--", stickersData);
  const [tipShowArr, setShowTipArr] = useState(
    stickers.map((stickerId, index) => ({
      stickerId: false,
    }))
  );

  // console.log(tipShowArr);
  const [markedStickers, setMarkedStickers] = useState([]);
  //alex ended
  const [boxes, setBoxes] = useState(stickersData);
  const moveBox = useCallback(
    (id, left, top) => {
      setBoxes(
        update(boxes, {
          [id]: {
            $merge: { left, top },
          },
        })
      );
    },
    [boxes, setBoxes]
  );
  const [, drop] = useDrop(
    () => ({
      accept: ItemTypes.BOX,
      drop(item, monitor) {
        const delta = monitor.getDifferenceFromInitialOffset();
        const left = Math.round(item.left + delta.x);
        const top = Math.round(item.top + delta.y);
        console.log(left, "x-y", top);
        let index = 0;
        //alex added
        let tempArr = [...markedStickers];
        if (left > 550 && left < 600 && top > 0 && top < 50) {
          //validate question marking
          handleGuideOpen(boxes[item.id].stickerId);
          handleStickerId(boxes[item.id].stickerId);
          moveBox(item.id, item.left, item.top);
        } else if (left > 0 && left < 600 && top > 80 && top < 350) {
          //validate correct marking
          if (markedStickers.indexOf(boxes[item.id].stickerId) < 0) {
            console.log("adv---", markedStickers);
            setMarkedStickers([...markedStickers, boxes[item.id].stickerId]);
            handlemarkedstickers([
              ...markedStickers,
              boxes[item.id].stickerId,
            ]);
          }
          moveBox(item.id, left, top);
        } else {
          moveBox(
            item.id,
            stickersData[item.id].left,
            stickersData[item.id].top
          );
          index = tempArr.indexOf(boxes[item.id].stickerId);
          tempArr.splice(index, 1);
          setMarkedStickers(tempArr);
          handlemarkedstickers(tempArr);
        }
        //alex added
        return undefined;
      },
    }),
    [moveBox]
  );
  // alex added
  const [guideOpen, setGuideOpen] = useState(false);
  const handleGuideOpen = () => setGuideOpen(true);
  const handleGuideClose = () => setGuideOpen(false);
  const [stickerInfoId, setStickerInfoId] = useState(0);
  const handleStickerId = (value) => setStickerInfoId(value);

  // alex ended
  return (
    <>
      <div ref={handlemarkedstickers ? drop : undefined} style={styles} className="w-full h-full">
        {children}
        {Object.keys(boxes).map((key) => {
          const { left, top, stickerId } = boxes[key];
          return (
            <Box
              key={key}
              id={key}
              left={left}
              top={top}
              hideSourceOnDrag={hidesourceondrag}
            >
              <MyToolTip stickerId={stickerId} markedStickers={markedStickers}>
                {unlock ? ( //unlock
                  <></>
                ) : (
                  <MyImage
                    src={`/images/Icon${stickerId + 1}.svg`}
                    className="h-8 w-8"
                    // onClick={() => {
                    //   handleStickerId(stickerId);
                    //   handleGuideOpen();
                    // }}
                  />
                )}
              </MyToolTip>
            </Box>
          );
        })}
        {handlemarkedstickers && (
          <InfoModal
            guideOpen={guideOpen}
            stickerId={stickerInfoId}
            handleGuideClose={handleGuideClose}
          />
        )}
      </div>
    </>
  );
};
