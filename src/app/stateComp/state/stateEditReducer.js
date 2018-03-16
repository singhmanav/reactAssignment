import {EDIT_STATES}  from "./action-types";

const INITIAL_STATE = {
    
    editState:[]
   
}

export default function stateEditReducer(state = INITIAL_STATE, action) {
    console.log("stateEditReducer ", state, action);
    switch(action.type) {
        case EDIT_STATES:
            return  action.payload.editState;
       
        default:
            return state;
    }
}