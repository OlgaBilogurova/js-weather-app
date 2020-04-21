class UI{
    constructor() {
        this.preloader = document.getElementById('preloader');
        this.maincontent = document.getElementById('main-content');
        this.state = document.getElementById('state');
        this.message =  document.getElementById('message');

        // List of the US states
        this.states = ['Alabama', 'Missouri', 'Alaska', 'Montana',
            'Arizona', 'Nebraska', 'Arkansas', 'Nevada', 'California', 'New Hampshire',
            'Colorado', 'New Jersey', 'Connecticut', 'New Mexico', 'Delaware', 'New York',
            'District of Columbia', 'North Carolina', 'Florida', 'North Dakota', 'Georgia', 'Ohio',
            'Hawaii', 'Oklahoma', 'Idaho', 'Oregon', 'Illinois', 'Pennsylvania', 'Indiana',
            'Rhode Island', 'Iowa', 'South Carolina', 'Kansas', 'South Dakota', 'Kentucky',
            'Tennessee', 'Louisiana', 'Texas', 'Maine', 'Utah', 'Maryland', 'Vermont',
            'Massachusetts', 'Virginia', 'Michigan', 'Washington', 'Minnesota', 'West Virginia',
            'Mississippi', 'Wisconsin', 'Wyoming'];

        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.icon = document.getElementById('w-icon');
        this.details = document.getElementById('w-details');
        this.humidity = document.getElementById('w-humidity');
        this.dewpoint = document.getElementById('w-dewpoint');
        this.feelslike = document.getElementById('w-feels-like');
        this.wind = document.getElementById('w-wind');
    }

    hidePreloader(){
        // Hide preloader
        this.preloader.style.display = 'none';
        // Show main content
        this.maincontent.style.display = 'block';
    }

    fillStateSelect(){
        for (let state of this.states){
            let option = document.createElement('option');
            option.setAttribute('value', state);
            option.innerText = state;
            this.state.appendChild(option);
        }
    }

    paint(weather) {
        // Convert Celsius to Fahrenheit
        const temp_fahr = convertCToFahr(weather.temp);
        const feels_temp_fahr = convertCToFahr(weather.app_temp);
        const dewpoint_fahr = convertCToFahr(weather.dewpt);

        this.location.textContent = weather.city_name + ', ' + weather.state_code;
        this.desc.textContent = weather.weather.description;
        this.string.textContent = `${weather.temp}°C, ${temp_fahr}°F`;
        this.icon.setAttribute('src', `icons/${weather.weather.icon}.png`);
        this.humidity.textContent = `Humidity: ${weather.rh}%`;
        this.feelslike.textContent = `Feels Like: ${weather.app_temp}°C, ${feels_temp_fahr}°F`;
        this.dewpoint.textContent = `Dewpoint: ${weather.dewpt}°C, ${dewpoint_fahr}°F`;
        this.wind.textContent = `Wind: ${weather.wind_cdir_full}, ${weather.wind_spd} mph`;
    }

    showMessage(msg) {
        this.message.innerText = msg;
    }

    removeMessage(){
        this.message.innerText = '';
    }
}

// Convert Celsius to Fahrenheit
function convertCToFahr(c){
    return Math.floor(c * 9/5) + 32;
}
