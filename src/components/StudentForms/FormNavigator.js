import React, { Component, Fragment } from "react";
import { Stepper, Step, StepLabel, Button } from "@material-ui/core";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import SchoolList from "./Forms/SchoolList";
import InfoForm from "./Forms/InfoForm";
import ConfirmationPage from "./Forms/ConfirmationPage";
import { formSections, formTitles } from "util/constants/formSections";
import "./style.scss";
import "./Forms/styles.scss";

const FormStepper = props => {
  return (
    <Fragment>
      <Stepper activeStep={props.activeStep} alternativeLabel>
        {formSections.map(section => (
          <Step key={section}>
            <StepLabel>{section}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Fragment>
  );
};

const StepsNavigator = props => {
  const { navigatorClickHandler, currentStep } = props;
  return (
    <Fragment>
      <Button
        className="previous"
        variant="contained"
        color="secondary"
        onClick={e => navigatorClickHandler(false)}
      >
        Previous
      </Button>
      <Button
        className="next"
        variant="contained"
        color="primary"
        onClick={e => navigatorClickHandler(true)}
      >
        { currentStep === 4 ? 'Submit' : 'Next'}
      </Button>
    </Fragment>
  );
};

const FormSwitcher = props => {
  const { currentStep } = props;
  const PAGES = {
    SCHOOL_LIST: 0,
    CONFIRMATION_PAGE: 4
  };

  switch (currentStep) {
    case PAGES.SCHOOL_LIST:
      return <SchoolList></SchoolList>;
    case PAGES.CONFIRMATION_PAGE:
      return <ConfirmationPage></ConfirmationPage>;
    default:
      return (
        <InfoForm
          title={formTitles[formSections[currentStep]]}
          type={formSections[currentStep]}
        />
      );
  }
};

export default class FormNavigator extends Component {
  state = {
    activeStep: 1
  };

  navigatorClickHandler = isNext => {
    const { activeStep } = this.state;
    const newActiveStep = isNext ? activeStep + 1 : activeStep - 1;
    if (newActiveStep === -1 || newActiveStep === 5) return;
    this.setState({
      activeStep: newActiveStep
    });
  };

  render() {
    const { activeStep } = this.state;
    return (
      <div className="form-navigator">
        <div className="stepper">
          <FormStepper activeStep={activeStep} />
        </div>
        <div className="form">
          <TransitionGroup>
            <CSSTransition
              in={true}
              appear={true}
              timeout={300}
              key={activeStep}
              exit={false}
              classNames="fade"
            >
              <FormSwitcher currentStep={activeStep}></FormSwitcher>
            </CSSTransition>
          </TransitionGroup>
        </div>
        <div className="steps-navigator">
          <StepsNavigator
            currentStep={activeStep}
            navigatorClickHandler={this.navigatorClickHandler}
          />
        </div>
      </div>
    );
  }
}
