import './App.css';

import React, { Component } from 'react';
import Home from './home';
import Contactpage from  './contactpage';
import Nextpage from './nextpage';
import Restaurantmainpage from'./restaurant_main_page'
import Routingdisplayrestaurant from'./routing_displayrestaurant'
import Displayrestaurantnames from'./dish_display_page'


import { BrowserRouter as Router, Route } from 'react-router-dom';
import history from './history';


class App extends Component{
  render(){
    return(
      <Router history={history}> 
        <div className="App">
          <Route path={"/"} exact component={Home} />  
 
    
          <Route  path="/nextpage" component={Nextpage} />
      <Route  path="/contactpage" component={Contactpage} />
      <Route path="/restaurant_main_page" component={Restaurantmainpage} />
      <Route path="/routing_displayrestaurant"  component={Routingdisplayrestaurant} />
      <Route path="/routing_displayrestaurant/:UID1"  component={Routingdisplayrestaurant} />
      <Route path="/dish_display_page/:Restaurant_ID" component={Displayrestaurantnames} />
     
</div>
   
    </Router> 
  );
}
}
export default App;
