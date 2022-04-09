import { all, takeEvery, put, fork, call, cancel } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import axios from 'axios'
import actions from './actions';
import moment from 'moment';


const loginApi = async (username,password)=>{
 return await axios.post("http://127.0.0.1:8808/api/login",{username,password})
 .then(res=>{return res})
 .then(
    response => ({ response }),
    error => ({ error: error.message || 'Something bad happened' })
  )
}


export function* loginRequest(){
    yield takeEvery(actions.LOGIN_REQUEST, function* ({ payload }) {
        const { username, password } = payload;
        const {response,error} = yield call(loginApi, username, password);
        if (response){
          yield put({
            type:actions.LOGIN_SUCCESS,
            loginMsg:response.data
          })
        }else{
          console.log(error)
          yield put({
            type:actions.LOGIN_ERROR
          })
        }
      });
}

export default function* rootSaga() {
  yield all([
    fork(loginRequest),
  ]);
}
