import { connect } from 'react-redux';
import Login from "../Login";
import {login} from "../../../reducers/user/actions";

const mapStateToProps = state => {
    return {
        logged: state.user.logged
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onLogin: (credentials) => {
            dispatch(login(credentials))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);