import React from "react";
import "./Select.css";
const Select = ({ handleOnChange, name, required }) => {
  const cities = [
    "Jerusalem",
    "Tel Aviv",
    "Haifa",
    "Eilat",
    "Ramat Gan",
    "Kfar Saba",
    "Herzliya",
  ];
  return (
    <div className="selectContainer">
      <label>City</label>
      <select name={name} onChange={(e) => handleOnChange(e)} required>
        <option value="">Select City</option>
        {cities.map((city, id) => (
          <option value={city} key={id}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
