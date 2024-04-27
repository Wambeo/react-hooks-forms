import React from "react";

function Form({
  firstName,
  lastName,
  number,
  handleFirstNameChange,
  handleLastNameChange,
  handleNumberChange,
  isInvalidNumber,
}) {
  return (
    <form>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <input type="number" onChange={handleNumberChange} value={number} />{ isInvalidNumber ? <span style = {{color: "red"}}>
        {isInvalidNumber}
      </span> : null}
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;