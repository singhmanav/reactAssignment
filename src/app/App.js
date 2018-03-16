import React from 'react';

import Header from "./components/Header";

//import Home from "./components/Home";

//import About from "./components/About";

import PropTypes from 'prop-types';


//import Cart from "./cart/components/Cart";

export class App extends React.Component {
    
    // keyword
    getChildContext() {
        return {
                color: this.props.color,
                name: "Product App"
            };
    }

    componentDidMount() {
        console.log("App did mount");
    }
    
    // react keyword
    // create a virtual dom, returns v dom
    render() {
        console.log("App render")

        return (
            <div>
               

                <Header />

              
 
                <div>
                    {this.props.children}
                </div>

              
                
            </div>
        )
    }

}

//keyword
App.childContextTypes = {
    color: PropTypes.string,
    name: PropTypes.string
  };