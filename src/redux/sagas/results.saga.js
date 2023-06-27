import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';


function* fetchResults(action) {

    try {
        // const searchTerm = action.payload;
        const results = yield axios.get(`/api/search/${action.payload}`)
        console.log('search API with client ', action.payload);
        yield put({
            type: "SET_RESULTS",
            payload: results.data
        })
    }
    catch (error) {
        console.log('Error with fetchResults saga.', error);

    }
}

function* resultsSaga() {
    yield takeEvery('FETCH_RESULTS', fetchResults);
}


export default resultsSaga;