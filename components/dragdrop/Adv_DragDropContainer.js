import update from "immutability-helper";
import { useCallback, useState } from "react";
import { useDrop } from "react-dnd";
import { Box_adv } from "./Box_adv";
import Tooltip from "@mui/material/Tooltip";
import { ItemTypes } from "./ItemTypes.js";
import InfoModal from "../InfoModal";
import MyToolTip from "../base/MyToolTip";
import CustomImage from "../base/CustomImage.js";
import MyImage from "../base/MyImage";
import { useSelector, useDispatch } from "react-redux";
import {
  appendMarkedStickers,
  reduceMarkedStickers,
} from "../../store/reducers/gameSlice";
const styles = {
  position: "relative",
};
export const Adv_DragDropContainer = ({
  children,
  hidesourceondrag,
  stickers = [],
  onscreen = true,
  reviewMode,
}) => {
  //alex added
  const markedStickers = useSelector(
    (state) => state?.game?.markedStickers ?? "000000000000"
  );
  const dispatch = useDispatch();
  let stickersData = [];
  stickers.map((stickerId, index) => {
    if (
      stickerId == 4 ||
      stickerId == 5 ||
      stickerId == 7 ||
      stickerId == 9 ||
      stickerId == 11
    ) {
      stickersData.push({
        top: 25,
        left: 515,
        stickerId: stickerId,
      });
    }
    if (stickerId == 6 || stickerId == 8 || stickerId == 10) {
      stickersData.push({
        top: 25,
        left: 455,
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
      accept: ItemTypes.BOX_ADV,
      drop(item, monitor) {
        const delta = monitor.getDifferenceFromInitialOffset();
        const left = Math.round(item.left + delta.x);
        const top = Math.round(item.top + delta.y);
        // console.log(left, "x-y", top);
        if(reviewMode) return undefined;
        // console.log("tempArr------------------", tempArr);
        if (left > 550 && left < 600 && top > 0 && top < 50) {
          //validate question marking
          // console.log("adv1");
          handleGuideOpen(boxes[item.id].stickerId);
          handleStickerId(boxes[item.id].stickerId);
          moveBox(item.id, item.left, item.top);
        } else if (left > 0 && left < 600 && top > 80 && top < 350) {
          //validate correct marking
          if (markedStickers.indexOf(boxes[item.id].stickerId) < 0) {
            dispatch(appendMarkedStickers(boxes[item.id].stickerId));
          }
          moveBox(item.id, left, top);
        } else {
          // console.log("adv2");
          moveBox(
            item.id,
            stickersData[item.id].left,
            stickersData[item.id].top
          );
          dispatch(reduceMarkedStickers(boxes[item.id].stickerId));
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
      <div ref={drop} style={styles} className="w-full h-full">
        {children}
        {Object.keys(boxes).map((key) => {
          const { left, top, stickerId } = boxes[key];
          
          return (
            <Box_adv
              key={key}
              id={key }
              left={left}
              top={top}
              hideSourceOnDrag={hidesourceondrag}
            >
              {reviewMode ? (
                <MyImage
                  src={`/images/Icon${stickerId + 1}.svg`}
                  className="h-8 w-8 -ml-4"
                  // onClick={() => {
                  //   handleStickerId(stickerId);
                  //   handleGuideOpen();
                  // }}
                />
              ) : (
                <MyToolTip
                  stickerId={stickerId}
                  markedStickers={markedStickers}
                  onscreen={onscreen}
                >
                  <MyImage
                    src={`/images/Icon${stickerId + 1}.svg`}
                    className="h-8 w-8"
                    // onClick={() => {
                    //   handleStickerId(stickerId);
                    //   handleGuideOpen();
                    // }}
                  />
                </MyToolTip>
              )}
            </Box_adv>
          );
        })}
        {/* {handlemarkedstickers && ( */}
        <InfoModal
          guideOpen={guideOpen}
          stickerId={stickerInfoId}
          handleGuideClose={handleGuideClose}
        />
        {/* )} */}
      </div>
    </>
  );
};
