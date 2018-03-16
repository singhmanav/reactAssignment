
import React, {Component} from "react";
import PropTypes from "prop-types";

export default class Address extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        
    }
    
    render() {
       
        return (
            <div>
            <div className="card">
            <h1>Xebia</h1>
            <p>Xebia International India</p>
            <p style={{textAlign:"left"}}>Head Office: {this.props.office.head.street} , 
            {this.props.office.head.city},  {this.props.office.head.state} Pin:  {this.props.office.head.pincode}
            </p>
           
            <p>Phone: 0124 470 0200</p>
          </div>

          <div className="card">
            <h1>Xebia</h1>
            <p>Xebia International India</p>
            <p style={{textAlign:"left"}}>Head Office: {this.props.office.branch.street} , 
            {this.props.office.branch.city},  {this.props.office.branch.state} Pin:  {this.props.office.branch.pincode}
            </p>
            <p>Phone: 0124 470 0200</p>
          
          </div>
          </div>
        )
    }
} 


Address.defaultProps = {
    
}

Address.propTypes = {
    
}