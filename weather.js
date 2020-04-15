class Weather {
    constructor(city, state) {
        this.apiKey = '3669797367c24bd582e8c001cfc53270';
        this.city = city;
        this.state = state;
        this.country = 'US';
    }

    // Fetch weather from API
    async getWeather() {
        const response = await fetch(`https://api.weatherbit.io/v2.0/current?city=${this.city}&
        country=${this.country}&state=${this.state}&key=${this.apiKey}`,{
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        }
    );
        const responseData = await response.json();
        return responseData.data[0];
    }

    // Change weather location
    changeLocation(city, state) {
        this.city = city;
        this.state = state;
    }
}
