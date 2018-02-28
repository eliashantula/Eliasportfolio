import React, {Component} from 'react';
import myimage from './landscape.jpg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './Nav';
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
    title: 'Contact',
    content: <Contact />
  },

  {title: 'Skills',
  content: <Skills />}
];


class App extends Component {
  render() {
    return (
    
      <div className="App">
  
        <Navbar sections={sections}  />

  <Parallax
      blur={2}
      bgImage={require('./code.jpg')}
     
      strength={600}
    >   
      <div style={{ height: '300px' }} />
  </Parallax>
        <div className="parts">
       
        {sections.map(section => {
          return <Section id={section.title} child={section.content}







          />;

        })}
  
        </div>
         <Parallax
      blur={3}
      bgImage={require('./code.jpg')}
     
      strength={500}
    >   
      <div style={{ height: '300px' }} />
  </Parallax>
 
    </div>

 


 
    );
  }
}

export default App;
