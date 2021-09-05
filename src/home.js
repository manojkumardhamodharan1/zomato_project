import './App.css';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import Header from './header';
import Collection from './collection';
import Resturants from './resturants';
import Locations from './locations';
import Radio from './radio';
import Fstrouting from './firstrouting';


class Home extends Component{
  render(){
    return(


    <div >
      <Header />
      <Collection />
      <Resturants />
      <Locations />
      <Radio />
      <Fstrouting />
   
    
      
    </div>

  );
}
}
export default Home;
