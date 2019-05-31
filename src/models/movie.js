import {
    movieList,
    movieDetail,
} from '../services/movie';

export default {
    namespace: 'movie',
    state: {
        data: [],
        detail: {},
    },
    reducers: {
        save(state, action) {
            return {
                ...state,
                data: action.payload
            }
        },
        saveDetail(state, action) {
            return {
                ...state,
                detail: action.payload
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
        },
        // 电影详情
        * movieDetail({payload}, {select, call, put}) {
            const result = yield select(state => state.movie.data);
            let response = {};
            if (result.length > 0) {
                const responseData = result.filter((item)=>{
                    if (item.id === payload) {
                        return item;
                    }else{
                        return [];
                    }
                });
                response = responseData[0];
            } else {
                response = yield call(movieDetail, payload);
            }
            yield put({
                type: 'saveDetail',
                payload: response,
            });
        },
    },
    subscriptions: {
        setup({dispatch, history}, done) {
            // return history.listen(({pathname,query})=>{
            //     dispatch({type:'movieList',payload:query})
            // })
        }
    }
}