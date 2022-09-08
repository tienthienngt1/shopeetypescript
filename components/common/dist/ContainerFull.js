"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var ContainerStyle = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\twidth: 100vw;\n\theight: 100vh;\n\tbackground-color: #d7d7d7;\n"], ["\n\twidth: 100vw;\n\theight: 100vh;\n\tbackground-color: #d7d7d7;\n"])));
var ContainerFull = function (_a) {
    var children = _a.children;
    return react_1["default"].createElement(ContainerStyle, null, children);
};
exports["default"] = ContainerFull;
var templateObject_1;