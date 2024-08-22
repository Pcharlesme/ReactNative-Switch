"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var SmartSwitch = function (_a) {
    var isEnabled = _a.isEnabled, toggleSwitch = _a.toggleSwitch, _b = _a.trackColor, trackColor = _b === void 0 ? { false: '#767577', true: '#81b0ff' } : _b, _c = _a.thumbColorEnabled, thumbColorEnabled = _c === void 0 ? '#f5dd4b' : _c, _d = _a.thumbColorDisabled, thumbColorDisabled = _d === void 0 ? '#f4f3f4' : _d, style = _a.style, _e = _a.showLabels, showLabels = _e === void 0 ? true : _e;
    var translateX = new react_native_1.Animated.Value(isEnabled ? 26 : 0);
    var handleToggle = function () {
        react_native_1.Animated.timing(translateX, {
            toValue: isEnabled ? 0 : 20,
            duration: 200,
            useNativeDriver: true,
        }).start();
        toggleSwitch();
    };
    return (react_1.default.createElement(react_native_1.TouchableOpacity, { style: [styles.switchContainer, { backgroundColor: isEnabled ? trackColor.true : trackColor.false }, style], onPress: handleToggle, activeOpacity: 0.8 },
        react_1.default.createElement(react_native_1.Animated.View, { style: [
                styles.thumb,
                {
                    transform: [{ translateX: translateX }],
                    backgroundColor: isEnabled ? thumbColorEnabled : thumbColorDisabled,
                },
            ] }, showLabels && (react_1.default.createElement(react_native_1.Text, { style: styles.label }, isEnabled ? 'ON' : 'OFF')))));
};
var styles = react_native_1.StyleSheet.create({
    switchContainer: {
        width: 60,
        height: 35,
        borderRadius: 20,
        justifyContent: 'center',
        paddingHorizontal: 2,
    },
    thumb: {
        width: 30,
        height: 30,
        borderRadius: 13,
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        fontSize: 10,
        color: '#fff',
        fontWeight: 'bold',
    },
});
exports.default = SmartSwitch;
