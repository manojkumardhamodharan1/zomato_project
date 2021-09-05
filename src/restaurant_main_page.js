import React, { Component } from 'react';
import Restlogin from './restlogin';
import Restreg from './restreg';
import { Link } from 'react-router-dom';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class Restaurantmainpage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            k: '',
            detail_entry_array1: [],
            cred_username: '',
            cred_password: '',
            detail_entry_array2: [],
            rest_name: '',
            dish_name: '',
            dish_price: '',
            List_Of_Every_Hotel_array: [],
            isloginopen: true,
            isregopen: false,
            loginopen: true,
            signupopen: false,
            Hotel_unique_ID: '',
        }

    }



    Handler = (event) => {
   
        this.setState({ [event.target.name]: event.target.value });
    }

    componentDidMount() {

        this.setState({ loginopen: true })

    }



    loginCloseModal = (e) => {
        this.setState({ loginopen: false })

    }


    loginopen(e) {
        this.setState({ isloginopen: true, isregopen: false, });
        console.log(this.state.isloginopen)
    }
    regisopen(e) {


        this.setState({ isloginopen: false, isregopen: true, });
        console.log(this.state.isloginopen)
    }

  

   async rest_enrestname_entry(e) {

        const hotel_name = this.state.rest_name 

        const unique_id2 = JSON.parse(localStorage.getItem("USER_unique_ID1"));
 
        let RegisterHotelName = await axios.post("http://localhost:8081/HotelNameEntry",{unID:unique_id2, rest_name:hotel_name })

        this.setState({Hotel_unique_ID:RegisterHotelName.data.data})
      
    }



    async  dishdetail_entry(e) {

        e.preventDefault();
      

        let food_name = this.state.dish_name;
        let food_price = this.state.dish_price;
        
        let Hotel_unique_ID2 = this.state.Hotel_unique_ID;

        let RegisterDishName = await axios.post("http://localhost:8081/DishDetailEntry",
        {Hotel_UnID:Hotel_unique_ID2, dish_name:food_name, dish_price:food_price})

        console.log(RegisterDishName.data)

      }

    
async DisplayEveryHotel(e, attachUserId){

    e.preventDefault();


    let unique_id2 = JSON.parse(localStorage.getItem("USER_unique_ID1"));
  let UID1 = unique_id2.UserID;
    if(attachUserId == "true")
    {
        console.log(unique_id2)
    this.props.history.push({pathname: `/routing_displayrestaurant/${UID1}`})
    }
    else{
       
    this.props.history.push({pathname: `/routing_displayrestaurant`})
    }
    }


    render() {

        return (

            <div class="hii">

                <div class="restaurant19">


                    <div class="rset_name">
                        <input type="text" name="rest_name" placeholder="Restaurant Name" value={this.state.rest_name}
                            onChange={this.Handler} />
                    </div>

                    <div className="rsetname_dish_price">
                        <button onClick={(e) => this.rest_enrestname_entry(e)}>submit</button>
                    </div>

                    <div className="rsetname_dish_price">
                        <button onClick={(e) => this.DisplayEveryHotel(e)}>DisplayAllHotel</button>
                    </div>

                   




                    <div class="displayhotel">
                    <button onClick={(e) => this.DisplayEveryHotel(e, "true")}>DisplayMyHotel</button>
                    </div>

                    <div className="rset_dish">
                        <input type="text" name="dish_name" placeholder="Dish Name" value={this.state.dish_name}
                            onChange={this.Handler} />
                    </div>

                    <div className="rset_dish_price">
                        <input type="password" name="dish_price" placeholder="Dish Price" value={this.state.dish_price}
                            onChange={this.Handler} />
                    </div>

                    <div className="rsetname_dish_price">
                        <button onClick={(e) => this.dishdetail_entry(e)}>submit</button>
                    </div>
                </div>

                <Modal open={this.state.loginopen} onClose={this.loginCloseModal} center>
                    <div class="modal1">



                        <div className="button1">
                            <button onClick={(e) => this.loginopen(e)} >login</button>
                            <button onClick={(e) => this.regisopen(e)}  >register</button>
                        </div>




                        {this.state.isloginopen && <div><h1>Login</h1><Restlogin CloseModal={this.loginCloseModal} /></div>}
                        {this.state.isregopen && <div><h1>Registeraz</h1><Restreg CloseModal={this.loginCloseModal} /></div>}





                    </div>
                </Modal>
            </div>
        )

    }
}


export default withRouter(Restaurantmainpage);
