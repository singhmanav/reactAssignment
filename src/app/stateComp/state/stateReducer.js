import {INIT_STATES}  from "./action-types";

const INITIAL_STATE = {
    states: [],
    
   
}

export default function stateReducer(state = INITIAL_STATE, action) {
    console.log("stateReducer ", state, action);
    switch(action.type) {
        case INIT_STATES:
            return Object.assign({}, state, {states: action.payload.states});
        
        default:
            return state;
    }
}