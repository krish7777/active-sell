import React from "react";
import { connect } from "react-redux";
import SequenceBody from "../SequenceBody/SequenceBody";
import ScheduleBody from "../ScheduleBody/ScheduleBody";
import PeopleBody from "../PeopleBody/PeopleBody";
import CampaignSteps from "../CampaignSteps/CampaignSteps";
import DefaultBody from "../DefaultBody/DefaultBody";

const MainContent = (props) => {
  // #E5E5E5
  const { currentStep, currentNav } = props;
  let el;
  if (currentStep === "sequence") el = <SequenceBody />;
  else if (currentStep === "schedule") el = <ScheduleBody />;
  else if (currentStep === "people") el = <PeopleBody />;
  else el = <DefaultBody />;

  if (currentNav !== "Campaigns") {
    console.log("kkkkkkk");
    el = <DefaultBody />;
  }
  return (
    <div className="main-content__main">
      <CampaignSteps />

      {el}
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentStep: state.navigation.currentStep,
  currentNav: state.navigation.currentNav,
});
export default connect(mapStateToProps)(MainContent);
