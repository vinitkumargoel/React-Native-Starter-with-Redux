const initialState = {
    auth: false
};

const reducer = (state = initialState, action) => {    
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                auth: true
            }
            break;
        case 'LOGOUT_SUCCESS':
            return {
                auth: false
            }
            break;
    };
    return state;
};

export default reducer;