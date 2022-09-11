"use strict";
exports.__esModule = true;
var http_proxy_middleware_1 = require("http-proxy-middleware");
//@ts-ignore
module.exports = function (app) {
    app.use(http_proxy_middleware_1.createProxyMiddleware("/banner/batch_list_by_spaces", {
        target: "https://shopee.vn/api/v4",
        changeOrigin: true
    }));
};
