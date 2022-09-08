"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var SubHeaderHome_1 = require("./SubHeaderHome");
var styled_components_1 = require("styled-components");
var Container_1 = require("../../common/Container");
var MainHeaderHome_1 = require("./MainHeaderHome");
var HeaderHomeStyle = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\twidth: 100vw;\n\tpadding: 10px;\n\tbackground: linear-gradient(#ee4d2d, #ff7337);\n\tborder: 1px solid red;\n"], ["\n\twidth: 100vw;\n\tpadding: 10px;\n\tbackground: linear-gradient(#ee4d2d, #ff7337);\n\tborder: 1px solid red;\n"])));
var HeaderHome = function () {
    return (react_1["default"].createElement(HeaderHomeStyle, null,
        react_1["default"].createElement(Container_1["default"], null,
            react_1["default"].createElement(SubHeaderHome_1["default"], null),
            react_1["default"].createElement(MainHeaderHome_1["default"], null))));
};
exports["default"] = HeaderHome;
var templateObject_1;
