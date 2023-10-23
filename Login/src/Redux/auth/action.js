export const setUserLogin = (user) => {
    return(dispatch) => {
        dispatch({type: 'SET_USER_LOGIN', user: user});
    }
}

export const userLogOut = () => {
    return(dispatch) => {
        dispatch({type: 'USER-LOGOUT'})
    }
}