import React from "react";
import { connect } from "react-redux";
import "./CampaignSteps.css";
import { ReactComponent as TickIcon } from "../../img/TickIcon.svg";

const CampaignSteps = (props) => {
  const {
    showCampaignSteps,
    scheduleStep,
    peopleStep,
    currentStep,
    settingsStep,
    reviewStep,
    sequenceDone,
    scheduleDone,
    peopleDone,
  } = props;
  const el = showCampaignSteps ? (
    <div className="campaign-steps">
      <div
        className={`step campaigntrue  ${
          currentStep === "sequence" ? "current-step" : ""
        }`}
      >
        <div className={`number-btntrue`}>
          {sequenceDone ? (
            <TickIcon className="tick-btn" />
          ) : (
            <p className="tick-btn center-component">1</p>
          )}
        </div>
        <div className="step-text">Sequence</div>
      </div>
      <div
        className={`step campaign${scheduleStep}  ${
          currentStep === "schedule" ? "current-step" : ""
        }`}
      >
        <div className={`number-btn${scheduleStep}`}>
          {scheduleDone ? (
            <TickIcon className="tick-btn" />
          ) : (
            <p className="tick-btn center-component">2</p>
          )}
        </div>
        <div className="step-text">Schedule</div>
      </div>
      <div
        className={`step campaign${peopleStep}  ${
          currentStep === "people" ? "current-step" : ""
        }`}
      >
        <div className={`number-btn${peopleStep}`}>
          {peopleDone ? (
            <TickIcon className="tick-btn" />
          ) : (
            <p className="tick-btn center-component">3</p>
          )}
        </div>
        <div className="step-text">People</div>
      </div>
      <div
        className={`step campaign${settingsStep}  ${
          currentStep === "settings" ? "current-step" : ""
        }`}
      >
        <div className={`number-btn${settingsStep}`}>
          <p className="tick-btn center-component">4</p>
        </div>
        <div className="step-text">Settings</div>
      </div>
      <div
        className={`step campaign${reviewStep}  ${
          currentStep === "review" ? "current-step" : ""
        }`}
      >
        <div className={`number-btn${reviewStep}`}>
          <p className="tick-btn center-component">5</p>
        </div>
        <div className="step-text">Review</div>
      </div>
    </div>
  ) : null;
  return el;
};

const mapStateToProps = (state) => ({
  currentStep: state.navigation.currentStep,
  showCampaignSteps: state.campaign.showCampaignSteps,
  scheduleStep: state.navigation.scheduleStep,
  peopleStep: state.navigation.peopleStep,
  settingsStep: state.navigation.settingsStep,
  reviewStep: state.navigation.reviewStep,
  sequenceDone: state.navigation.sequenceDone,
  scheduleDone: state.navigation.scheduleDone,
  peopleDone: state.navigation.peopleDone,
});

export default connect(mapStateToProps)(CampaignSteps);
