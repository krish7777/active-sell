import React from "react";
import "./PeopleCard.css";
const PeopleCard = (props) => {
  const { people } = props;

  return (
    <div className="people-heading">
      <div className="start-component name-field">{people[0]}</div>
      <div className="start-component field">{people[1]}</div>
      <div className="start-component field">{people[2]}</div>
      <div className="start-component field">{people[3]}</div>
      <div className="start-component field">{people[4]}</div>
    </div>
  );
};

export default PeopleCard;
