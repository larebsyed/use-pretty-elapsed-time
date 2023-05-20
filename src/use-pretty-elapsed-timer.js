"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const format_time_1 = __importDefault(require("./format-time"));
const use_animation_frame_1 = __importDefault(require("./use-animation-frame"));
const usePrettyElapsedTimer = (formatString, maxTime = Infinity) => {
    const [elapsedSeconds, setElapsedSeconds] = (0, react_1.useState)(0);
    const [isRunning, setIsRunning] = (0, react_1.useState)(false);
    const [startTime, setStartTime] = (0, react_1.useState)(0);
    (0, use_animation_frame_1.default)((deltaTime) => {
        if (isRunning) {
            setElapsedSeconds((prevElapsedTime) => prevElapsedTime + deltaTime);
        }
    });
    (0, react_1.useEffect)(() => {
        if (elapsedSeconds > maxTime) {
            onStop();
        }
    }, [elapsedSeconds]);
    const onStart = (0, react_1.useCallback)(() => {
        setIsRunning(true);
        setStartTime(Date.now() - elapsedSeconds);
    }, []);
    const onStop = (0, react_1.useCallback)(() => {
        setIsRunning(false);
        setStartTime(0);
    }, []);
    const onReset = (0, react_1.useCallback)(() => {
        setElapsedSeconds(0);
        setIsRunning(false);
        setStartTime(0);
    }, []);
    return {
        elapsedTime: (0, format_time_1.default)(formatString, elapsedSeconds),
        start: onStart,
        stop: onStop,
        reset: onReset,
        running: isRunning
    };
};
exports.default = usePrettyElapsedTimer;
