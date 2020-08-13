import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route ,Link} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faEdit,faTrash,faList,faHome,faPlus,faSearch, faUser} from '@fortawesome/free-solid-svg-icons'
import Home from './components/Home';
import Login from './components/Login'
import RestauranstList from './components/RestauranstList'
import RestaurantCreate from './components/RestaurantCreate'
import RestaurantDetail from './components/RestaurantDetail'
import RestaurantSearch from  './components/RestaurantSearch'
import RestaurantUpdate from './components/RestaurantUpdate'
// import Navbarmenu from './Navbarmenu'
import Logout from './components/Logout'
import Protected from './components/Protected'
function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/list">
          <RestauranstList />
        </Route>

        <Route path="/create">
          <RestaurantCreate />
        </Route>

       <Route path="/search">
          <RestaurantSearch />
        </Route>

        <Route path="/logout">
          <Logout />
        </Route>

      <Route path="/details">
          <RestaurantDetail />
        </Route> 

        <Route path="/update/:id" 
          render={props=>(<RestaurantUpdate {...props}/>)}>
        </Route> 

        <Route path="/login" 
          render={props=>(<Login {...props}/>)}>
        </Route>

        {/* <Route exact path="/">
          <Home />
        </Route> */}

        <Protected exact path="/" component={Home}/> 

         <Protected exact path="/update/:id" components={RestaurantUpdate}/> 
        <Protected exact path="/details" components={RestaurantDetail}/> 
        <Protected exact path="/search" components={RestaurantSearch}/> 
      <Protected exact path="/create" components={RestaurantCreate}/> 
        <Protected exact path="/list" components={RestauranstList}/>  
      </Router>
    </div>
  );
}

export default App;
