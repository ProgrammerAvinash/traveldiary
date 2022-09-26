import React, { useState } from "react";
import Categories from "./Categories";
import "./App.css";

function App() {
  // var [Cities, setCities] = useState("");
  var [places, setPlaces] = useState("");

  var cityCategories = {
    pune: [" shaniwar wada ", "Dagdushet Ganpati ", " Icskon Temple  "],
    mumbai: [" Marine Drive  ", "Rani Baug", " Taraporevala Aquarium"],
    Amritsar: [" Golden Temple ", " Jallianwala Baug ", " Partition Museum"],
  };

  var CitiesArray = Object.keys(cityCategories);

  var citiesMapArray = CitiesArray.map((item) => {
    return item;
  });

  function onCitiesClicked(item) {
    var CitiesArray = cityCategories[item];

    var PlaceArray = CitiesArray.map((place) => {
      return place;
    });
    setPlaces(PlaceArray);
  }
  var placesArray = [];
  placesArray = places;

  console.log("placesArray", placesArray);
  return (
    <div className="App">
      <h1 className="heading">
        <img
          alt="logo"
          src="https://media.istockphoto.com/vectors/happy-travel-case-vector-illustration-vector-id1272521633?k=20&m=1272521633&s=612x612&w=0&h=_Is7jGiouNTpRTewuPKSAQ32Yq13p2B3K30Br0U97_g="
        />{" "}
        Travel Diary{" "}
      </h1>
      <p>Checkout Tourist Places to Visit in Cities</p>
      <div className="Categories">
        <div>
          {citiesMapArray.map((item) => {
            return (
              <button
                onClick={() => onCitiesClicked(item)}
                key={item}
                style={{ padding: "1rem", margin: "10px", cursor: "pointer" }}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>
      <div className="Places">
        <hr size="8" width="90%" color="#519c95" />
      </div>

      <ul>
        {Object.values(places).map((place) => {
          console.log(place);

          return <li style={{ color: "black" }}>{place}</li>;
        })}
      </ul>
    </div>
  );
}
export default App;

// https://codesandbox.io/s/travel-diary-2-v96efz?file=/src/App.js
