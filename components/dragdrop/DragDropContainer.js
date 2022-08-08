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
  // width: 300,
  // height: 300,
  // border: '1px solid black',
  position: "relative",
};
export const DragDropContainer = ({ children, hideSourceOnDrag }) => {
  const [boxes, setBoxes] = useState({
    1: {
      top: 5,
      left: 50 + 0 * 70,
      stickerId: 1,
    },
    2: {
      top: 5,
      left: 50 + 1 * 70,
      stickerId: 2,
    },
    3: {
      top: 5,
      left: 50 + 2 * 70,
      stickerId: 3,
    },
    4: {
      top: 5,
      left: 50 + 3 * 70,
      stickerId: 4,
    },
  });
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
        moveBox(item.id, left, top);
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
      <div ref={drop} style={styles}>
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
              <MyToolTip stickerId={stickerId}>
                <MyImage 
                    src={`/images/Icon${stickerId}.svg`}
                    className="h-8 w-8"
                    onClick={() => {
                      handleStickerId(stickerId);
                      handleGuideOpen();
                    }}
                />
              </MyToolTip>
            </Box>
          );
        })}
        <InfoModal
          guideOpen={guideOpen}
          stickerId={stickerInfoId}
          handleGuideClose={handleGuideClose}
        />
      </div>
    </>
  );
};
