function volume_sphere(event) {
    event.preventDefault(); // Prevents form from refreshing the page

    const radiusInput = document.getElementById('radius').value;
    const volumeField = document.getElementById('volume');

    const radius = parseFloat(radiusInput);

    // Validate input: must be a number and non-negative
    if (isNaN(radius) || radius < 0) {
        volumeField.value = 'NaN';
        return false;
    }

    // Calculate volume: (4/3) * π * r^3
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // Round to 4 decimal places and display
    volumeField.value = volume.toFixed(4);

    return false; // Prevents actual form submission
}

window.onload = function () {
    document.getElementById('MyForm').onsubmit = volume_sphere;
};
