import React from "react";
import {ImgGrid} from "../components/ImgGrid";

import img1 from "../assets/images/art/blue gouache rose 1.png"
import img2 from "../assets/images/art/abstract acrylic painting 2.jpg"
import img3 from "../assets/images/art/bun coloured w mint green.png"
import img4 from "../assets/images/art/tulips with blue grid.jpg"
import img5 from "../assets/images/art/polymer clay crane.jpg"
import img6 from "../assets/images/art/abstract acrylic painting 1.jpg"

export const Art = () => {
  //TODO: rewrite this in a better way?
  let imgs = [
    {src:img1},
    {src:img2},
    {src:img3},
    {src:img4},
    {src:img5},
    {src:img6},
  ]

  return(<>
      <ImgGrid images={imgs}/>
    </>
  )
}