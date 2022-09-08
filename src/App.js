import React, {useState} from 'react';

import {Nav} from "./components/Nav";
import {Hero} from "./components/Hero";
//import {Photos} from "./pages/Photos";

import '../src/scss/main.scss';
import {Music} from "./pages/Music";
import {Code} from "./pages/Code";
import {BioCard} from "./components/BioCard";
import {Footer} from "./components/Footer";

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const handleNavClick = (e) => {
    setCurrentPage(e.target.value);
  }

  let content;
  switch(currentPage){
    // case 'Art':
    //   content = <Art/> ;
    //   break;
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
    //   break;
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
      <Footer />
    </div>
  );
}

export default App;