import {INIT_STATES,VIEW_STATES,EDIT_STATES}  from "./action-types";
import * as Services from "./services";

export function initStates(states){
    return {
        type: INIT_STATES,
        payload: {
            states: states
        }
    }
}

export function viewState(state){
    return {
        type: VIEW_STATES,
        payload: {
            currentState: state
        }
    }
}

export function editState(state){
    return {
        type: EDIT_STATES,
        payload: {
            editState: state
        }
    }
}


//ASYNC Calls, actions
//as per thunk, returns action as function
export function fetchStates(){
    return function(dispatch,getState){
       
        return Services.getStates().then(states=>{
            let action=initStates(states);
            dispatch(action);
            
        });
    }
}

export function fetchState(id){
    return function(dispatch,getState){
       
        return Services.getState(id).then(state=>{
            let action=viewState(state);
            dispatch(action);
            
        });
    }
}

export function f4editState(id){
    return function(dispatch,getState){
       
        return Services.getState(id).then(state=>{
            let action=editState(state);
            dispatch(action);
            
        });
    }
}