"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
var HomePage_1 = require("../pages/HomePage");
var homeRoutes = {
    path: "/",
    element: React.createElement(HomePage_1["default"], null)
};
var RouteList = function () {
    var routing = react_router_dom_1.useRoutes([homeRoutes]);
    return React.createElement(react_router_dom_1.BrowserRouter, null, routing);
};
exports["default"] = RouteList;
