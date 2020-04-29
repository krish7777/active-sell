import React from "react";
import { connect } from "react-redux";
import Modal from "react-modal";
import {
  closePeopleModalOne,
  submitPeopleModalOne,
  submitPeopleModalOneForThree,
} from "../../redux/people/peopleActions";
import { ReactComponent as CancelIcon } from "../../img/CancelIcon.svg";
import "./PeopleModalOne.css";
import { ReactComponent as CreateManuallyIcon } from "../../img/CreateManuallyIcon.svg";
import { ReactComponent as AddFromExistingIcon } from "../../img/AddFromExistingIcon.svg";
import { ReactComponent as ImportFromCSVIcon } from "../../img/ImportFromCSVIcon.svg";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "990px",
  },
};

const PeopleModalOne = (props) => {
  const {
    modalIsOpenOne,
    closePeopleModalOne,
    submitPeopleModalOne,
    openPeopleModalThree,
  } = props;
  return (
    <div>
      <Modal
        isOpen={modalIsOpenOne}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closePeopleModalOne}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <CancelIcon
          className="cross-btn"
          onClick={closePeopleModalOne}
          cursor="pointer"
        />

        <p className="people-modal-one-heading">Add People to Campaign</p>
        <p className="people-modal-one-heading">
          You can skip this step and do it later as well
        </p>

        <div className="modal-one-body">
          <div className="modal-one__inner">
            <div onClick={submitPeopleModalOne} style={{ cursor: "pointer" }}>
              <ImportFromCSVIcon className="people-modal-svg" />
              <p className="modal-one__inner-heading">Import from CSV</p>
            </div>

            <p className="modal-one__inner-para">
              Add Contacts from CSV file to prospects list via bulk upload.
            </p>
          </div>
          <div className="modal-one__inner">
            <div onClick={submitPeopleModalOne} style={{ cursor: "pointer" }}>
              <AddFromExistingIcon
                style={{ transform: "translateX(35px)", marginBottom: "25px" }}
              />
              <p className="modal-one__inner-heading">Add from Existing</p>
            </div>

            <p className="modal-one__inner-para">
              Add Contacts from the prospects list
            </p>
          </div>
          <div className="modal-one__inner">
            <div onClick={openPeopleModalThree} style={{ cursor: "pointer" }}>
              <CreateManuallyIcon className="people-modal-svg" />
              <p className="modal-one__inner-heading">Create Manually</p>
            </div>

            <p className="modal-one__inner-para">
              Add Contacts to prospects list one by one
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => ({
  modalIsOpenOne: state.people.modalIsOpenOne,
});

const mapDispatchToProps = (dispatch) => ({
  closePeopleModalOne: () => dispatch(closePeopleModalOne()),
  submitPeopleModalOne: () => dispatch(submitPeopleModalOne()),
  openPeopleModalThree: () => dispatch(submitPeopleModalOneForThree()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PeopleModalOne);
