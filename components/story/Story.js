// Alex created
import StoryDay1 from './StoryDay1'
import StoryDay2 from './StoryDay2'
import StoryDay3 from './StoryDay3'
import { useState } from 'react'

export default function Story() {
  const [theDay, setTheDay] = useState(1);
  const handleTheDay = () => {setTheDay(theDay + 1)};
  const [meter, setMeter] = useState(50);
  const handleMeter = (value) => setMeter(value);
  return (
      <div>
      {theDay==1 &&(
        <StoryDay1 meter = {meter} handelMeter={handleMeter} handleTheDay={handleTheDay} />
      )}
      {theDay==2 && (
        <StoryDay2 meter = {meter} handelMeter={handleMeter} handleTheDay={handleTheDay} />
      )}
      {theDay==3 && (
        <StoryDay3 meter = {meter} handelMeter={handleMeter} handleTheDay={handleTheDay} />
      )}
      
      </div>
    )
}
