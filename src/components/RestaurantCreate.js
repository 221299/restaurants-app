import React, { Component } from 'react';
import Navbarmenu from './Navbarmenu'
import { Button } from 'react-bootstrap';
class RestaurantCreate extends Component {
    constructor() {
        super();
        this.state = {
            name: null,
            email:null,
            Rating:null,
            address:null
        }

    }
    create(){
        fetch("http://localhost:3000/restaurant",{
            method:"Post",
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(this.state)
        }).then((result) => {
            result.json().then((resp) => {
                alert("Restaurant has been added.")
            })
        })
    }
    render() {
        return (
            <div>
                <Navbarmenu />
                <h1>Restaurant Create</h1><br></br>
                <input onChange={(e) => { this.setState({ name: e.target.value }) }}
                    placeholder="Restaurant Name" /><br /><br />

                <input onChange={(e) => { this.setState({ email: e.target.value }) }}
                    placeholder="Restaurant Email" /><br /><br />

                <input onChange={(e) => { this.setState({ Rating: e.target.value }) }}
                    placeholder="Restaurant Rating" /><br /><br />

                <input onChange={(e) => { this.setState({ address: e.target.value }) }}
                    placeholder="Restaurant Address" /><br /><br />

                    {/* <button onClick={()=>{this.create()}}>Add Restaurant</button> */}
                    <Button as="input" type="submit" onClick={()=>{this.create()}} value="Add Restaurant" />{' '}
            </div>
        );
    }
}

export default RestaurantCreate;