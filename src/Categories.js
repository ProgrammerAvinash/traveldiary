import React, { useState } from "react";
import "./Categories.css";
function Categories(props) {
  return (
    <div className="Container">
      <div className="Categories">
        <h2 className="cities"> {props.City}</h2>
      </div>
    </div>
  );
}
export default Categories;
