const loginAction={
    LOGIN_REQUEST:"LOGIN_REQUEST",
    LOGIN_SUCCESS:"LOGIN_SUCCESS",
    LOGIN_ERROR:"LOGIN_ERROR",
    RESET_MSG:"RESET_MSG",  

    login: (username, password, rememberme) => ({
        type: loginAction.LOGIN_REQUEST,
        payload: {username, password, rememberme}
      }),

    loginsSuccess:()=>({
        type: loginAction.LOGIN_SUCCESS,
    }),

    loginError:()=>({
        type: loginAction.LOGIN_ERROR,
    }),
    resetMsg: ()=>({
        type: loginAction.RESET_MSG,
    })
}

export default loginAction