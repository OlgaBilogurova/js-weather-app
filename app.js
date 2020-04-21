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
            // Close the modal if it's open
            if (modal.style.display === 'block') toggleModal();
        })
        .catch(error => {
            console.log(error);
            ui.showMessage('Please, check the city and state. Information not found.');
        });
}

// Show modal
document.getElementById('w-modal-btn').addEventListener('click', (e) => {
    toggleModal();
    // fill select with US states
    ui.fillStateSelect();
});

// Close modal
document.getElementById('w-close-btn').addEventListener('click', e => {
    toggleModal();
});

// Change location event
document.getElementById('w-change-btn').addEventListener('click', e => {
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;

    if (city !== '') {
        // Change location
        weather.changeLocation(city, state);
        // Get and display weather
        getWeather();
    } else {
        ui.showMessage('Please, enter the city');
    }
});

// Show/hide modal
function toggleModal() {
    modal.style.display === 'none' ? modal.style.display = 'block' : modal.style.display = 'none';
    ui.removeMessage();
}
