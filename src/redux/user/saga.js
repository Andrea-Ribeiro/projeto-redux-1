import {all, takeEvery} from 'redux-saga/effects'

function* fetchUsers(){
    alert('chamou saga')
}

export default all([
    takeEvery("user/fetchUsers", fetchUsers)
])