const dispatcher = dispatch => {
    return {
        LoginSuccess: () => dispatch({
            type: 'LOGIN_SUCCESS'
        }),
        LogoutSuccess: () => dispatch({
            type: 'LOGOUT_SUCCESS'
        }),
    }
}

export default dispatcher