"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formatTime = (format, seconds) => {
    const date = new Date(seconds * 1000);
    const formatTokens = {
        'YYYY': date.getUTCFullYear().toString(),
        'MM': (date.getUTCMonth() + 1).toString().padStart(2, '0'),
        'DD': date.getUTCDate().toString().padStart(2, '0'),
        'HH': date.getUTCHours().toString().padStart(2, '0'),
        'mm': date.getUTCMinutes().toString().padStart(2, '0'),
        'ss': date.getUTCSeconds().toString().padStart(2, '0'),
    };
    return format.replace(/YYYY|MM|DD|HH|mm|ss/g, (match) => formatTokens[match]);
};
exports.default = formatTime;
