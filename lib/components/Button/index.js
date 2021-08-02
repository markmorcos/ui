var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import styled, { css } from 'styled-components';
var StyledButton = styled.button(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-weight: 700;\n  border: 0;\n  cursor: pointer;\n  display: inline-block;\n  line-height: 1;\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-weight: 700;\n  border: 0;\n  cursor: pointer;\n  display: inline-block;\n  line-height: 1;\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"
    /**
     * Primary UI component for user interaction
     */
])), function (props) {
    return props.primary && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      color: white;\n      background-color: black;\n    "], ["\n      color: white;\n      background-color: black;\n    "])));
}, function (props) {
    return !props.primary && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      color: #333;\n      background-color: transparent;\n      box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\n    "], ["\n      color: #333;\n      background-color: transparent;\n      box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\n    "])));
}, function (props) {
    return props.size === 'small' && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      font-size: 12px;\n      padding: 10px 16px;\n    "], ["\n      font-size: 12px;\n      padding: 10px 16px;\n    "])));
}, function (props) {
    return props.size === 'medium' && css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      font-size: 14px;\n      padding: 11px 20px;\n    "], ["\n      font-size: 14px;\n      padding: 11px 20px;\n    "])));
}, function (props) {
    return props.size === 'large' && css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n      font-size: 16px;\n      padding: 12px 24px;\n    "], ["\n      font-size: 16px;\n      padding: 12px 24px;\n    "])));
}, function (props) {
    return props.disabled && css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n      cursor: default;\n      color: #d9d9d9;\n      background-color: white;\n    "], ["\n      cursor: default;\n      color: #d9d9d9;\n      background-color: white;\n    "])));
});
/**
 * Primary UI component for user interaction
 */
export var Button = function (_a) {
    var _b = _a.disabled, disabled = _b === void 0 ? false : _b, _c = _a.primary, primary = _c === void 0 ? false : _c, _d = _a.size, size = _d === void 0 ? 'medium' : _d, _e = _a.onClick, onClick = _e === void 0 ? function () { return null; } : _e, children = _a.children, props = __rest(_a, ["disabled", "primary", "size", "onClick", "children"]);
    return (React.createElement(StyledButton, __assign({ type: 'button', className: 'button', primary: primary, size: size, disabled: disabled, onClick: disabled ? undefined : onClick }, props), children));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
