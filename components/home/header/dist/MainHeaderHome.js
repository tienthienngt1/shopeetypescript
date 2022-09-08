"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var LogoSVG_1 = require("../../common/LogoSVG");
var styled_components_1 = require("styled-components");
var react_bootstrap_icons_1 = require("react-bootstrap-icons");
var MainHeaderHomeStyle = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tpadding: 20px 0;\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 4fr 1fr;\n\tborder: 1px solid blue;\n"], ["\n\tpadding: 20px 0;\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 4fr 1fr;\n\tborder: 1px solid blue;\n"])));
var SearchStyle = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tborder: 1px solid blue;\n\tdiv:first-child {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\theight: 80%;\n\t\twidth: 100%;\n\t\tbackground-color: #fff;\n\t}\n"], ["\n\tborder: 1px solid blue;\n\tdiv:first-child {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\theight: 80%;\n\t\twidth: 100%;\n\t\tbackground-color: #fff;\n\t}\n"])));
var CartStyle = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\tdisplay: grid;\n\tplace-content: center;\n\tborder: 1px solid blue;\n\tfont-size: 40px;\n\tcolor: white;\n\tfont-weight: bold;\n"], ["\n\tdisplay: grid;\n\tplace-content: center;\n\tborder: 1px solid blue;\n\tfont-size: 40px;\n\tcolor: white;\n\tfont-weight: bold;\n"])));
var ListArr = [
    "Áo Khoác",
    "Dép",
    "Túi xách nữ",
    "Váy",
    "Balo",
    "Quần Jean Nam",
    "Ốp Iphone",
    "Tai nghe Bluetooth",
];
var MainHeaderHome = function () {
    return (react_1["default"].createElement(MainHeaderHomeStyle, null,
        react_1["default"].createElement(LogoSVG_1["default"], null),
        react_1["default"].createElement(SearchStyle, null,
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("input", { type: "text", placeholder: "B\u00CD K\u00CDP S\u0102N SALE" })),
            react_1["default"].createElement("div", null, ListArr.map(function (list) { return (react_1["default"].createElement(react_1["default"].Fragment, null,
                react_1["default"].createElement("span", null, list))); }))),
        react_1["default"].createElement(CartStyle, null,
            react_1["default"].createElement(react_bootstrap_icons_1.Cart, null))));
};
exports["default"] = MainHeaderHome;
var templateObject_1, templateObject_2, templateObject_3;
