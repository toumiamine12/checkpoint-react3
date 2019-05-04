import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import logo2 from './logo2.png';
import Box from "./box"
import yahya from './yahya.PNG'
import amine from './amine.PNG'
import arsslen from './arsslen.PNG'
import sameh from './sameh.PNG'
import Card from './components'

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1 className="head">NOS PROGRAMMES</h1> 
      <div className="all">
        <Card name="FULL TIME PROGRAM" par="Lorem ipsum dolor sit, amet consectetur adipisicing elit.
         Aliquid ad reprehenderit ratione expedita, consectetur veniam sed nihil, dolor corporis,
          deserunt corrupti praesentium accusantium nemo debitis nobis modi magni? Facere, cumque!" style={{background : "rgb(150, 232, 252)"}}/>
        <Card name="PART TIME PROGRAM" par="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid ad reprehenderit ratione expedita, consectetur veniam sed nihil, dolor corporis,
         deserunt corrupti praesentium accusantium nemo debitis nobis modi magni? Facere, cumque!" style={{background : "red"}}/>
        <Card name="KIDS CODING PROGRAM" par="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid ad reprehenderit ratione expedita, consectetur veniam sed nihil,
         dolor corporis, deserunt corrupti praesentium accusantium nemo debitis nobis modi magni? Facere, cumque!" style={{background : "rgb(17, 202, 235)"}}/>
        <Card name="SUMMER ACADEMY" par="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid ad reprehenderit ratione expedita, consectetur veniam sed nihil,
         dolor corporis, deserunt corrupti praesentium accusantium nemo debitis nobis modi magni? Facere, cumque!" style={{background : "rgb(88, 142, 212)"}}/>
      </div>
      </div>
    );
  }
}

export default App;
