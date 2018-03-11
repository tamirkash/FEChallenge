import { connect } from 'react-redux';
import Homepage from "../Homepage";
import {getThumbnail, saveLocation} from "../../../reducers/thumbnail/actions";

const mapStateToProps = state => {
    return {
        username: state.user.username,
        thumbnail: state.thumbnail
    }
}

const mapDispatchToProps = dispatch => {
    return {
        saveLocation: (x, y) => dispatch(saveLocation(x, y)),
        getThumbnail: () => dispatch(getThumbnail())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);