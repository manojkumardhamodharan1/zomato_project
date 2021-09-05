import React, {Component} from 'react';
import axios from 'axios';
import Routingdisplayrestaurant from'./routing_displayrestaurant'
import './contact.css';

class Restreg extends Component{

    constructor(props){
		super(props);
		
			this.state = {
	
				rest_reg_usernames: '',
				rest_reg_pass: '',
                restregarray: [],
                logname: '',
				logpass: '',
                unique_id: '',
            }
			
        }

        Handler = (event) => {
       
            this.setState({ [event.target.name]: event.target.value });
        }

        async registers(e){

            e.preventDefault();

            const rset_res_usnm = this.state.rest_reg_usernames;  
            const rset_res_pass = this.state.rest_reg_pass;    

            let Restaurant_register = await axios.post("http://localhost:8081/HotelSignup",{rest_reg_usernames:rset_res_usnm ,rest_reg_pass:rset_res_pass})
            
            localStorage.setItem('USER_unique_ID1', JSON.stringify(Restaurant_register.data.data)); 
         
            this.props.CloseModal();    
            
        }   


        componentDidMount(){

            let hotelname_array = JSON.parse(localStorage.getItem("hotel_cred_array"))
        if (hotelname_array){    
            this.setState({restregarray:hotelname_array})}

        }


    render(){
        return(

                   <div class="container1">

<h3>In regRegister component</h3>
                   <div className="reg-username">
                   <input type="text" name="rest_reg_usernames" placeholder="username" value = {this.state.rest_reg_usernames}
                       onChange={this.Handler}/>
                  </div>
                    
                  <div className="reg-pass">
                    <input type="password"   name="rest_reg_pass" placeholder="password" value={this.state.rest_reg_pass}
                       onChange={this.Handler}/>
                   </div>

                   <div className="footer1">
                       <button  onClick={(e) => this.registers(e)}>SIGN UP</button>
                   </div>
                   <h6>END</h6>

      </div>
 
        )
    }

}



export default Restreg; 