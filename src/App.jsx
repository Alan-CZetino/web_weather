import { useState } from "react";
import WeatherApp from "./components/WeatherApp";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <WeatherApp />
    </div>
  );
}

