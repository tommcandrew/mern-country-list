import React from "react";

const CountryDisplay = ({ countries }) => {
  if (!countries || countries.length === 0) {
    return <h2>No countries saved</h2>;
  } else {
    return (
      <div className="display-wrapper">
        <h2>Country List</h2>
        <table>
          <thead>
            <tr>
              <th>Country</th>
              <th>Capital</th>
            </tr>
          </thead>
          <tbody>
            {countries.map((country, index) => (
              <tr key={index}>
                <td>{country.name}</td>
                <td>{country.capital}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
};

export default CountryDisplay;
