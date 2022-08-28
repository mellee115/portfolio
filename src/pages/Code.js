import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub, faReact, faSass} from "@fortawesome/free-brands-svg-icons";

export const Code = () =>{
  return(
    <div>
      <h2>This portfolio is built with the power of:</h2>
      <p>
        <FontAwesomeIcon className='fa-3x m-r-10' icon={faReact}/>
        <FontAwesomeIcon className='fa-3x m-r-10' icon={faSass}/>
      </p>
      <h2>Github projects:</h2>
      <p>
        <FontAwesomeIcon className='fa-3x m-r-10' icon={faGithub}/>
      </p>
    </div>
  )
}