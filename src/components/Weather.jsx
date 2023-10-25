import React, { useState } from "react";
import video from "../components/clouds_-_16011 (1080p).mp4";
import axios from "axios";

const Weather = () => {
  const [city, setCity] = useState("");
  const [wed, setWed] = useState(null);

  const FetchData = () => {
    let endPoint = "6a799a3c98711910ee49517e86cd8736";
    let search = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${endPoint}`;
    let date = new Date()
    console.log(date);
    axios
      .get(search)
      .then((res) => {
        setWed(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className=" h-screen relative">
        <video
          autoPlay
          loop
          muted
          className="absolute  inset-0 md:h-full h-[154vh] object-cover w-full"
        >
          <source src={video} type="video/mp4" />
        </video>
        <div className=" bg-transparent relative md:flex px-5 py-5">
          <div className="md:gap-2 md:flex ">
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Input location"
              className="text-white border-b-2 border-b-amber-400  px-2 focus:border:none h-[40px] w-1/1 rounded bg-zinc-600"
            />
            <button
              onClick={FetchData}
              class=" text-white px-3  hover:bg-gray-200 hover:text-amber-400 ms-md-0 ms-2 py-1 bg-zinc-600 border-0  focus:outline-none rounded "
            >
              fetch data
            </button>
          </div>
        </div>
        {wed && (
          <div className="md:flex md:mt-[10px]  px-3 gap-[20pc]">
            <div style={{color:"yellow"}} className="  px-5 md:w-[140pc] mt-[50px] text-center   shadow-amber-300 shadow-md  backdrop-blur-xl rounded relative h-[45vh]">
              <span className="text-9xl text-yellow-300 mt-[100px] font-mono">
                {Math.round(wed.main.temp - 273)}℃
              </span>
              <div className="text-white mt-5">
                <div className="text-xl font-bold">{wed.name}</div>
                <div className="text-xl font-semibold py-3">broken clouds</div>
                <div className="text-2xl font-bold">
                  {/* Current Location: <br /> Ogbomoso 25℃ */}
                </div>
              </div>
            </div>

            <div className=" relative backdrop-blur-xl shadow-gray-300 md:w-[170pc] text-white shadow-xl rounded-xl h-[84vh]">
              <div className="">
                <h4 className="text-center mt-2 text-base ">Weather Details</h4>
                <div className="flex justify-between mt-5  px-4 py-3 text-light">
                  <span>Location</span>
                  <p id="cityName">{wed.name}</p>
                </div>
                <div className="flex justify-between mt-5  px-4 py-3 text-light">
                  <span>Humidity</span>
                  <p id="hum">{wed.main.humidity}%</p>
                </div>
                <div className="flex justify-between mt-5  px-4 py-3 text-light">
                  <span>Wind Speed</span>
                  <p id="wed">{wed.wind.speed} m/s</p>
                </div>
                <div className="px-4">
                  <hr />
                </div>
                <div className="flex justify-between mt-5  px-4 py-3 text-light">
                  <span> Description</span>
                  <p id="des">{wed.weather[0].description}</p>
                </div>

                <div className="flex justify-between mt-5  px-4 py-3 text-light">
                  <span> Temperature</span>
                  <p id="pres">{(wed.main.temp - 273.15).toFixed(2)}℃</p>
                </div>

                <div className="flex justify-between mt-5  px-4 py-3 done text-light">
                  <span>Pressure</span>
                  <p id="wind">{wed.main.pressure} hPa</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
