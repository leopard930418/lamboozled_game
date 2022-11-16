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
import { useSelector, useDispatch } from "react-redux";
import {
  appendMarkedStickers,
  reduceMarkedStickers,
} from "../../store/reducers/gameSlice";
const styles = {
  position: "relative",
};
export const DragDropContainer = ({
  children,
  hideSourceOnDrag,
  stickers = [],
  unlock,
  isdraging = false,
  isIssueShow,
}) => {
  //alex added
  console.log(isIssueShow);
  const markedStickers = useSelector(
    (state) => state?.game?.markedStickers ?? "000000000000"
  );
  const dispatch = useDispatch();
  let stickersData = [];
  stickers.map((stickerId, index) => {
    if (index < 4) {
      stickersData.push({
        top: 106,
        left: 173 + index * 60,
        stickerId: stickerId,
      });
    }
  });
  // console.log("stickerData--", stickersData);
  // const [tipShowArr, setShowTipArr] = useState(
  //   stickers.map((stickerId, index) => ({
  //     stickerId: false,
  //   }))
  // );

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
        // console.log(left, "x-y", top);
        // if(item.id > 3) return undefined;
        // console.log("item.id", item.id);
        if (left > 410 && left < 460 && top > 100 && top < 120) {
          //validate question marking
          handleGuideOpen(boxes[item.id].stickerId);
          handleStickerId(boxes[item.id].stickerId);
          moveBox(item.id, item.left, item.top);
          // console.log("normal1");
        } else if (left > 80 && left < 500 && top > 150 && top < 506) {
          //validate correct marking
          // if (markedStickers.charAt(boxes[item.id].stickerId) == '0') {
            dispatch(appendMarkedStickers(boxes[item.id].stickerId));
          // }
          moveBox(item.id, left, top);
        } else {
          // console.log("normal2");
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
      <div ref={isdraging ? drop : undefined} style={styles}>
        {children}
        {Object.keys(boxes).map((key) => {
          const { left, top, stickerId } = boxes[key];
          return (
            <Box
              key={key}
              id={key}
              left={left}
              top={top}
              hideSourceOnDrag={hideSourceOnDrag}
            >
              <MyToolTip stickerId={stickerId} markedStickers={markedStickers} onscreen={true && !isIssueShow}>
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
        {isdraging && (
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
