import React from "react";
import "./Loader.css";
import HashLoader from "react-spinners/HashLoader";

const Loader = () => {
  return (
    <div className="loaderContainer">
      <HashLoader />
    </div>
  );
};

export default Loader;
