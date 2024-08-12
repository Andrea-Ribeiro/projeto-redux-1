import {all, takeEvery, call, put, delay, takeLatest} from 'redux-saga/effects'
import axios from 'axios'
import { fetchUsersSuccess, fetchUserById } from './slice';

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

function* fetchUser(action){
    console.log('teste',action.payload);
    try{
        const response = yield call(axios.get, `${api_users}${action.payload}`);
        console.log('teste resposta:', response.data)
    }catch(error){
        console.log(error.message)
    }
}

export default all([
    takeLatest("user/fetchUsers", fetchUsers),
    takeLatest("user/fetchUserById", fetchUser)
])