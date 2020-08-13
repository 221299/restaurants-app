import React, { Component } from 'react';
import Navbarmenu from './Navbarmenu'
import { Button } from 'react-bootstrap';
class Login extends Component {
    constructor(){
        super()
        this.state={
            name:'',
            password:''
        }
    }
    login(){
        console.warn(this.state)
        fetch('http://localhost:3000/login?q='+ this.state.name).then((data)=>{
            data.json().then((resp)=>{
                console.log("resp",resp) 
                if(resp.length>0){
                        localStorage.setItem('login',JSON.stringify(resp))
                        console.warn(this.props.history.push('list'))
                }else{
                    alert("Please check username and password..")
                }
            })
        })
    }
    render() {
        return (
            <div>
                <Navbarmenu /><br/><br/>
                <h3>Admin Login</h3><br/><br/>
              <h5> Username:- <input type="text" placeholder="Enter Name" name="user" onChange={(e)=>{this.setState({name:e.target.value})}} /></h5><br/><br/>
               <h5> Password:- <input type="password" placeholder="Enter Password" name="password" onChange={(e)=>{this.setState({password:e.target.value})}} /></h5><br/><br/>
                {/* <button  onClick={()=>{this.login()}}>Login</button> */}
                <Button as="input" type="submit" onClick={()=>{this.login()}} value="Login" />
            </div>
        );
    }
}

export default Login;