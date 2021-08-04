import React from "react";
import { useSelector } from "react-redux";

const WeatherCard = () => {
  const placeData = useSelector((state) => state.placeData);
  const theme = useSelector((state) => state.theme);

  return (
    <div className="container">
      <div className="row">
        <div className="offset-md-4 col-12 col-md-4 weather">
          <div className={`card ${theme ? "dark" : ""} w-100 text-center`}>
            {placeData.location ? (
              <div>
                <img src={placeData.current.condition.icon} alt="" />
                <div className="temp">{placeData.current.temp_c}&deg;</div>
                <div className="desc">{placeData.current.condition.text}</div>
                <div className="place">{placeData.location.name}</div>
                <div className="container">
                  <div className="row whp">
                    <div className="col">
                      <div className="title">Wind Now</div>
                      <div className="data">
                        {placeData.current.wind_kph}
                        <span className="unit">KM</span>
                      </div>
                    </div>
                    <div className="col">
                      <div className="title">Humidity</div>
                      <div className="data">
                        {placeData.current.humidity}
                        <span className="unit">%</span>
                      </div>
                    </div>
                    <div className="col">
                      <div className="title">Precipitation</div>
                      <div className="data">
                        {placeData.current.precip_in}
                        <span className="unit">%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <h2>Place Not Found</h2>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
