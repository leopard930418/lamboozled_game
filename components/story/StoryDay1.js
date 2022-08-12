import { useState } from 'react'
import Day1 from '../Everyday/day1'
import FeedBack from '../basics/FeedBack'

export default function StoryDay1(meter, handleMeter,handleTheDay) {
    const [cntArt, setcntArt] = useState(2);
    const articlesId = [0,1];
    const [curArtIndex, setCurArtIndex] = useState(0);
    const handleCurArtIndex = () => setCurArtIndex(curArtIndex++);
    const [isFeedback, setIsFeedBack] = useState(false);
    const handleIsFeed = (value)=>setIsFeedBack(value);
    const [markedStickers, setMarkedStickers] = useState([]);
    const handleMarkedStickers = (sti_arr) => setMarkedStickers(sti_arr);
    // React.useEffect(() => {
    //   markedStickers.map((stickerId)=>{
        
    //   });
    // }, [markedStickers]);
    return (
        <>
            {!isFeedback ? (
                <div >
                    <Day1 curArtIndex = {articlesId[curArtIndex]} meter={meter} handleIsFeed={handleIsFeed} handleMarked = {handleMarkedStickers}/>
                </div>
            ):(
                <div >
                    <FeedBack curArtIndex = {articlesId[curArtIndex]} meter={meter} handleIsFeed={handleIsFeed} handleCurArtIndex={handleCurArtIndex} />
                </div>
            )}
        </>

    )
  }
  