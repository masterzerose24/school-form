import React, { Component, Fragment } from "react";
import { Row, Col } from "react-bootstrap";

const dataMapper = data => {
  const dummyStudent = {
    title: 'Student Information',
    firstName: "John",
    lastName: "Doe",
    school: "Rusty Lakes College",
    address: "123 Main St. New York, Ny 5555",
    studentId: "pd48",
    email: "sample@zero.com"
  };
  const dummyParent = {
    title: 'Parent Information',
    firstName: "Jane",
    lastName: "Doe",
    address: "123 Main St. New York, Ny 5555",
    phoneNumber: "+948201992",
    email: "parent@zero.com",
  };
  const dummyEmergency = {
    title: 'Emergency Contact',
    firstName: "James",
    lastName: "Doe",
    address: "123 Main St. New York, Ny 5555",
    phoneNumber: "+94s8201992",
    email: "parent@zero.com",
  };

  return data || [dummyStudent, dummyParent, dummyEmergency];
};

const FIELD_NAMES = {
  firstName: "First Name",
  lastName: "Last Name",
  school: "School",
  address: "Address",
  studentId: "Student ID",
  email: "Email",
  phoneNumber: "Phone Number"
};

const InfoCard = props => {
  const { cardData } = props;
  const { title, firstName, lastName } = cardData;
  delete cardData.firstName;
  delete cardData.lastName;
  delete cardData.title;

  const Name = (
    <div className="name-field">
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
    </div>
  );

  const CardTitle = (
    <h2 className="card-title">
      {title}
    </h2>
  )

  return (
    <Fragment>
      {CardTitle}
      {Name}
      {Object.keys(cardData).map((property, idx) => (
        <p key={idx}>{`${FIELD_NAMES[property]}: ${cardData[property]}`}</p>
      ))}
    </Fragment>
  );
};

export default class ConfirmationPage extends Component {
  render() {
    const { finalData } = this.props;
    const mappedData = dataMapper(finalData);
    return (
      <Row className="confirmation-page">
        {mappedData.map((data, key) => (
          <Col md="4" className="card" key={key}>
            <InfoCard cardData={data} ></InfoCard>
          </Col>
        ))}
      </Row>
    );
  }
}
