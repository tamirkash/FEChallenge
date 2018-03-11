import { connect } from 'react-redux';
import ContactUs from "../ContactUs";
import {contact} from "../../../reducers/contact/actions";

const mapStateToProps = state => {
    return {
        contact: state.contact
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSubmit: (subject, body) => dispatch(contact(subject, body))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactUs);