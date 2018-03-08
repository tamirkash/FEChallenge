import {getThumbnail, saveLocation} from "../../../reducers/thumbnail/actions";
import UserThumbnail from "../UserThumbnail";
import {connect} from "react-redux";

const mapStateToProps = state => {
    return {
        thumbnail: state.thumbnail
    }
};

const mapDispatchToProps = dispatch => {
    return {
        saveLocation: (x, y) => dispatch(saveLocation(x, y)),
        getThumbnail: () => dispatch(getThumbnail())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserThumbnail)