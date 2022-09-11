"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var Container_1 = require("components/common/Container");
var react_2 = require("swiper/react");
var swiper_1 = require("swiper");
require("swiper/css");
require("swiper/css/navigation");
var getBannerHome_1 = require("api/getBannerHome");
var CarouselHomeStyle = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\twidth: 100%;\n\theight: 38rem;\n\tborder: 1px solid red;\n\tpadding-top: 16rem;\n\tdisplay: grid;\n\tgrid-template-areas: \"a1 a1 a2\" \"a1 a1 a3\";\n\tgap: 0.3rem;\n"], ["\n\twidth: 100%;\n\theight: 38rem;\n\tborder: 1px solid red;\n\tpadding-top: 16rem;\n\tdisplay: grid;\n\tgrid-template-areas: \"a1 a1 a2\" \"a1 a1 a3\";\n\tgap: 0.3rem;\n"])));
var BannerStyle = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tborder: 1px solid red;\n\tgrid-area: a1;\n\toverflow: hidden;\n\t.swiper {\n\t\twidth: 100%;\n\t\theight: 100%;\n\t}\n\n\t.swiper-slide {\n\t\ttext-align: center;\n\t\tfont-size: 18px;\n\t\tbackground: #fff;\n\n\t\t/* Center slide text vertically */\n\t\tdisplay: -webkit-box;\n\t\tdisplay: -ms-flexbox;\n\t\tdisplay: -webkit-flex;\n\t\tdisplay: flex;\n\t\t-webkit-box-pack: center;\n\t\t-ms-flex-pack: center;\n\t\t-webkit-justify-content: center;\n\t\tjustify-content: center;\n\t\t-webkit-box-align: center;\n\t\t-ms-flex-align: center;\n\t\t-webkit-align-items: center;\n\t\talign-items: center;\n\t}\n\n\t.swiper-slide img {\n\t\tdisplay: block;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tobject-fit: cover;\n\t}\n"], ["\n\tborder: 1px solid red;\n\tgrid-area: a1;\n\toverflow: hidden;\n\t.swiper {\n\t\twidth: 100%;\n\t\theight: 100%;\n\t}\n\n\t.swiper-slide {\n\t\ttext-align: center;\n\t\tfont-size: 18px;\n\t\tbackground: #fff;\n\n\t\t/* Center slide text vertically */\n\t\tdisplay: -webkit-box;\n\t\tdisplay: -ms-flexbox;\n\t\tdisplay: -webkit-flex;\n\t\tdisplay: flex;\n\t\t-webkit-box-pack: center;\n\t\t-ms-flex-pack: center;\n\t\t-webkit-justify-content: center;\n\t\tjustify-content: center;\n\t\t-webkit-box-align: center;\n\t\t-ms-flex-align: center;\n\t\t-webkit-align-items: center;\n\t\talign-items: center;\n\t}\n\n\t.swiper-slide img {\n\t\tdisplay: block;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tobject-fit: cover;\n\t}\n"])));
var BannerSeparate1Style = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\toverflow: hidden;\n\tborder: 1px solid blue;\n\tgrid-area: a2;\n"], ["\n\toverflow: hidden;\n\tborder: 1px solid blue;\n\tgrid-area: a2;\n"])));
var BannerSeparate2Style = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\toverflow: hidden;\n\tborder: 1px solid blue;\n\tgrid-area: a3;\n"], ["\n\toverflow: hidden;\n\tborder: 1px solid blue;\n\tgrid-area: a3;\n"])));
var CarouselHome = function () {
    var params = {
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    };
    react_1.useEffect(function () {
        var unsub = function () { return __awaiter(void 0, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, getBannerHome_1.getBannerHome()];
                    case 1:
                        res = _a.sent();
                        console.log(res);
                        return [2 /*return*/];
                }
            });
        }); };
        unsub();
    }, []);
    return (React.createElement(Container_1["default"], null,
        React.createElement(CarouselHomeStyle, null,
            React.createElement(BannerStyle, null,
                React.createElement("div", null,
                    React.createElement(react_2.Swiper, { navigation: true, modules: [swiper_1.Navigation], className: "mySwiper" },
                        React.createElement(react_2.SwiperSlide, null, "Slide 1"),
                        React.createElement(react_2.SwiperSlide, null, "Slide 2"),
                        React.createElement(react_2.SwiperSlide, null, "Slide 3"),
                        React.createElement(react_2.SwiperSlide, null, "Slide 4"),
                        React.createElement(react_2.SwiperSlide, null, "Slide 5"),
                        React.createElement(react_2.SwiperSlide, null, "Slide 6"),
                        React.createElement(react_2.SwiperSlide, null, "Slide 7"),
                        React.createElement(react_2.SwiperSlide, null, "Slide 8"),
                        React.createElement(react_2.SwiperSlide, null, "Slide 9")))),
            React.createElement(BannerSeparate1Style, null,
                React.createElement("div", null,
                    React.createElement(react_2.Swiper, { navigation: true, modules: [swiper_1.Navigation], className: "mySwiper" },
                        React.createElement(react_2.SwiperSlide, null, "Slide 1"),
                        React.createElement(react_2.SwiperSlide, null, "Slide 2"),
                        React.createElement(react_2.SwiperSlide, null, "Slide 3"),
                        React.createElement(react_2.SwiperSlide, null, "Slide 4"),
                        React.createElement(react_2.SwiperSlide, null, "Slide 5"),
                        React.createElement(react_2.SwiperSlide, null, "Slide 6"),
                        React.createElement(react_2.SwiperSlide, null, "Slide 7"),
                        React.createElement(react_2.SwiperSlide, null, "Slide 8"),
                        React.createElement(react_2.SwiperSlide, null, "Slide 9")))),
            React.createElement(BannerSeparate2Style, null,
                React.createElement(react_2.Swiper, { navigation: true, modules: [swiper_1.Navigation], className: "mySwiper" },
                    React.createElement(react_2.SwiperSlide, null, "Slide 1"),
                    React.createElement(react_2.SwiperSlide, null, "Slide 2"),
                    React.createElement(react_2.SwiperSlide, null, "Slide 3"),
                    React.createElement(react_2.SwiperSlide, null, "Slide 4"),
                    React.createElement(react_2.SwiperSlide, null, "Slide 5"),
                    React.createElement(react_2.SwiperSlide, null, "Slide 6"),
                    React.createElement(react_2.SwiperSlide, null, "Slide 7"),
                    React.createElement(react_2.SwiperSlide, null, "Slide 8"),
                    React.createElement(react_2.SwiperSlide, null, "Slide 9"))))));
};
exports["default"] = CarouselHome;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
