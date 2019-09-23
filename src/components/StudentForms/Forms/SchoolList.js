import React, { Component } from "react";

const schoolList = [
  "Bank Street College of Education (Graduate School)",
  "Bard College, Annandale-on-Hudson",
  "Barnard College",
  "Brooklyn Law School",
  "Cazenovia College",
  "Clarkson University"
];

const School = props => {
  const styles = {
    textDecoration: "none"
  };

  return (
    <li>
      <a href="#" className={`school-label ${props.isSelected ? 'selected' : ''}`} style={styles}>
        {props.label}
      </a>
    </li>
  );
};

export default class SchoolList extends Component {
  render() {
    return (
      <div className="school-list">
        <h1 className="school-title">
          Select school from List
        </h1>
        <ul className="schools">
          {schoolList.map((school, key) => (
            <School key={key} label={school}></School>
          ))}
        </ul>
      </div>
    );
  }
}
