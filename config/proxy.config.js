export default {
    "/api": {
        "target": "http://192.168.31.8:8002/",
        "changeOrigin": true,
        "pathRewrite": { "^/api" : "" }
    }
}