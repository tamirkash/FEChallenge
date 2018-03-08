import { connect } from 'react-redux';
import Homepage from "../Homepage";
import {logout} from "../../../reducers/user/actions";

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(logout())
    }
}

export default connect(null, mapDispatchToProps)(Homepage);