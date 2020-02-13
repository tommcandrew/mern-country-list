import React from "react";

const NewCountryForm = props => {
  return (
    <form onSubmit={props.addCountry}>
      <h2>Add country</h2>
      <div className="form-section">
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" name="name" />
      </div>
      <div className="form-section">
        <label htmlFor="capital">Capital: </label>
        <input type="text" id="capital" name="capital" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewCountryForm;
