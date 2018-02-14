import React, {Component} from 'react';
import myimage from './landscape.jpg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './Nav';
import Section from './Section';
import Welcome from './Welcome';
import Images from './Images'
import Justice from './justice.png'
import Code from './code.jpg'


const sections = [
  {
    title: 'Welcome',
    content: <Welcome />
  },
  {
    title: 'Projects',
    content:<Images />
  }
];


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar sections={sections} colorStyle="navbar-inverse" />
        <div className="container">
          <div className="jumbotron">
            <img
              src={Code} style={{height: "250px"}}
            />
          </div>
        </div>
        <div className="parts">
        {sections.map(section => {
          return <Section id={section.title} child={section.content}/>;
        })}
        </div>
      </div>
    );
  }
}

export default App;
