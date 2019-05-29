import {movieList} from '../services/movie';

export default {
    namespace: 'movie',
    state:{
        data:[],
    },
    reducers: {
        save(state, action) {
            return {
                ...state,
                data: action.payload
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