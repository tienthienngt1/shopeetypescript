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
var MainHeaderHomeStyle = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tpadding-top: 20px;\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 4fr 1fr;\n\t.logoSvg {\n\t\tcursor: pointer;\n\t}\n"], ["\n\tpadding-top: 20px;\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 4fr 1fr;\n\t.logoSvg {\n\t\tcursor: pointer;\n\t}\n"])));
var SearchStyle = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tdiv:first-child {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\theight: 65%;\n\t\tjustify-content: space-between;\n\t\twidth: 100%;\n\t\tbackground-color: #fff;\n\t\tinput {\n\t\t\twidth: 90%;\n\t\t\tpadding: 0 10px;\n\t\t\theight: 100%;\n\t\t\tborder: none;\n\t\t}\n\t\tdiv {\n\t\t\tpadding: 10px 25px;\n\t\t\tbackground-color: #fb5533;\n\t\t\tborder-radius: 2px;\n\t\t\tmargin-right: 5px;\n\t\t\tcursor: pointer;\n\t\t\tsvg {\n\t\t\t\tfont-size: 1.4rem;\n\t\t\t\tcolor: #fff;\n\t\t\t}\n\t\t}\n\t}\n\tdiv:last-child {\n\t\tpadding: 10px 0;\n\t\tcolor: #fff;\n\t\tfont-size: 1.3rem;\n\t\tspan {\n\t\t\tpadding: 0 5px;\n\t\t\t&:hover {\n\t\t\t\topacity: 0.7;\n\t\t\t\tcursor: pointer;\n\t\t\t}\n\t\t}\n\t}\n"], ["\n\tdiv:first-child {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\theight: 65%;\n\t\tjustify-content: space-between;\n\t\twidth: 100%;\n\t\tbackground-color: #fff;\n\t\tinput {\n\t\t\twidth: 90%;\n\t\t\tpadding: 0 10px;\n\t\t\theight: 100%;\n\t\t\tborder: none;\n\t\t}\n\t\tdiv {\n\t\t\tpadding: 10px 25px;\n\t\t\tbackground-color: #fb5533;\n\t\t\tborder-radius: 2px;\n\t\t\tmargin-right: 5px;\n\t\t\tcursor: pointer;\n\t\t\tsvg {\n\t\t\t\tfont-size: 1.4rem;\n\t\t\t\tcolor: #fff;\n\t\t\t}\n\t\t}\n\t}\n\tdiv:last-child {\n\t\tpadding: 10px 0;\n\t\tcolor: #fff;\n\t\tfont-size: 1.3rem;\n\t\tspan {\n\t\t\tpadding: 0 5px;\n\t\t\t&:hover {\n\t\t\t\topacity: 0.7;\n\t\t\t\tcursor: pointer;\n\t\t\t}\n\t\t}\n\t}\n"])));
var CartStyle = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\tdisplay: grid;\n\tplace-content: center;\n\tfont-size: 40px;\n\tcolor: white;\n\tfont-weight: bold;\n\tsvg {\n\t\tcursor: pointer;\n\t}\n"], ["\n\tdisplay: grid;\n\tplace-content: center;\n\tfont-size: 40px;\n\tcolor: white;\n\tfont-weight: bold;\n\tsvg {\n\t\tcursor: pointer;\n\t}\n"])));
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
        react_1["default"].createElement("div", { className: "logoSvg" },
            react_1["default"].createElement(LogoSVG_1["default"], null)),
        react_1["default"].createElement(SearchStyle, null,
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("input", { type: "text", placeholder: "B\u00CD K\u00CDP S\u0102N SALE" }),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement(react_bootstrap_icons_1.Search, null))),
            react_1["default"].createElement("div", null, ListArr.map(function (list, key) { return (react_1["default"].createElement("span", { key: key }, list)); }))),
        react_1["default"].createElement(CartStyle, null,
            react_1["default"].createElement(react_bootstrap_icons_1.Cart, null))));
};
exports["default"] = MainHeaderHome;
var templateObject_1, templateObject_2, templateObject_3;
