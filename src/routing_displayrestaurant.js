import React, { Component } from 'react';
import './App.css'
import axios from 'axios';



class Routingdisplayrestaurant extends Component {
    constructor(props) {
        super(props);

        this.state = {

            Dish_list_array: [],
            List_Of_Every_Hotel_array1: [],

            k: '',
        }

    }

    Handler = (event) => {

        this.setState({ [event.target.name]: event.target.value });
    }

  
    async Get_MY_Dishes(e, index) {
        e.preventDefault();

        let obj_get_hotel_ID = this.state.List_Of_Every_Hotel_array1[index];

        console.log("-------------", obj_get_hotel_ID.Hotel_ID)

        let Restaurant_ID = obj_get_hotel_ID.Hotel_ID
      
        this.props.history.push({pathname: `/dish_display_page/${Restaurant_ID}`})

    }




    componentDidMount() {
            this.Display_All_Hotel();
    }

   async Display_All_Hotel(){

   let unique_ID3 =  this.props.match.params.UID1
   console.log(unique_ID3)
   console.log("jhjsfdsad")

    let HotelNameLIST = await axios.post("http://localhost:8081/ListAllHotel",{unique_ID4:unique_ID3})
    
    console.log("kjgjdh",HotelNameLIST.data.result)

    this.setState({List_Of_Every_Hotel_array1:HotelNameLIST.data.result})

    this.setState({k : this.state.List_Of_Every_Hotel_array1.length},()=>{

    console.log(this.state.k)

    })

   }


    render() {

        return (
            <div>
            {this.state.k > 0 ?
                this.state.List_Of_Every_Hotel_array1.map((obj, index) => (
                    <div className="displayhotel1">
                        <button onClick={(e) => this.Get_MY_Dishes(e, index)}>{obj.Hotel_name}</button>
                    </div>
                )) : <div>No items</div>}  
                
            </div>
        )
    }
}
export default Routingdisplayrestaurant;