import axios from "axios/index";

export const CONTACT_SUCCESSFUL = 'CONTACT_SUCCESSFUL';
export const CONTACT_FAIL = 'CONTACT_FAIL';
export const CONTACT_REQUEST = 'CONTACT_REQUEST';

export const contact = (subject, body) => {
    return (dispatch, getState) => {
        dispatch({type: CONTACT_REQUEST});

        axios.post(`${process.env.REACT_APP_API}/user/contact`, {
            user: getState().user.username,
            subject,
            body
        }).then(() => {
            dispatch({type: CONTACT_SUCCESSFUL})
        }).catch(error => {
            dispatch({
                type: CONTACT_FAIL,
                payload: {
                    error: error.response ? 'Something went wrong..' : 'Error - Did you start the server?'
                }
            })
        });
    }
}