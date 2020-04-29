import React from "react";
import { connect } from "react-redux";

const SequenceBody = (props) => {
  const { selectedSequence } = props;
  return (
    <div className="people-modal-two-body">
      <p className="people-modal-two__para1">Sequence Body</p>
      <p className="people-modal-two__para2">You selected {selectedSequence}</p>
    </div>
  );
};
const mapStateToProps = (state) => ({
  selectedSequence: state.campaign.selectedSequence,
});

export default connect(mapStateToProps)(SequenceBody);
