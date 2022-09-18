import React, { useState } from "react";
import Categories from "./Categories";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 className="heading">
        <img
          alt="logo"
          height="50px"
          style={{ position: "absolute", left: "15.5rem", top: "1rem" }}
          src="https://media.istockphoto.com/vectors/happy-travel-case-vector-illustration-vector-id1272521633?k=20&m=1272521633&s=612x612&w=0&h=_Is7jGiouNTpRTewuPKSAQ32Yq13p2B3K30Br0U97_g="
        />{" "}
        Travel Diary{" "}
      </h1>
      <p>Checkout Tourist Places to Visit in Cities</p>
      <div className="Categories">
        <Categories City="Pune" />
        <Categories City="Mumbai" />
        <Categories City="Amritsar" />
      </div>
    </div>
  );
}
export default App;
