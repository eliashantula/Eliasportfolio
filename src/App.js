import React, {Component} from 'react';
import myimage from './landscape.jpg';
import './App.css';

import Navbars from './Nav';
import Section from './Section';
import Welcome from './Welcome';
import Images from './Images'
import Justice from './justice.png'
import Code from './code.jpg';
import { Parallax, Background } from 'react-parallax';
import Skills from './Skills';
import Contact from './Contact';


const sections = [
  {
    title: 'Welcome',
    content: <Welcome />
  },
  {
    title: 'Projects',
    content:<Images />
  },
  {
    title: 'Skills',
    content: <Skills />
  },

  {title: 'Contact',
  content: <Contact />}
];


class App extends Component {
  render() {
    return (
    
      <div className="App">
  
      

  <Parallax
      blur={0}
      bgImage={require('./back.jpg')}
     
      strength={800}
    >   
      <div style={{ height: '400px' }} />
  </Parallax>
    <Navbars/>
        <div className="parts">
       
        {sections.map(section => {
          return <Section id={section.title} child={section.content}







          />;

        })}
  
        </div>
         <Parallax
      blur={0}
      bgImage={require('./code.jpg')}
     
      strength={800}
    >   
      <div style={{ height: '700px' }} />
  </Parallax>
 
    </div>

 


 
    );
  }
}

export default App;