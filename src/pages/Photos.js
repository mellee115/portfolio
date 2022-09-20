import React from "react";
import {ImgGrid} from "../components/ImgGrid";

import img1 from "../assets/images/photos/Sweet Dreams Noodle Soup Special.JPG"
import img2 from "../assets/images/photos/Sweet Dreams Noodle Soup Smile.JPG"
import img3 from "../assets/images/photos/Sweet Dreams Mango Bingsu Special.JPG"
import img4 from "../assets/images/photos/Sweet Dreams Overhead Noodle Soup Special.JPG"
import img5 from "../assets/images/photos/Macarons.JPG"
import img6 from "../assets/images/photos/Sweet Dreams Hot Drink Special.JPG"
import img7 from "../assets/images/photos/Sweet Dreams at night.JPG"
import img8 from "../assets/images/photos/Super Flower Blood Moon.JPG"
import img9 from "../assets/images/photos/Rock Dunder Tiny Mushrooms.JPG"

export const Photos = () => {
  //TODO: rewrite this in a better way?
 let imgs = [
   {src:img1},
   {src:img2},
   {src:img3},
   {src:img4},
   {src:img5},
   {src:img6},
   {src:img7},
   {src:img8},
   {src:img9},
 ]

  return(<>
    <ImgGrid images={imgs}/>
    </>
  )
}