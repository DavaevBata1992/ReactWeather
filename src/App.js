import React from "react";
import Info from "./Components/info";
import Form from "./Components/form";
import Weather from "./Components/weather";

const API_KEY = "86b78e4186311a74071c42b1448b986b";

class App extends React.Component {

    state = {
        temp: undefined,
        city: undefined,
        country: undefined,
        sunrise: undefined,
        sunset: undefined,
        error: undefined
    }
    gettingWeather = async (e) => {
        e.preventDefault();
        var city = e.target.elements.city.value;


        if (city) {
            const api_url = await
                fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
            const data = await api_url.json();
            this.setState({
                temp: data.main.temp,
                city: data.name,
                country: data.sys.country,
                sunrise: data.sys.sunrise,
                sunset: data.sys.sunset,
                error: ""
            });
        }
    }

    render() {
        return (
            <div >
            <Info />
            <Form weatherMethod={this.gettingWeather} />
            <Weather
                 temp={this.state.temp}
                 city={this.state.city}
                 country={this.state.country}
                 sunrise={this.state.sunrise}
                 sunset={this.state.sunset}
                 error={this.state.error}
        />
            </div>
    );
    }
}

export default App;

