// filterEngine.js

// Various image filters and enhancement algorithms

/**
 * Applies a grayscale filter to an image.
 * @param {ImageData} imageData - The image data to apply the filter to.
 * @returns {ImageData} The new image data with the grayscale filter applied.
 */
function applyGrayscale(imageData) {
    for (let i = 0; i < imageData.data.length; i += 4) {
        const avg = (imageData.data[i] + imageData.data[i + 1] + imageData.data[i + 2]) / 3;
        imageData.data[i] = avg;     // Red
        imageData.data[i + 1] = avg; // Green
        imageData.data[i + 2] = avg; // Blue
    }
    return imageData;
}

/**
 * Applies a sepia filter to an image.
 * @param {ImageData} imageData - The image data to apply the filter to.
 * @returns {ImageData} The new image data with the sepia filter applied.
 */
function applySepia(imageData) {
    for (let i = 0; i < imageData.data.length; i += 4) {
        const r = imageData.data[i];
        const g = imageData.data[i + 1];
        const b = imageData.data[i + 2];
        imageData.data[i] = Math.min(255, (r * 0.393) + (g * 0.769) + (b * 0.189)); // Red
        imageData.data[i + 1] = Math.min(255, (r * 0.349) + (g * 0.686) + (b * 0.168)); // Green
        imageData.data[i + 2] = Math.min(255, (r * 0.272) + (g * 0.534) + (b * 0.131)); // Blue
    }
    return imageData;
}

/**
 * Applies a brightness filter to an image.
 * @param {ImageData} imageData - The image data to apply the filter to.
 * @param {number} value - The value to adjust brightness by (positive or negative).
 * @returns {ImageData} The new image data with brightness adjusted.
 */
function applyBrightness(imageData, value) {
    for (let i = 0; i < imageData.data.length; i += 4) {
        imageData.data[i] = Math.min(255, Math.max(0, imageData.data[i] + value));     // Red
        imageData.data[i + 1] = Math.min(255, Math.max(0, imageData.data[i + 1] + value)); // Green
        imageData.data[i + 2] = Math.min(255, Math.max(0, imageData.data[i + 2] + value)); // Blue
    }
    return imageData;
}

module.exports = {
    applyGrayscale,
    applySepia,
    applyBrightness
};
