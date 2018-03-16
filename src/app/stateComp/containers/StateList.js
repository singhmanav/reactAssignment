
import {connect} from "react-redux";
 
import StateList from "../components/StateList";
import * as actions from "../state/actions";

const mapStateToProps = (state) => {
    return {
         states: state,
        

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
       fetchStates: function() {
           let actionFn = actions.fetchStates();
           dispatch(actionFn);
       }
    }
}

export default connect(mapStateToProps, 
                    mapDispatchToProps) (StateList)