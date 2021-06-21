import { all, call, put, takeLatest } from 'redux-saga/effects'
import type from '../types'
import api from '../../services/api'

function* loadRadiosSaga (action) {
    try {
        const response = yield call(api.get(action.payload)) 
        yield put({
            type: type.SET_RADIOS,
            payload: response
        })

    } catch (error) {
        console.log(error);
    }
}

export default function* rootSaga(){
    return yield all([
        yield takeLatest(type.LOAD_RADIOS_SAGA, loadRadiosSaga)
    ])
}