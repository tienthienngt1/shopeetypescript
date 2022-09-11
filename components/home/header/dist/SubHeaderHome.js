"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var react_bootstrap_icons_1 = require("react-bootstrap-icons");
var react_tooltip_1 = require("react-tooltip");
var notify_png_1 = require("../../../public/notify.png");
var image_1 = require("next/image");
var SubHeaderHomeStyle = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tfont-size: 1.3rem;\n\twidth: 100%;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tcolor: #fff;\n\tspan {\n\t\tpadding: 0 5px;\n\t\t&:hover {\n\t\t\topacity: 0.6;\n\t\t\tcursor: pointer;\n\t\t}\n\t\tsvg {\n\t\t\tvertical-align: bottom;\n\t\t}\n\t}\n"], ["\n\tfont-size: 1.3rem;\n\twidth: 100%;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tcolor: #fff;\n\tspan {\n\t\tpadding: 0 5px;\n\t\t&:hover {\n\t\t\topacity: 0.6;\n\t\t\tcursor: pointer;\n\t\t}\n\t\tsvg {\n\t\t\tvertical-align: bottom;\n\t\t}\n\t}\n"])));
var SubHeaderHomeLeftStyle = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tspan {\n\t\tsvg {\n\t\t\tvertical-align: center;\n\t\t}\n\t}\n"], ["\n\tspan {\n\t\tsvg {\n\t\t\tvertical-align: center;\n\t\t}\n\t}\n"])));
var SubHeaderHomeRightStyle = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject([""], [""])));
var NotifyTooltipStyle = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\twidth: 400px;\n\theight: 400px;\n\t.headerNotifyTooltip {\n\t\theight: 350px;\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\tflex-direction: column;\n\t}\n\t.footerNotifyTooltip {\n\t\twidth: 100%;\n\t\theight: 50px;\n\t\tdiv {\n\t\t\tpadding: 15px;\n\t\t\twidth: 48%;\n\t\t\tmargin: 0 1%;\n\t\t\theight: 100%;\n\t\t\tdisplay: inline-block;\n\t\t\ttext-align: center;\n\t\t\tfont-size: 1.6rem;\n\t\t\tbackground-color: #d7d7d7;\n\t\t}\n\t\tdiv:first-child {\n\t\t}\n\t\tdiv:last-child {\n\t\t\tcolor: blue;\n\t\t}\n\t}\n"], ["\n\twidth: 400px;\n\theight: 400px;\n\t.headerNotifyTooltip {\n\t\theight: 350px;\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\tflex-direction: column;\n\t}\n\t.footerNotifyTooltip {\n\t\twidth: 100%;\n\t\theight: 50px;\n\t\tdiv {\n\t\t\tpadding: 15px;\n\t\t\twidth: 48%;\n\t\t\tmargin: 0 1%;\n\t\t\theight: 100%;\n\t\t\tdisplay: inline-block;\n\t\t\ttext-align: center;\n\t\t\tfont-size: 1.6rem;\n\t\t\tbackground-color: #d7d7d7;\n\t\t}\n\t\tdiv:first-child {\n\t\t}\n\t\tdiv:last-child {\n\t\t\tcolor: blue;\n\t\t}\n\t}\n"])));
var SubHeaderHome = function () {
    var _a = react_1.useState(false), tooltip = _a[0], setTooltip = _a[1];
    var handleMouseEnter = function () { return setTooltip(true); };
    var handleMouseLeave = function () {
        setTooltip(false);
        setTimeout(function () {
            setTooltip(true);
        }, 10);
    };
    react_1.useEffect(function () {
        setTooltip(true);
    }, []);
    return (React.createElement(React.Fragment, null,
        React.createElement(SubHeaderHomeStyle, null,
            React.createElement(SubHeaderHomeLeftStyle, null,
                React.createElement("span", null, "K\u00EAnh ng\u01B0\u1EDDi b\u00E1n"),
                "|",
                React.createElement("span", null, "Tr\u1EDF th\u00E0nh Ng\u01B0\u1EDDi b\u00E1n Shopee"),
                "|",
                React.createElement("span", null, "T\u1EA3i xu\u1ED1ng \u1EE9ng d\u1EE5ng"),
                "|",
                React.createElement("span", null, "K\u1EBFt n\u1ED1i "),
                React.createElement("span", null,
                    React.createElement(react_bootstrap_icons_1.Facebook, { "data-tip": true, "data-for": "tooltipFace", onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave })),
                React.createElement("span", null,
                    React.createElement(react_bootstrap_icons_1.Instagram, { "data-tip": true, "data-for": "tooltipInstagram", onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave }))),
            React.createElement(SubHeaderHomeRightStyle, null,
                React.createElement("span", { "data-tip": true, "data-for": "notify", onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave },
                    React.createElement(react_bootstrap_icons_1.Bell, null),
                    " Th\u00F4ng b\u00E1o"),
                React.createElement("span", null,
                    React.createElement(react_bootstrap_icons_1.QuestionCircle, null),
                    " H\u1ED7 tr\u1EE3"),
                React.createElement("span", null,
                    React.createElement(react_bootstrap_icons_1.Globe, null),
                    " Ti\u1EBFng Vi\u1EC7t ",
                    React.createElement(react_bootstrap_icons_1.ChevronDown, null)),
                React.createElement("span", null, "\u0110\u0103ng K\u00ED"),
                React.createElement("span", null, "\u0110\u0103ng Nh\u1EADp"))),
        tooltip && (React.createElement(React.Fragment, null,
            React.createElement(react_tooltip_1["default"], { id: "tooltipFace", effect: "solid" },
                React.createElement("span", null, "K\u1EBFt n\u1ED1i Facebook")),
            React.createElement(react_tooltip_1["default"], { id: "tooltipInstagram", effect: "solid" },
                React.createElement("span", null, "K\u1EBFt n\u1ED1i Instagram")),
            React.createElement(react_tooltip_1["default"], { id: "notify", effect: "solid", type: "light" },
                React.createElement(NotifyTooltipStyle, null,
                    React.createElement("div", { className: "headerNotifyTooltip" },
                        React.createElement(image_1["default"], { src: notify_png_1["default"], alt: "notifyTooltip", width: 100, height: 100 }),
                        React.createElement("p", null, "\u0110\u0103ng nh\u1EADp \u0111\u1EC3 xem th\u00F4ng b\u00E1o")),
                    React.createElement("div", { className: "footerNotifyTooltip" },
                        React.createElement("div", null, "\u0110\u0103ng k\u00ED"),
                        React.createElement("div", null, "\u0110\u0103ng nh\u1EADp"))))))));
};
exports["default"] = SubHeaderHome;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
