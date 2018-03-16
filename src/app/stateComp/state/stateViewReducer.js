import {VIEW_STATES}  from "./action-types";

const INITIAL_STATE = {
    
    currentState:[]
   
}

export default function stateReducer(state = INITIAL_STATE, action) {
    console.log("stateViewReducer ", state, action);
    switch(action.type) {
        case VIEW_STATES:
            return  action.payload.currentState;
       
        default:
            return state;
    }
}