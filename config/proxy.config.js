export default {
    "/api": {
        "target": "http://localhost:8002/",
        "changeOrigin": true,
        "pathRewrite": { "^/api" : "" }
    }
}