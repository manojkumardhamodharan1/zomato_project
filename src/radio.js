import React, { Component } from 'react';
import './App.css';


class Radio extends Component{

    render(){
        return(

<section>

<div class="row8">
<div class="img-colu">
<img src="./images/mobile1.webp" />
</div>

<div class= "write">
<h1>Get the Zomato App</h1>
<p>We will send you a link, open it on your phone to</p>
<h2>download the app.</h2>

<div class="buttons">

<span  class="button1">
<input type="radio" id="male" name="gender" value="male" />
  <label  for="male">Email</label>
  </span>
  
  
<span class="button2"  >
<input   type="radio"  id="male" name="gender" value="male" />
  <label for="male">Phone</label></span>
  </div>

 <div class="textbox1">
 <input type="text" id="fname" name="fname" value="Email" />
 <button type="button">Share App Link</button>
 </div>
 
 <div class="text12">
 <p>Download app from</p>
 </div>
 
 <div class="icon11">
 
 <img src="./images/app_store.webp" />
 <img src="./images/google_play.webp" />
 
 </div>
 </div>
  </div>

</section>

)
}
}

export default Radio;