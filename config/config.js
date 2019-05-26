import router from './router.config';
import proxy from './proxy.config';

export default {
    treeShaking: true,
    plugins: [
        // ref: https://umijs.org/plugin/umi-plugin-react.html
        ['umi-plugin-react', {
            antd: false,
            dva: {
                immer: true
            },
            dynamicImport: false,
            title: 'video',
            dll: false,

            routes: {
                exclude: [
                    /components\//,
                ],
            },
        }],
    ],
    routes: router,
    proxy: proxy,
}