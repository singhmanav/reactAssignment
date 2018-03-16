
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import StateView from "../components/StateView";
import * as actions from "../state/actions";

const mapStateToProps = (state) => {
    return {
        currentState:state.v
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchState: function(id) {
            let actionFn = actions.fetchState(id);
            dispatch(actionFn);
        }
     }
}

export default connect(mapStateToProps, 
                    mapDispatchToProps) (StateView)