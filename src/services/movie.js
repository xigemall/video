import request from '@/utils/request';

// 电影
export function movieList() {
    return request('/api/movie', {
        method: 'GET',
    });
}

export function movieSave() {
    return request('/api/movie', {
        method: 'POST',
    });
}