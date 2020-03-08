import React from "react";

const NewCountryForm = props => {
  return (
    <form onSubmit={props.addCountry} className="form">
      <h2>Add country:</h2>
      <div className="form-section">
        <input type="text" id="name" name="name" placeholder="Name" />
      </div>
      <div className="form-section">
        <input type="text" id="capital" name="capital" placeholder="Capital" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewCountryForm;
