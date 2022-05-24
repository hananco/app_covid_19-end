import axios from "axios";

// Get All Data
const getData = async () => {
  return await axios.get("http://127.0.0.1:8000/");
};

// Filter Data By Date
const filterByDate = async (selectedDate) => {
  return await axios.post("http://127.0.0.1:8000/datefilter/", selectedDate);
};

// Filter Data By City
const filterByCity = async (selectedcity) => {
  return await axios.post("http://127.0.0.1:8000/cityfilter/", selectedcity);
};

const citizensService = { getData, filterByDate, filterByCity };

export default citizensService;
