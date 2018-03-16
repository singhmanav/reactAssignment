
import React, {Component} from "react";
import PropTypes from "prop-types";

export default class ReduxHome extends Component {
    constructor(props) {
        super(props);
    }
     
    increment() {
        // parent shall pass increment
        this.props.parentIncrement();
    }
    
    render() {
        console.log("ReduxReduxHome render" );
         
        let counter = this.props.counter;

        return (
            <div> 
            <h2>ReduxHome</h2>

            <p> Counter: {counter} </p>
 
                
                 <button onClick={ () => this.increment()  }>
                +1
                </button>
                
            </div>
        )
    }
} 


ReduxHome.defaultProps = {
    
}

ReduxHome.propTypes = {
    
}