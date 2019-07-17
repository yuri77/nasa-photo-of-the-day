import React, { useState, useEffect } from "react";
import "./App.css";
import ReactDOM from "react-dom";
import axios from "axios";
import NasaGrid from "./components/NasaGrid";

function App() {
  // const [nasaPic, setNasaPic] = setState
  // const test = () => {
  //   axios
  //     .get(
  //       `https://api.nasa.gov/planetary/apod?api_key=f3ED4XgStByjIAQl3cauyfxKBHuoBQsqhvcn1UFh&count=1`
  //     )
  //     .then(response => {
  //       console.log("media", response.data[0]);
  //       console.log("hello");
  //     })
  //     .catch(error => {
  //       console.log("error:", error);
  //     });
  // };

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <NasaGrid />
    </div>
  );
}

export default App;
