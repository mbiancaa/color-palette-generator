const hexToRgb = (hex) =>
    hex
        .replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (m, r, g, b) => "#" + r + r + g + g + b + b)
        .substring(1)
        .match(/.{2}/g)
        .map((x) => parseInt(x, 16));


const rgbToHex = (r, g, b) => "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

const generateColors = (color, stepFn) => {
    const [r, g, b] = hexToRgb(color);
    const colors = [];

    const stepR = Math.min(Math.round((255 - r) / 10), 20);
    const stepG = Math.min(Math.round((255 - g) / 10), 20);
    const stepB = Math.min(Math.round((255 - b) / 10), 20);

    for (let i = 0; i < 10; i++) {
        const newR = stepFn(r, i, stepR);
        const newG = stepFn(g, i, stepG);
        const newB = stepFn(b, i, stepB);

        colors.push(rgbToHex(newR, newG, newB));
    }

    return colors;
}

export const generateLighterColors = (color) => {
    return generateColors(color, (value, i, step) => Math.min(255, value + i * step));
}

export const generateDarkerColors = (color) => {
    return generateColors(color, (value, i, step) => Math.max(0, value - i * step));
}

export const generateComplementaryColor = (color) => {
    const [r, g, b] = hexToRgb(color);
    return rgbToHex(255 - r, 255 - g, 255 - b);
}

export const generateBlendedColors = (startColor) => {
    const colors = generateColors(startColor, (value, i, step) => Math.min(255, value + i * step));
    const complementaryColor = generateComplementaryColor(startColor);

    return colors.map((color, i) => {
        const weight = i / (colors.length - 1);
        return blendColors(color, complementaryColor, weight);
    });
};

const blendColors = (color1, color2, weight) => {
    const [r1, g1, b1] = hexToRgb(color1);
    const [r2, g2, b2] = hexToRgb(color2);

    return rgbToHex(
        Math.round(r1 + (r2 - r1) * weight),
        Math.round(g1 + (g2 - g1) * weight),
        Math.round(b1 + (b2 - b1) * weight)
    );
};

