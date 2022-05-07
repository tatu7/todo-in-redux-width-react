import React from "react";
import "./form.css";
function Form() {
  return (
    <div className="container">
      <form className="form">
        <div className="form--search">
          <input type="text" placeholder=" Search for your notes.." />
        </div>
      </form>
    </div>
  );
}

export default Form;
