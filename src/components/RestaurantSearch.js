import React, { Component } from 'react';
import { Table,Form,Container } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import Navbarmenu from './Navbarmenu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faEdit,faTrash } from '@fortawesome/free-solid-svg-icons'
class RestaurantSearch extends Component {
    constructor(){
        super()
        this.state={
            searchData:null,
            noData:false,
            lastSearch:""
        }
    }
    search(key){
        console.warn(key)
        this.setState({lastSearch:key})
        fetch('http://localhost:3000/restaurant?q='+key).then((data)=>{
            data.json().then((resp)=>{
                console.log("resp",resp)
                if(resp.length>0){
                    this.setState({searchData:resp,noData:false})
                }
                else{
                    this.setState({noData:true,searchData:null})
                }
                
            })
        })
    }
    delete(id){
        fetch("http://localhost:3000/restaurant/"+id,{
            method:"DELETE",
        }).then((result) => {
            result.json().then((resp) => {
                alert("Restaurant has been Deleted.")
                this.search(this.state.lastSearch)
            })
        })
    }
    render() {
        return (
            <Container>
                <Navbarmenu />
                <h1>Restaurant Search</h1>
                <Form.Control type="text" onChange={(e)=>this.search(e.target.value)} placeholder="Search Restaurants" />
                <br></br>
                <div>
               
                    {
                        this.state.searchData?
                        <div>
                             <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Rating</th>
                                    <th>Location</th>
                                    <th>Operation</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.searchData.map((item)=>
                                <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.Rating}</td>
                                <td>{item.address}</td>
                                <td><Link to={"/update/"+item.id}><FontAwesomeIcon icon={faEdit} color="orange"/></Link>{" "}
                                <span onClick={()=>this.delete(item.id)}><FontAwesomeIcon icon={faTrash} color="red"/></span></td>
                                </tr>)
                            }
                             </tbody>
                        </Table>
                        </div>:""
                    }
                    {
                            this.state.noData?<h3>No Data Found</h3>:null
                    }
                </div>
           </Container>
        );
    }
}

export default RestaurantSearch;