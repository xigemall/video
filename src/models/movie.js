import {movieList} from '../services/movie';

export default {
    namespace: 'movie',
    state: [],
    reducers: {
        save(state, action) {
            return {
                ...state,
                ...action.payload
            }
        },
    },
    effects: {
        * movieList({payload}, {call, put}) {
            const response = yield call(movieList, payload);
            yield put({
                type: 'save',
                payload: response,
            });
        }
    },
    subscriptions: {
        setup({history, dispatch}) {

        }
    }
}