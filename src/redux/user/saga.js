import {all, takeEvery, call, put, delay} from 'redux-saga/effects'
import axios from 'axios'
import { fetchUsersSuccess } from './slice';

const api_users = "https://jsonplaceholder.typicode.com/users/"

function* fetchUsers(){
    try{
        yield delay(2000)
        const response = yield call(axios.get, api_users);
        yield put(fetchUsersSuccess(response.data))
    }catch(error){
        console.log(error);
    }
}

export default all([
    takeEvery("user/fetchUsers", fetchUsers)
])