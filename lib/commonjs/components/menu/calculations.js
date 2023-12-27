"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getColor = exports.leftOrRight = void 0;

var _constants = require("./constants");

const leftOrRight = (menuProps, menuWidth) => {
  'worklet';

  const anchorPositionHorizontal = menuProps.value.anchorPosition.split('-')[1];
  const itemWidth = menuProps.value.itemWidth;
  let leftPosition = 0;
  anchorPositionHorizontal === 'right' ? leftPosition = -menuWidth + itemWidth : anchorPositionHorizontal === 'left' ? leftPosition = 0 : leftPosition = -menuProps.value.itemWidth - menuWidth / 2 + menuProps.value.itemWidth / 2;
  return leftPosition;
};

exports.leftOrRight = leftOrRight;

const getColor = (isTitle, isDestructive, themeValue) => {
  'worklet';

  return isTitle ? _constants.MENU_TITLE_COLOR : isDestructive ? themeValue === 'dark' ? _constants.MENU_TEXT_DESTRUCTIVE_COLOR_DARK : _constants.MENU_TEXT_DESTRUCTIVE_COLOR_LIGHT : themeValue === 'dark' ? _constants.MENU_TEXT_DARK_COLOR : _constants.MENU_TEXT_LIGHT_COLOR;
};

exports.getColor = getColor;
//# sourceMappingURL=calculations.js.map