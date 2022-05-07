import React, { useState } from "react";
import { connect } from "react-redux";
import { addCardAction } from "../../redux/actions";
import "./card.css";
import CardList from "./CardList";
function Card(props) {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <div className="cards">
        <div className="card">
          <textarea
            onChange={handleChange}
            cols="30"
            rows="10"
            className="card--input-2"
          ></textarea>
          <div className="card--footer">
            <p className="card--limit">{300 - value.length}</p>
            <button
              onClick={() => {
                let id = Date.now();
                props.addCardAction({ value, id });
                document.querySelector(".card--input-2").value = "";
              }}
              className="card--delete-btn"
            >
              Save
            </button>
          </div>
        </div>
        <CardList />
      </div>
    </>
  );
}
const getMyState = (state) => state;
export default connect(getMyState, {
  addCardAction,
})(Card);
