
import React, {Component} from "react";
import PropTypes from "prop-types";
import Address from "./Address"
export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state={
            office:{
                head:{
                    street:"612 BPTP Park Centra, Sector 30",
                    city:"Gurugram",
                    state:"Haryana",
                    pincode:"122002"
                },
                branch:{
                    street:"3rdFloor Wing A, Indiqube Alpha Building, Panathur Junction, Marathahalli, Sarjapur Outer Ring Road",
                    city:"Bangalore",
                    state:"Karnataka",
                    pincode:"560103"
                }
                
            }
            
        }
    }
    
    componentDidMount() {
        
    }
    
    render() {
        return (
            <div> 
            <Address office={this.state.office} />
            </div>
        )
    }
} 


Contact.defaultProps = {
    
}

Contact.propTypes = {
    
}

Contact.contextTypes={
    color:PropTypes.string,
    name:PropTypes.string
}