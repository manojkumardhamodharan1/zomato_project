import React, {Component} from 'react';

import './contact.css';

class Restlogin extends Component{

    constructor(props){
		super(props);
		
			this.state = {
	
				username: '',
				password: '',

                logname: '',
				logpass: '',
            }
			
        }


        Handler = (event) => {
       
            this.setState({ [event.target.name]: event.target.value });
        }

        login(){
            let rset_res_usnm = this.state.logname;
            let rset_res_pass = this.state.logpass;
            
           
             
            let rset_obj = {'restaurant_reg_username':rset_res_usnm, 'restaurant_reg_pass':rset_res_pass} 

            localStorage.setItem('rset_cred_obj', JSON.stringify(rset_obj));

          
            this.setState({logname:'', logpass:'' })
           
            console.log(rset_res_pass);
           this.props.CloseModal();
         
        }



    render(){
        return(

                   <div class="container">

                   <h3>In regLogin component</h3>
                   <div class="log-username">
                   <input type="text"   name="logname" placeholder="username" value = {this.state.logname}
                       onChange={this.Handler}/>
                  </div>
                    
                  <div className="log-pass">
                    <input type="password"   name="logpass" placeholder="password" value={this.state.logpass}
                       onChange={this.Handler}/>
                   </div>

                   <div className="footer">
                       <button  onClick={(e) => this.login(e)}>login</button>
                   </div>
                   <h6>END</h6>
     </div>
 

        )
    }

}

export default Restlogin; 