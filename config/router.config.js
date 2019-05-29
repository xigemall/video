export default [
    {
        path: '/',
        component: '../layouts/index',
        routes: [
            {path: '/', component: './index'},

            {path: '/movie', component: './movies/index'},
            {path: '/movie/:id', component: './movies/detail'},

            {path: '/my', component: './my/index'},
        ],
    },
]

