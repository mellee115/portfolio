import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faReact} from "@fortawesome/free-brands-svg-icons";

import {Nav} from "./components/Nav";
import {Hero} from "./components/Hero";
//import {Photos} from "./pages/Photos";

import '../src/scss/main.scss';
import {Music} from "./pages/Music";
import {Code} from "./pages/Code";
import {BioCard} from "./components/BioCard";

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const handleNavClick = (e) => {
    setCurrentPage(e.target.value);
  }

  let content = '';
  switch(currentPage){
    case 'Bio':
      content = <BioCard />
      break;
    case 'Code':
      content = <Code/> ;
      break;
    case 'Home':
      content = <Hero name='melissa shaw'/> ;
      break;
    case 'Music':
      content = <Music/> ;
      break;
    // case 'Photos':
    //   content = <Photos/> ;
    //   break;   // case 'Photos':
    default:
      content = '';
  }

  return (
    <div className="App">
      <Nav
        handleNavClick={(e) => handleNavClick(e)}
        pages={['Home','Art','Bio','Code','Music','Photos',]}
      />
      <main>
        {content}
      </main>
      <footer>
        Built with React<FontAwesomeIcon icon={faReact} className="fa-brands fa-react m-l-5 rotate" />
      </footer>
    </div>
  );
}

export default App;