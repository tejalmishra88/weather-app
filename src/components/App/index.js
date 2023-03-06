
import './App.css';
import Day1 from '../Day1';

function App() {
  const forecastData = [
    {
      day: "Monday",
      conditions: "sunny🌡️",
      maxTemp: 38,
      wind: 15,
    },
    {
      day: "Tuesday",
      conditions: "stormy🌩️",
      maxTemp: 26,
      wind: 36,
    },
    {
      day: "Wednesday",
      conditions: "rainy🌧️",
      maxTemp: 25,
      wind: 25,
    },
    {
      day: "Thursday",
      conditions: "cloudy☁️",
      maxTemp: 28,
      wind: 20,
    },
    {
      day: "Friday",
      conditions: "sunny🌡️",
      maxTemp: 35,
      wind: 16,
    },
  ];
  return (
    forecastData.map(({day, conditions, maxTemp, wind}) =>
    <>
   <Day1  day={day} conditions={conditions} maxTemp={maxTemp} wind={wind}/>

   </>
  )
  )
}


export default App;
