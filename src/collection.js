import React, { Component } from 'react';
import './App.css';


class Collection extends Component{


    render(){
        return(
            
            <section class="collection">

            <div class="row">
            <div class="colec-col">
            <img src="./images/collection1.webp" />
            <div class="layer">
            <h3 class="text1">Order Food Online</h3>
            </div>
            </div>
            <div class="colec-col">
            <img src="./images/collection2.webp" />
            <div class="layer">
            <h3 class="text1">Go out for a meal</h3>
            </div>
            </div>	
            <div class="colec-col">
            <img src="./images/collection3.jpg" />
            <div class="layer">
            <h3 class="text1">Nightlife & club</h3>
            </div>
            </div>
            <div class="colec-col">
            <img src="./images/collection4.webp" />
            <div class="layer">
            <h3 class="text1">Zomato Pro</h3>
            </div>
            </div>	
            </div>	
            </section>
            
            )
            }
}


export default Collection;