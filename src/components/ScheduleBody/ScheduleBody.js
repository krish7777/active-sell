import React, { useEffect } from "react";
import { connect } from "react-redux";
import { openStartModal } from "../../redux/startModal/startModalActions";

const ScheduleBody = (props) => {
  const { shouldModalShow, openStartModal, selectedSchedule } = props;
  useEffect(() => {
    if (!shouldModalShow) {
      console.log("got to open");
      openStartModal();
    }
  }, [shouldModalShow, openStartModal]);
  return (
    <div className="people-modal-two-body">
      <p className="people-modal-two__para1">Schedule Body</p>
      <p className="people-modal-two__para2">You selected {selectedSchedule}</p>
    </div>
  );
};

const mapStatetoProps = (state) => ({
  shouldModalShow: state.navigation.scheduleDone,
  selectedSchedule: state.campaign.selectedSchedule,
});

const mapDispatchToProps = (dispatch) => ({
  openStartModal: () => dispatch(openStartModal("Schedule", "schedule")),
});

export default connect(mapStatetoProps, mapDispatchToProps)(ScheduleBody);
