import React, {Component} from 'react';
import './contact.css'
import { Link } from 'react-router-dom';
import Select from 'react-select'


const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]


class Contactpage extends Component{
    constructor(props){
		super(props);
		
			this.state = {
                fullname: '',
				selectedvalue: null,
				
		}
			
	}


    Handler = (event) => {
       
		this.setState({ [event.target.name]: event.target.value });
	}

    handlerchange = (selectedvalue) =>{
            this.setState({ selectedvalue })
    }

    check(e){

        e.preventdefault();

        

    }




    render(){
    return(

        <section>

            <div class="textitem">
                 

            <Select value={this.state.selectedvalue} options={options}  onChange={this.handlerchange} placeholder="How can we help you?"/>

            <div className="txtbox1">
                    <input type="text" name="fullname" placeholder="Full Name*" value = {this.state.fullname}
        onChange={this.Handler}/>
                    </div>
                    <div className="txtbox2">
                    <input type="text" name="email" placeholder="Email Address*" value = {this.state.email}
        onChange={this.Handler}/>
                    </div>
                    <div className="txtbox3">
                    <input type="text" name="phoneno" placeholder="Mobile Number*" value = {this.state.phoneno}
        onChange={this.Handler}/>
                    </div>
                    <div className="txtbox4">
                    <input type="text" name="feedback" placeholder="Type Text*" value = {this.state.feedback}
        onChange={this.Handler}/>
                    </div>

                    <div className="btn1">
               
                <button onClick={(e) => this.check(e)}>Submit Feedback</button>
                
            </div>
                   <div class="next_routing">
                   <Link to='/nextpage'>  <p>next</p></Link>
                       </div>

            </div>

            </section>



    )

    }


} 


export default Contactpage;