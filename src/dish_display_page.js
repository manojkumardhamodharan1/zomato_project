import React, { Component } from 'react';
import './App.css'
import { withRouter } from 'react-router-dom';
import axios from 'axios';


class Displayrestaurantnames extends Component {

    constructor(props) {
        super(props);

        this.state = {
            Dishes_list_array2:[],
            detail_entry_array6:[],
         array:[],

            i: '',
            j:'',
        }

    }
    componentDidMount()
    {
        
        this.getHoteldishes(this.props.match.params.Restaurant_ID)
    
    }

debugger

    async getHoteldishes(Restaurant_ID){
        try{

            let motel_ID= Restaurant_ID;
         
            let Received_dish_list = await axios.post("http://localhost:8081/Get_MY_Dishes", { cafe_ID: motel_ID })
    
            this.setState({ Dish_list_array: Received_dish_list.data.result },()=>{
                console.log(this.state.Dish_list_array)
            this.setState({j : this.state.Dish_list_array.length})

            })
          
           
            }catch(err){
                console.log("Error caught",err)
            }
    }
    render() {  
        console.log(this.state.j)
        return(
         this.state.j > 0 ?
      
            this.state.Dish_list_array.map((obj,index) => (
               
              
                <div className="nbsajd">
                    <p>{obj.FOOD_NAME}</p>
                   <p>{obj.FOOD_PRICE}</p>
                   <button>AddToMyCart</button>
                   
                </div> 
           )) : <div>No items</div>	
)

        
    }
}
export default withRouter(Displayrestaurantnames);  