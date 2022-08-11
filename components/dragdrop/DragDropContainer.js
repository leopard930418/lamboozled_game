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
export const DragDropContainer = ({ children, hideSourceOnDrag, stickers=[], handleMarkedStickers }) => {
  let stickersData=stickers.map((stickerId, index)=>(
        {
        top:5,
        left:50 + index * 70,
        stickerId: stickerId,
        }
    ));
  const [markedStickers, setMarkedStickers]= useState([]);
  console.log(stickersData);
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

        let index = 0;
        moveBox(item.id, left, top);
        //alex added
        let tempArr = [...markedStickers];
        if(left > 0 && left < 400 && top > 60 && top < 400)//validate correct marking
        {
          console.log("marked ID:" +item.id);
          tempArr.push(item.id);
          handleMarkedStickers(tempArr);
          

        }else{
          if(left > 300 && left < 360 && top > 0 && top < 30)//validate question marking
          {
            
            //console.log();
            handleGuideOpen(boxes[item.id].stickerId);
            handleStickerId(boxes[item.id].stickerId)

          }
          console.log("left:"+left+"---"+"top:"+top);
          moveBox(item.id, stickersData[item.id].left, stickersData[item.id].top);
          index = tempArr.indexOf(item.id);
          delete tempArr[index];
        }
        tempArr.push(item.id);
        setMarkedStickers(tempArr);
        if(handleMarkedStickers){
          handleMarkedStickers(tempArr);  
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
      
      <div ref={handleMarkedStickers ? drop: undefined} style={styles}>
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
                    // onClick={() => {
                    //   handleStickerId(stickerId);
                    //   handleGuideOpen();
                    // }}
                />
              </MyToolTip>
            </Box>
          );
        })}
        {handleMarkedStickers&&(
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
