import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import Navbarmenu from './Navbarmenu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faEdit,faTrash } from '@fortawesome/free-solid-svg-icons'
class RestauranstList extends Component {
    constructor() {
        super();
        this.state = {
            list: null,
        }

    }
    componentDidMount() {
        this.getData()
        
    }
    getData(){
        fetch("http://localhost:3000/restaurant").then((response) => {
            response.json().then((result) => {
                this.setState({ list: result })
            })
        })
    }
    delete(id){
        fetch("http://localhost:3000/restaurant/"+id,{
            method:"DELETE",
        }).then((result) => {
            result.json().then((resp) => {
                alert("Restaurant has been Deleted.")
                this.getData()
            })
        })
    }
    render() {
        return (
            <div>
                <Navbarmenu />
                <h1>Restauranst List</h1>
                {
                    this.state.list ? <div>
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
                                    this.state.list.map((item, i) =>
                                        // <div className="list-wrapper">
                                        //     <span>{item.name}</span>
                                        //     <span>{item.email}</span>
                                        //     <span>{item.Rating}</span>
                                        //     <span>{item.address}</span>
                                        // </div>
                                        <tr>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.Rating}</td>
                                        <td>{item.address}</td>
                                        <td><Link to={"/update/"+item.id}><FontAwesomeIcon icon={faEdit} color="orange"/></Link>{" "}
                                        <span onClick={()=>this.delete(item.id)}><FontAwesomeIcon icon={faTrash} color="red"/></span></td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </Table>
                    </div>
                        : <p>Please Wait....</p>
                }
            </div>
        );
    }
}

export default RestauranstList;