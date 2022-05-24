import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Info.css";
import Input from "../../Components/Input/Input";
import Select from "../../Components/Select/Select";
import Loader from "../../Components/Loader/Loader";
import Table from "../../Components/Table/Table";
import citizensService from "../../Services/citizensService";

const Info = () => {
  const [citizens, setCitizensInfo] = useState([]);
  const [filterCondition, setFilterCondition] = useState("");
  const [selectedcity, setSelectedsetCity] = useState({ city: "" });
  const [selectedDate, setSelectedDate] = useState({ from: "", to: "" });
  const [isLoading, setIsLoading] = useState(false);

  // Get All Data
  const getData = async () => {
    setIsLoading(true);
    citizensService
      .getData()
      .then(({ data }) => {
        setIsLoading(false);
        setCitizensInfo(data);
      })
      .catch((error) => {
        console.log({ error });
      });
  };

  // Filter Data By Date
  const filterByDate = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    citizensService
      .filterByDate(selectedDate)
      .then(({ data }) => {
        setIsLoading(false);
        setCitizensInfo(data);
      })
      .catch((error) => {
        console.log({ error });
      });
  };

  // Filter Data By City
  const filterByCity = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    citizensService
      .filterByCity(selectedcity)
      .then(({ data }) => {
        setIsLoading(false);
        setCitizensInfo(data);
      })
      .catch((error) => {
        console.log({ error });
      });
  };
  // Set Filter Condition
  const setCondition = (e) => {
    setFilterCondition(e.target.value);
  };

  // Setting the selected city into the useState hook
  const handleSelectedCity = (e) => {
    setSelectedsetCity({ ...selectedcity, ["city"]: e.target.value });
  };

  const handleSelectedDate = (e) => {
    setSelectedDate({ ...selectedDate, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    getData();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="infoContainer">
      <div className="filterContainer">
        <div className="filterSelction">
          {/* <small>Info Filter</small> */}
          <select onChange={(e) => setCondition(e)}>
            {/* <option value="all">All</option> */}
            <option value="date">Filter by date</option>
            <option value="city">Filter by City</option>
          </select>
          <button className="filterbutton" onClick={getData}>
            Show All
          </button>
        </div>
        <div className="filterBar">
          {filterCondition === "date" && (
            <form className="filterForm" onSubmit={filterByDate}>
              <div>
                <Input
                  handleOnChange={handleSelectedDate}
                  type="date"
                  name="from"
                  label="From Date"
                  required={true}
                />
              </div>
              <div>
                <Input
                  handleOnChange={handleSelectedDate}
                  type="date"
                  name="to"
                  label="To Date"
                  required={true}
                />
              </div>
              <button className="filterbutton">Search</button>
            </form>
          )}
          {filterCondition === "city" && (
            <form className="filterForm" onSubmit={filterByCity}>
              <div>
                <Select handleOnChange={(e) => handleSelectedCity(e)} />
              </div>
              <button className="filterbutton" type="submit">
                Search
              </button>
            </form>
          )}
        </div>
      </div>
      <Table citizens={citizens} />
      <div className="backButton">
        <Link to="/">
          <button>&lArr; Back to form</button>
        </Link>
      </div>
    </div>
  );
};

export default Info;
