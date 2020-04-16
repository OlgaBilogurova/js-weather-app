// Init weather object
const weather = new Weather('Santa Clara', 'CA');
const ui = new UI();

// Vars
const modal = document.getElementById('modal');
const modalBtn = document.getElementById('w-modal-btn');

// weather.changeLocation('Miami', 'FL');

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

function getWeather() {
    weather.getWeather()
        .then(results => {
            console.log(results);
            ui.hidePreloader();
            ui.paint(results);
        })
        .catch(error => console.log(error));
}

// Hide modal
modal.style.display = "none";

// Show/Hide modal
modalBtn.addEventListener('click', function (e) {
    modal.style.display === "none" ? modal.style.display = "block" : modal.style.display = "none";
});
