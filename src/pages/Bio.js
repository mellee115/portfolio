import React from "react";
import bioImg from "../assets/images/bio-colour.JPG";
import hello from "../assets/images/hello.png";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faGraduationCap} from "@fortawesome/free-solid-svg-icons";
import {Clouds} from "../components/Clouds";

export const Bio = () =>{
  return(
    <>
      <div className='bio'>
        <img className='bio-img' src={bioImg} alt=''/>
        <div className='bio-right'>
          <img className='bio-header' src={hello} alt={'Hello!!'}/>
          <div className='bio-info'>
            <p>I am a front-end <b>Software Developer</b>, an <b>Artist</b>, and a <b>Musician</b>.</p>
            <hr/>
            <p><FontAwesomeIcon className='fa-2x m-r-5' icon={faGraduationCap}/> Alumni of the University of Waterloo </p>
            <hr/>
            <p>. . .</p>
            <hr/>
            <p><a href='https://bit.ly/3caiDAo'>
              <FontAwesomeIcon className='fa-2x m-r-5' icon={faLinkedin}/>Learn more at my LinkedIn Profile
            </a></p>
          </div>
        </div>
      </div>
      <Clouds/>
    </>
  )
}