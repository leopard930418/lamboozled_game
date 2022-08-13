import { useState } from 'react'
import Day1_3 from '../basics/day1_3'
import FeedBack from '../basics/FeedBack'

export default function StoryDay3({meter = 50, handleMeter,handleTheDay}) {
    const [cntArt, setcntArt] = useState(3);
    const articlesId = [4,5,6];
    const [curArtIndex, setCurArtIndex] = useState(0);
    const handleCurArtIndex = () => {setCurArtIndex(curArtIndex+1);
                                        setMarkedStickers([]);};
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
                    <Day1_3     curArtIndex = {articlesId[curArtIndex]} 
                                meter={meter} 
                                handleIsFeed={handleIsFeed} 
                                handleMarked = {handleMarkedStickers}
                                unlockedStickers={[0,1,2,3]} />
                </div>
            ):(
                <div >
                    <FeedBack   curArtIndex = {articlesId[curArtIndex]} 
                                meter={meter} 
                                leftArts = {articlesId.length-Number(curArtIndex)-1} 
                                handleIsFeed={handleIsFeed} 
                                handleCurArtIndex={handleCurArtIndex} 
                                handleTheDay={handleTheDay}
                                markedStickers = {markedStickers}
                                handleMeter = {handleMeter}/>
                </div>
            )}
        </>

    )
  }
  