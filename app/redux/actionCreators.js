export const changeStep = (step) => {
    return { type: "CHANGE_STEP", stepNumber: step };
};

export const playerMove = (x, y) => {
    return { type: "PLAYER_MOVE", x: x, y: y };
};