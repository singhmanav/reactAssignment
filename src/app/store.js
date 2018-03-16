import {createStore, combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import stateReducer from './stateComp/state/stateReducer';
import stateViewReducer from './stateComp/state/stateViewReducer';
import stateEditReducer from './stateComp/state/stateEditReducer';


function loggerMiddleware({dispatch,getState}){
    return function(next){
        return function(action){
            //console.log("LOGGER", action,typeof action);
            let result=next(action);
            return result;
        }
    }
}

 const rootReducers=combineReducers({
    v:stateViewReducer,
    s:stateReducer,
    e:stateEditReducer,

}); 
let store = createStore(rootReducers,applyMiddleware(loggerMiddleware,thunk));

export default store;
