import React, { Component } from 'react';
import Navbarmenu from './Navbarmenu'
import { Button } from 'react-bootstrap';
class RestaurantUpdate extends Component {
    constructor() {
        super();
        this.state = {
            name: null,
            email:null,
            Rating:null,
            address:null,
            id:null
        }

    }
    componentDidMount(){
        fetch('http://localhost:3000/restaurant/'+this.props.match.params.id).then((response) => {
            response.json().then((result) => {
                console.warn(result)
          this.setState({ name: result.name,
                          email:result.email,
                          Rating:result.Rating,
                          address:result.address,
                          id:result.id })
            })
        })
    }
    update(){
        fetch("http://localhost:3000/restaurant/"+this.state.id,{
            method:"PUT",
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(this.state)
        }).then((result) => {
            result.json().then((resp) => {
                alert("Restaurant has been Updated.")
            })
        })
    }
    render() {
        console.warn(this.props.match.params.id);
        return (
            <div>
                <Navbarmenu />
                <h1>Restaurant Update</h1>
                <div>
                <input onChange={(e) => { this.setState({ name: e.target.value }) }}
                    placeholder="Restaurant Name" value={this.state.name}/><br /><br />

                <input onChange={(e) => { this.setState({ email: e.target.value }) }}
                    placeholder="Restaurant Email" value={this.state.email}/><br /><br />

                <input onChange={(e) => { this.setState({ Rating: e.target.value }) }}
                    placeholder="Restaurant Rating" value={this.state.Rating}/><br /><br />

                <input onChange={(e) => { this.setState({ address: e.target.value }) }}
                    placeholder="Restaurant Address" value={this.state.address}/><br /><br />

                    {/* <button onClick={()=>{this.update()}}>Update Restaurant</button> */}
                    <Button as="input" type="submit" onClick={()=>{this.update()}} value="Update Restaurant" />
            </div>
            </div>
        );
    }
}

export default RestaurantUpdate;