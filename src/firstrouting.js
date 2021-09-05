import React, {Component} from 'react';

import './App.css'
import { Link } from 'react-router-dom';
class Fstrouting extends Component{

    render(){
    return(

        <section>
                <div class="footer">
                <h1>zomato</h1>
                   </div> 

                   <div class="contact">
                   <Link to='/contactpage'> <p>contact</p></Link>
                       </div>
                       <div class="restaurant_entry">
                   <Link to='/restaurant_main_page'> <p>ADD RESTAURANT</p></Link>
                       </div>
            </section>



    )

    }


} 


export default Fstrouting;