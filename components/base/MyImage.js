import React from "react";

export default function MyImage({
  src = "",
  title = "",
  alt = "",
  // width = "",
  onLoad = () => {},
  ...props
}) {
  return (
    <div
    style={{backgroundImage: `url(${src})`,
            backgroundSize:`cover`,}}
    className= "bg-no-repeat bg-center bg-cover"
      onLoad={(e) => onLoad(e)}
      {...props}
    />
    
  );
}
