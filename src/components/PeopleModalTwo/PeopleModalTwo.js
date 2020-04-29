import React, { useState } from "react";
import { connect } from "react-redux";
import Modal from "react-modal";
import {
  submitPeopleModalTwo,
  closePeopleModalTwo,
  setCsvUploaded,
  setCsvName,
} from "../../redux/people/peopleActions";
import { ReactComponent as CancelIcon } from "../../img/CancelIcon.svg";
import { ReactComponent as RightArrowIcon } from "../../img/RightArrowIcon.svg";

import "./PeopleModalTwo.css";

import CSVReader from "react-csv-reader";

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

const PeopleModalTwo = (props) => {
  const {
    csvUploaded,
    closePeopleModalTwo,
    submitPeopleModalTwo,
    modalIsOpenTwo,
    setCsvUploaded,
    people,
    csvName,
    setCsvName,
  } = props;

  const [fileData, setfileData] = useState([]);
  const handleForce = (data, fileInfo) => {
    console.log(data);
    console.log(fileInfo.name);
    data.pop();
    data.shift();
    setfileData(data);
    setCsvName(fileInfo.name);
    setCsvUploaded();
  };

  console.log("People ->", people);
  return (
    <div>
      <Modal
        isOpen={modalIsOpenTwo}
        onRequestClose={closePeopleModalTwo}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <CancelIcon
          className="cross-btn"
          onClick={closePeopleModalTwo}
          cursor="pointer"
        />
        <h1 className="people-modal-one-heading">Import People</h1>

        <div className="people-modal-two-progressBar">
          <div className="center-component active-step">
            {" "}
            <p>Choose File</p>
            <div className="underline"></div>
          </div>
          <RightArrowIcon />
          <div className="center-component inactive-step">Map Attributes</div>
          <RightArrowIcon />
          <div className="center-component inactive-step">
            Review and Import
          </div>
        </div>
        <div className="people-modal-two-body">
          {csvUploaded ? (
            <p className="people-modal-two__para1">{csvName}</p>
          ) : (
            <p className="people-modal-two__para1">Upload a .csv file</p>
          )}
          {csvUploaded ? (
            <p className="people-modal-two__para2">
              You have uploaded the {csvName} file
            </p>
          ) : (
            <p className="people-modal-two__para2">
              please upload a Prospects CSV file
            </p>
          )}
          {/* <div>+ Select a .csv file</div> */}
          <CSVReader
            inputStyle={{
              border: "2px solid #FF006E",
              color: "#FF006E",
              borderRadius: "4px",
              fontSize: "20px",
              lineHeight: "24px",
              marginBottom: "100px",
            }}
            label=""
            onFileLoaded={handleForce}
            className="style-reader"
          />
        </div>

        {csvUploaded ? (
          <div
            className="people-submit-btn center-component"
            onClick={() => submitPeopleModalTwo(fileData)}
          >
            Continue
          </div>
        ) : null}
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => ({
  modalIsOpenTwo: state.people.modalIsOpenTwo,
  csvUploaded: state.people.csvUploaded,
  people: state.campaign.selectedPeople,
  csvName: state.people.csvName,
});

const mapDispatchToProps = (dispatch) => ({
  closePeopleModalTwo: () => dispatch(closePeopleModalTwo()),
  submitPeopleModalTwo: (people) => dispatch(submitPeopleModalTwo(people)),
  setCsvUploaded: () => dispatch(setCsvUploaded()),
  // setPeople: (people) => dispatch(setPeople(people)),
  setCsvName: (name) => dispatch(setCsvName(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PeopleModalTwo);
