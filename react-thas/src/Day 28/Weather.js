import React, { useEffect } from "react";

const Weather = () => {
  useEffect(() => {
    fetch(
      "https://api.weatherapi.com/v1/current.json?key=45c670119c8a4b45a8b144153212707&q=Mumbai"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);
  return <div>hello world</div>;
};

export default Weather;
