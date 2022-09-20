import React from "react";

export const ImgGrid = (props) => {
  return (
    <div className='imgGrid'>
      {props.images.map((image, key) =>
        <img key={key} className='imgGrid__img' src={image.src} alt={''}/>
      )}
    </div>
  )
}