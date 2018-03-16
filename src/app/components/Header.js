import React from "react";
import PropTpes from "prop-types";
import {NavLink} from 'react-router-dom';
import { Navbar,Nav,NavItem } from 'react-bootstrap';
export default class Header extends React.Component{
    
    
    render(){
        
        console.log("Header called");
        return(
            <div float="center">
                <NavLink to="/" 
                       exact 
                       className="button"  
                       activeClassName="success" >
                       Home
               </NavLink>

               <NavLink to="/contact" 
                       className="button"  
                       activeClassName="success" >
                       Contact
               </NavLink>

               

               <NavLink to="/about" 
                       className="button"  
                       activeClassName="success" >
                       About
               </NavLink>

               <NavLink to="/states" 
                       className="button"  
                       activeClassName="success" >
                       States
               </NavLink>
               

               
            </div>
        );
    }
}