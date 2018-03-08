export const USER = "USER";

export const LOGIN_SUCCESSFUL = 'LOGIN_SUCCESSFUL';
export const LOGOUT_SUCCESSFUL = 'LOGOUT_SUCCESSFUL';

export const login = ({username, password}) => {
    localStorage.setItem(USER, username);

    return {
        type: LOGIN_SUCCESSFUL
    }
}

export const logout = () => {
    localStorage.removeItem(USER);

    return {
        type: LOGOUT_SUCCESSFUL
    }
}