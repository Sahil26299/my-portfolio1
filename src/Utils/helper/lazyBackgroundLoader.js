import React, { useState, useEffect } from "react";

export const LazyImage = ({
  src,
  placeholder,
  children,
  enableGradient = true,
  isBackroundImage = true,
  ...props
}) => {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    const imageLoader = new Image();
    imageLoader.src = src;

    imageLoader.onload = () => {
      setTimeout(() => {
        setImageSrc(src);
      }, 500);
    };
  }, [src]);

  if (isBackroundImage) {
    return (
      <div
        {...props}
        style={{
          backgroundImage: enableGradient
            ? `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.9)), url(${
                imageSrc || placeholder
              })`
            : `url(${imageSrc || placeholder})`,
        }}
      >
        {children}
      </div>
    );
  }
  return <img src={imageSrc || placeholder} alt="" />;
};
