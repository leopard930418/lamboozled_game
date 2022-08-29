//Alex created
import React from "react";
const VerticalProgress = ({ value = 50 }) => {

  return (
    <div className="relative h-[638px] w-8 bg-black bg-opacity-25">
      <div
        className={`absolute ${value>50?"bg-black":"bg-[#f95555]"} bottom-0 left-0 w-full`}
        style={{ height: `${100 - value}%` }}
      ></div>
    </div>
  );
};

export default function MyTimer() {
  const [counter, setCounter] = React.useState(100);
  React.useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 3000);
    return () => clearInterval(timer);
  }, [counter]);
  // console.log("counter", counter);
  return (
    <>
      <VerticalProgress value={counter} />
    </>
  );
}
