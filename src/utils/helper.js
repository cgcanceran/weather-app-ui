export const round = (value, precision) => {
    const multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
};
export const composeDateTime = (timestamp) => {
    const fullDateTime = timestamp && new Date(timestamp * 1000);
    return fullDateTime ? fullDateTime.toDateString() + " @ "
        + fullDateTime.getHours() + ":"
        + fullDateTime.getMinutes() + ":"
        + fullDateTime.getSeconds() : "";
};

