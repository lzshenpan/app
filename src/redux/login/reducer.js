import { Map } from 'immutable';
import actions from './actions';

const initState=new Map({
    idToken: null,
    expLen: null,
    exp: null,
    error: false,
    loading: false,
    profile:{},
    rememberme: false,
    isLogin:false,
    loginMsg:""
})

export default function loginReducer(
    state=initState,
    action
){

    switch(action.type){
        case(actions.LOGIN_SUCCESS):{
            return state
                .set('isLogin',true)
                .set('loginMsg',action.loginMsg)
        }
        case(actions.LOGIN_ERROR):{

        }
        case(actions.RESET_MSG):{
            return state
                .set('loginMsg',"")
        }
        default:
            return state
    }
}
