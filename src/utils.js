export function generateUID() {
    // ref: https://stackoverflow.com/a/6248722/12447688
    var firstPart = (Math.random() * 46656) | 0;
    var secondPart = (Math.random() * 46656) | 0;
    firstPart = ("000" + firstPart.toString(36)).slice(-3);
    secondPart = ("000" + secondPart.toString(36)).slice(-3);
    return firstPart + secondPart;
}

export function indexizeData(data) {
    return data.map(item => ({ id: generateUID(), ...item }));
}