
import React, { Component } from "react";
import PropTypes from "prop-types";
import { NavLink } from 'react-router-dom';
import { Table } from 'react-bootstrap';
export default class StateList extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchStates();
    }

    render() {
        let states = this.props.states.s || [];
        states = Object.keys(states).map(function (key) { return states[key]; });
        states = states[0];
        //console.log("Test",states);

        return (
            <div>
                <h2>State List</h2>
                    <NavLink to="state/create">Create New State</NavLink>
                <div>
                    <Table striped bordered condensed hover>
                        <thead>
                            <tr> <th>ID</th> <th>NAME</th> <th>View</th> <th>EDIT</th></tr>
                        </thead>
                        <tbody>
                            {

                                states.map(state => (

                                    <tr key={state.id}> <td>{state.id}</td> <td>{state.name} </td> <td>
                                        <NavLink to={"/state/view/" + state.id} key={state.id}>
                                            View
                        </NavLink>
                                    </td>
                                        <td>
                                            <NavLink to={"/state/edit/" + state.id} key={state.id}>
                                                Edit
                        </NavLink>
                                        </td>

                                    </tr>


                                ))
                            }

                        </tbody>
                    </Table>

                </div>
            </div>
        )
    }
}


StateList.defaultProps = {

}

StateList.propTypes = {

}