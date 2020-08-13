import React from 'react';
import {Redirect,Route} from 'react-router-dom'
import { render } from 'react-dom';
const Protected = ({components:cmp,...rest}) => (
    
    <Route 
    {...rest}
    render={(props)=>
        localStorage.getItem("login")?(
            <cmp {...props} />
        ):
        <Redirect to="/login" />
    }
    />
)

export default Protected;