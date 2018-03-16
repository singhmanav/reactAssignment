
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import StateEdit from "../components/StateEdit";
import * as actions from "../state/actions";

const mapStateToProps = (state) => {
    return {
        editState:state.e
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        f4editState: (id) => { let actionFn = actions.f4editState(id);
            dispatch(actionFn);},   
        updateState: (state) => { let actionFn = actions.editState(state);
            dispatch(actionFn); },   
        //actions: bindActionCreators({...actions.f4editState(id),...actions.editState()}, dispatch)
        /* f4editState: function(id) {
            let actionFn = actions.f4editState(id);
            dispatch(actionFn);
        editState:function(){
            let actionFn = actions.editState();
            dispatch(actionFn); 
        }*/
        
     }
}

export default connect(mapStateToProps, 
                    mapDispatchToProps) (StateEdit)