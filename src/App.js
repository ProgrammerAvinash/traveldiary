import React, { useState } from "react";
import Categories from "./Categories";
import "./App.css";

function App() {
  // var [Cities, setCities] = useState("");
  var [places, setPlaces] = useState("");

  var cityCategories = {
    Pune: [
      "  Icskon Temple : 4/5 ",
      " Dagdushet Ganpati : 4/5 ",
      " Shaniwar wada  4/5",
    ],
    Mumbai: [
      " Marine Drive : 3/5 ",
      "Rani Baug : 4/5",
      " Taraporevala Aquarium : 4/5",
    ],
    Amritsar: [
      " Golden Temple : 4.5/5 ",
      " Jallianwala Baug : 4.5/5",
      " Partition Museum : 3.5/5 ",
    ],
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
                style={{
                  border: " 0.5px black solid",
                  width: "6rem",
                  borderRadius: "5px",
                  backgroundColor: "#ff6600",
                  padding: "1rem",
                  margin: "10px",
                  cursor: "pointer",
                }}
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
          return (
            <div className="placeContainer" key={place}>
              <li key={place} style={{ color: "black" }}>
                {place}
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
export default App;

// https://codesandbox.io/s/travel-diary-2-v96efz?file=/src/App.js
