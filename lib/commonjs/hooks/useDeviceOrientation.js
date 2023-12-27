"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.useDeviceOrientation = void 0;

var _react = require("react");

var _reactNative = require("react-native");

const useDeviceOrientation = () => {
  const [orientation, setOrientation] = (0, _react.useState)('landscape');
  const {
    height,
    width
  } = (0, _reactNative.useWindowDimensions)();
  (0, _react.useEffect)(() => {
    if (width < height) {
      setOrientation('portrait');
    } else {
      setOrientation('landscape');
    }
  }, [height, width]);
  const menuWidth = (0, _react.useMemo)(() => width * 60 / 100, [width]);
  return {
    deviceOrientation: orientation,
    windowHeight: height,
    windowWidth: width,
    menuWidth
  };
};

exports.useDeviceOrientation = useDeviceOrientation;
var _default = useDeviceOrientation;
exports.default = _default;
//# sourceMappingURL=useDeviceOrientation.js.map