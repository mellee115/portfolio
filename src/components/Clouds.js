import React from "react";

import cloud1 from "../assets/images/cloud 1.svg"
import cloud2 from "../assets/images/cloud 2.svg"
import cloud3 from "../assets/images/cloud 3.svg"

export const Clouds = () =>{
  return(
    <div className='clouds'>
      <img className='cloud1' src={cloud1} alt={''}/>
      <img className='cloud2' src={cloud2} alt={''}/>
      <img className='cloud3' src={cloud3} alt={''}/>
      <img className='cloud4' src={cloud2} alt={''}/>
    </div>
  );
}