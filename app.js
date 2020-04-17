// Init storage object
const storage = new StorageData();
// Get stored location data
const weatherLocation = storage.getLocation();
// Init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.state);
const ui = new UI();

// Vars
const modal = document.getElementById('modal');

// Hide modal when the page loaded
modal.style.display = "none";

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Get weather and show data
function getWeather() {
    weather.getWeather()
        .then(results => {
            ui.hidePreloader();
            // Display data in UI
            ui.paint(results);
            // Store location in LS
            storage.setLocation(weather.city, weather.state);
        })
        .catch(error => console.log(error));
}

// Show modal
document.getElementById('w-modal-btn').addEventListener('click', (e) => {
    toggleModal();
});

// Close modal
document.getElementById('w-close-btn').addEventListener('click', e => {
    toggleModal();
});

// Change location event
document.getElementById('w-change-btn').addEventListener('click', e => {
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;

    if (city !== '' && state !== '') {
        // Change location
        weather.changeLocation(city, state);
        // Get and display weather
        getWeather();
    }
    // Close the modal
    toggleModal();
});

// Show/hide modal
function toggleModal() {
    modal.style.display === 'none' ? modal.style.display = 'block' : modal.style.display = 'none';
}
