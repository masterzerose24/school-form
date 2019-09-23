import React, { Component, Fragment } from "react";
import { Row, Col, Badge, OverlayTrigger, Popover } from "react-bootstrap";
import { formSections } from "util/constants/formSections";

const NameContainer = () => {
  return (
    <Row className="inputs-container">
      <Col md="6" className="field">
        <label htmlFor="firstname">First Name</label>
        <input type="text" id="firstname" />
      </Col>
      <Col md="6" className="field">
        <label htmlFor="lastname">Last Name</label>
        <input type="text" id="lastname" />
      </Col>
    </Row>
  );
};

const AddressContainer = props => {
  const { isShow } = props;
  if (!isShow) return <Row></Row>;
  return (
    <Row className="inputs-container">
      <Col md="12" className="field">
        <label htmlFor="address">Address</label>
        <input type="text" id="address" />
      </Col>
    </Row>
  );
};

const SecondaryAddressContainer = props => {
  const { isShow } = props;
  if (!isShow) return <Row></Row>;
  return (
    <Row className="inputs-container">
      <Col md="4" className="field">
        <label htmlFor="city">City</label>
        <input type="text" id="city" />
      </Col>
      <Col md="4" className="field">
        <label htmlFor="state">State</label>
        <select id="state">
          <option>VA</option>
          <option>AV</option>
          <option>SD</option>
        </select>
      </Col>
      <Col md="4" className="field">
        <label htmlFor="zip">Zip Code</label>
        <input type="text" id="zip" />
      </Col>
    </Row>
  );
};

const TooltipTrigger = (props) => {
  const { params: {title, message}  } = props
  return (
    <OverlayTrigger
      trigger="hover"
      placement="top"
      overlay={
        <Popover id={`popover-positioned-top`}>
          <Popover.Title as="h3">{`${title}`}</Popover.Title>
          <Popover.Content>
            <p className="tooltip-message">{message}</p>
          </Popover.Content>
        </Popover>
      }
    >
      <Badge pill variant="info">
        ?
      </Badge>
    </OverlayTrigger>
  );
};

const ContactContainer = props => {
  const { isGuardianPage } = props;
  const tooltipMessages = {
    studentId: {
      title: 'Student ID',
      message: 'Please use your student ID given by your school'
    },
    email: {
      title: 'Student Email',
      message: 'This email will be used to recover your account if you forget your password'
    }
  }

  const studentFields = (
    <Fragment>
      <Col md="6" className="field">
        <span className="with-tooltip">
          <label htmlFor="studentId">Student ID</label>
          <TooltipTrigger params={tooltipMessages.studentId}/>
        </span>
        <input type="text" id="studentId" />
      </Col>
      <Col md="6" className="field">
        <span className="with-tooltip">
          <label htmlFor="email">Email</label>
          <TooltipTrigger params={tooltipMessages.email} />
        </span>
        <input type="email" id="email" />
      </Col>
    </Fragment>
  );

  const guardianFields = (
    <Fragment>
      <Col md="6" className="field">
        <span className="with-tooltip">
          <label htmlFor="email">Email</label>
          <TooltipTrigger params={tooltipMessages.email} />
        </span>
        <input type="email" id="email" />
      </Col>
      <Col md="6" className="field">
        <label htmlFor="phoneNumber">Phone Number</label>
        <input type="phoneNumber" id="phoneNumber" />
      </Col>
    </Fragment>
  );

  return (
    <Row className="inputs-container">
      {isGuardianPage ? guardianFields : studentFields}
    </Row>
  );
};

const PasswordContainer = props => {
  const { isShow } = props;
  if (!isShow) return <Row></Row>;
  return (
    <Row className="inputs-container">
      <Col md="6" className="field">
        <label htmlFor="pword">Password</label>
        <input type="password" id="pword" />
      </Col>
      <Col md="6" className="field">
        <label htmlFor="confirmPword">Confirm Password</label>
        <input type="password" id="confirmPword" />
      </Col>
    </Row>
  );
};

export default class StudentForm extends Component {
  render() {
    const { title, type } = this.props;
    const isEmergencyContact = type !== formSections[3];
    const isGuardianPage = type !== formSections[1];
    return (
      <div className="form-container">
        <Row className="school-name">
          <h2>
            {type === formSections[1]
              ? "Bank Street College of Education (Graduate School)"
              : ""}
          </h2>
        </Row>
        <Row className="title">
          <h2>{title}</h2>
        </Row>
        <NameContainer />
        <AddressContainer isShow={isEmergencyContact} />
        <SecondaryAddressContainer isShow={isEmergencyContact} />
        <ContactContainer isGuardianPage={isGuardianPage} />
        <PasswordContainer isShow={isEmergencyContact} />
      </div>
    );
  }
}
