import request from '@/utils/request';

// 电影
export function movieList() {
    return request('/api/movie', {
        method: 'GET',
    });
}