import React, { useState, useEffect } from "react";
import axios from "axios";
import NewCountryForm from "./components/NewCountryForm";
import CountryDisplay from "./components/CountryDisplay";
import "./App.css";

function App() {
  const [countries, setCountries] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("/countries")
      .then(res => {
        setCountries(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const addCountry = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const capital = e.target.capital.value;
    e.target.reset();
    axios
      .post("/addcountry", { name, capital })
      .then(res => {
        fetchData();
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="app-wrapper">
      <NewCountryForm addCountry={addCountry} />
      <CountryDisplay countries={countries} />
    </div>
  );
}

export default App;
