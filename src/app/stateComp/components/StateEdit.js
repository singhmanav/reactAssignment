
import React, { Component } from "react";
import PropTypes from "prop-types";
import { NavLink,Redirect } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import {create,update,test}  from "../state/services";
export default class StateEdit extends Component {
    constructor(props) {
        super(props);
        this.state={flag:false}

    }

    componentDidMount() {
        console.log("Hello A", this.props);
        let id=this.props.match.params.id;
        if(id!=undefined)
        this.props.f4editState(this.props.match.params.id);
        //this.setState({...this.props.editState});
    }
    componentWillUnmount(){
        this.props.updateState([]);
    }
   
    changeData(key){
        console.log("Hello A", this.props);
        
            let state={...this.props.editState,...key}
        
        this.props.updateState(state);
        
    }

    updateData(){
        console.log(this.props.editState);
        let data=this.props.editState;
           
        let resp="";
         if(data.id==undefined){
            create(data).then((resp)=>{
               this.setState({flag:true});
            });
        }
        else{
            update(data).then((resp)=>{
                this.setState({flag:true});
            });
        } 

        
        
    }

    render() {
        
        let editState = this.props.editState || [];
        editState=Object.keys(editState).map(function (key) { return editState[key]; });
        editState=editState[0];
       
        //console.log("Tester Men",this.props.editState);
        return (
            <div>

                {this.state.flag&&<Redirect to="/states/"/>}
                <h2>Edit State</h2>

                <div>
                <input value={this.props.editState.name} onChange={(e)=>this.changeData({"name":e.target.value})}/>
                
                <input value={this.props.editState.code} onChange={(e)=>this.changeData({"code":e.target.value})}/>
            
                <input type="button" value="submit change" onClick={()=>this.updateData()} />
                </div>
            </div>
        )
    }
}


StateEdit.defaultProps = {

}

StateEdit.propTypes = {

}