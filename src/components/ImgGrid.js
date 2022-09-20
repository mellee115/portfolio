import React from "react";

/**
 * ImgGrid is a simple image grid component
 * @param images an array of images to be displayed
 * @returns {JSX.Element}
 * @constructor */
export const ImgGrid = ({images}) => {
  return (
    <div className='imgGrid'>
      {images.map((image, key) =>
        <img key={key} className='imgGrid__img' src={image.src} alt={''}/>
      )}
    </div>
  )
}