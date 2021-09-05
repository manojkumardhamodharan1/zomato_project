import React, { Component } from 'react';
import './App.css';


class Resturants extends Component{


    render(){
        return(
            
            <section>

            <div class="cultured-list">
            
            <h2>Collections</h2>
            <p>Explore curated lists of top restaurants, cafes, pubs, and bars in Dubai, based on trends</p>
            
            
            
            <div class="row">
            
            <div class="cul-colu">
            <img src="./images/party1.jpg" />
            <div class="bottom-left">Luxury Ramadan Special</div>
            <div class="bottom-left1">36 Places</div>
            </div>
            
            <div class="cul-colu">
            <img src="./images/party2.jpg" />
            <div class="bottom-left">Must Try Iftars</div>
            <div class="bottom-left1">18 Places</div>
            </div>
            
            <div class="cul-colu">
            <img src="./images/party3.jpg" />
            <div class="bottom-left">Catch The Match</div>
            <div class="bottom-left1">6 Places</div>
            </div>
            
            <div class="cul-colu">
            <img src="./images/party4.jpg" />
            <div class="bottom-left">Dine & Win</div>
            <div class="bottom-left1">12 Places</div>
            </div>
            
            </div>
            </div>
            </section>
            
            )
            }
}


export default Resturants;