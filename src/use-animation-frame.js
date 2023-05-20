"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useAnimationFrame = (callback) => {
    const requestRef = (0, react_1.useRef)(0);
    const previousTimeRef = (0, react_1.useRef)(0);
    const animate = (time) => {
        if (previousTimeRef.current !== undefined) {
            const deltaTime = time - previousTimeRef.current;
            callback(deltaTime / 1000);
        }
        previousTimeRef.current = time;
        requestRef.current = requestAnimationFrame(animate);
    };
    (0, react_1.useEffect)(() => {
        requestRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(requestRef.current);
    }, []);
    return {
        requestRef,
        previousTimeRef,
        animate
    };
};
exports.default = useAnimationFrame;
