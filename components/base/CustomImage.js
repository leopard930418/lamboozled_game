import React from "react";

export default function CustomImage({
  src = "",
  title = "",
  alt = "",
  // width = "",
  onLoad = () => {},
  ...props
}) {
  return (
    <img
      src={src ?? ""}
      alt={alt || title}
      onLoad={(e) => onLoad(e)}
      {...props}
      // style={{ width: `${width}`}}
    />
  );
}
