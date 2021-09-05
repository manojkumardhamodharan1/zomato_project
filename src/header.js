import React, { Component } from 'react';
import './App.css';

import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import axios from 'axios';


class Header extends Component{

	constructor(props){
		super(props);
		
			this.state = {
	
				username: '',
				password: '',
				users: [],
				loginopen: false,
				signupopen: false,
				logname: '',
				logpass: '',
				successMsg: '',
				messageFromBackend: ''
		}
			
	}




	loginOpenModal = (e) =>
	{
			this.setState({loginopen:true})
	}
		
	signupOpenModal = (e) =>{
		this.setState({signupopen:true})
	}

	loginCloseModal = (e) =>{
		this.setState({loginopen:false})
	}

	signupCloseModal = (e) =>{
		this.setState({signupopen:false})
	}


	Handler = (event) => {
       
		this.setState({ [event.target.name]: event.target.value });
	}


	async addItem(e){
             e.preventDefault();

			const usernames = this.state.username;
			const passwords = this.state.password;
			let loginRes = await axios.post("http://localhost:8081/signup",{username: usernames, password: passwords})
			console.log(loginRes.data);
			this.setState({messageFromBackend: loginRes.data.message})
  
	}
  

	async check(e){
		e.preventDefault();    

		this.setState({successMsg:"loginfail"});
		const loginname = this.state.logname; 
		const loginpass = this.state.logpass;
		let logincheck = await axios.post("http://localhost:8081/headerlogin",{logname:loginname ,logpass:loginpass})
		console.log(logincheck.data)
		
		

	}




  render(){
    return(
   
      
        <section class="header">


<nav>
<img src="./images/logo.png" width="150" height="100 " />
<div class="nav-links">
	<ul>
	<li onClick={this.loginOpenModal}><a>Login</a></li>
	<li onClick={this.signupOpenModal}><a>Signup</a></li>	
	</ul>
</div>
</nav>


<div class="text-box">
	<h1>Zomato</h1>
	<p>Discover the best food & drinks in Dubai</p>
	
</div>

<Modal open={this.state.loginopen} onClose={this.loginCloseModal} center>
	<div class="modal1">
        <h2>Login</h2>
		<div className="log-username">
                    <input type="text" name="logname" placeholder="username" value = {this.state.logname}
        onChange={this.Handler}/>
                    </div>
                    <div className="log-pass">
                    <input type="password" name="logpass" placeholder="password" value={this.state.logpass}
                        onChange={this.Handler}/>
                    </div>
					<div className="footer">
               
                <button onClick={(e) => this.check(e)}>login</button>
                <h2>{this.state.successMsg}</h2>
            </div>
	</div>	
      </Modal>	

<Modal open={this.state.signupopen} onClose={this.signupCloseModal} center>
	<div class="modal1">
        <h2>Signup</h2>
		<div className="reg_usr_nam">
                    <input type="text" name="username" placeholder="username" value = {this.state.username}
        onChange={this.Handler}/>
                    </div>

					<div className="reg_pwd">
                    <input type="password" name="password" placeholder="password" value = {this.state.password}
        onChange={this.Handler}/>
                    </div>
			<div className="footer">
                
                <button onClick={(e) => this.addItem(e)}>Register</button>
				<h3>{this.state.messageFromBackend}</h3>
            </div>
	</div>	
      </Modal>	
</section>
     
      

    )
  }
}





export default Header;
