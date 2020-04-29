import React from "react";
import "./Maintab.css";
import { openStartModal } from "../../redux/startModal/startModalActions";
import { ReactComponent as PlusIcon2 } from "../../img/PlusIcon2.svg";
import { connect } from "react-redux";
import {
  nextStep,
  previousStep,
} from "../../redux/navigation/navigationActions";

const Maintab = (props) => {
  const {
    heading,
    nextButtons,
    page,
    openStartModal,
    nextStep,
    previousStep,
  } = props;
  return (
    <div className="main-tab">
      <p className="heading">{heading}</p>
      {nextButtons && page === "Campaigns" ? (
        <div className="btn-group">
          <div className="back-btn center-component" onClick={previousStep}>
            Back
          </div>
          <div className="skip-btn center-component" onClick={nextStep}>
            Skip
          </div>
          <div className="next-btn center-component" onClick={nextStep}>
            Next
          </div>
        </div>
      ) : page === "Campaigns" ? (
        <div>
          <button
            className="create-campaign__btn"
            onClick={() => openStartModal("Campaign", "sequence")}
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <PlusIcon2 />
            <p
              style={{
                fontSize: "20px",
                lineHeight: "24px",
                color: "white",
                fontWeight: "100",
              }}
            >
              Create Campaign
            </p>
          </button>
        </div>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => ({
  heading: state.navigation.currentNav,
  nextButtons: state.navigation.nextButtons,
});

const mapDispatchToProps = (dispatch) => ({
  openStartModal: (heading, subtitle) =>
    dispatch(openStartModal(heading, subtitle)),
  nextStep: () => dispatch(nextStep()),
  previousStep: () => dispatch(previousStep()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Maintab);
