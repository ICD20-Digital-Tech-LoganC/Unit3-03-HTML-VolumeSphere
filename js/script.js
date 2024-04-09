/* JavaScript code to calculate and display the volume of a sphere */

function calculateVolume() {
    const radius = parseFloat(document.getElementById('radiusInput').value);

    if (!isNaN(radius)) {
        const volume = (4/3) * Math.PI * Math.pow(radius, 3);
        document.getElementById('volumeResult').textContent = `The volume of the sphere is: ${volume.toFixed(3)}`;
    } else {
        document.getElementById('volumeResult').textContent = 'Please enter a valid number for the radius.';
    }
}