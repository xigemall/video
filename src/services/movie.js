import request from '@/utils/request';

// 电影列表
export function movieList() {
    return request('/api/movie_list', {
        method: 'GET',
    });
}

// 电影详情
export function movieDetail(id) {
    return request(`/api/movie/${id}`, {
        method: 'GET',
    });
}