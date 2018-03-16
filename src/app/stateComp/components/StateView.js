
import React, {Component} from "react";
import PropTypes from "prop-types";

export default class StateView extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        //console.log("Params",this.props.match.params.id);
        this.props.fetchState(this.props.match.params.id);

    }
    
    render() {
        let currentState = this.props.currentState || [];
        currentState=Object.keys(currentState).map(function (key) { return currentState[key]; });
        currentState=currentState[0];
        console.log("Tester Men",this.props.currentState);
        return (
            <div> 
            
            <h2>{this.props.currentState.name}</h2>
            <h3>ID: {this.props.currentState.id}</h3>
            <h3>Code: {this.props.currentState.code}</h3>
           
        
         </div>
        )
    }
} 


StateView.defaultProps = {
    
}

StateView.propTypes = {
    
}