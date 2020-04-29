import React, { useState } from "react";
import { connect } from "react-redux";
import Modal from "react-modal";
// import { setPeople } from "../../redux/campaign/campaignActions";
import {
  closePeopleModalThree,
  submitPeopleModalTwo,
} from "../../redux/people/peopleActions";
import { ReactComponent as CancelIcon } from "../../img/CancelIcon.svg";

import "./AddPeople.css";
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

const AddPeople = (props) => {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    company: "",
    title: "",
    country: "",
  });

  const { fname, lname, email, company, title, country } = formData;

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };
  const { modalIsOpen, closeModal, setPeople } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    let people = [];
    people.push(fname + " " + lname);
    people.push(email);
    people.push(company);
    people.push(title);
    people.push(country);
    console.log(people);
    setPeople([people]);
    setformData({
      fname: "",
      lname: "",
      email: "",
      company: "",
      title: "",
      country: "",
    });
    closeModal();
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <CancelIcon
          className="cross-btn"
          onClick={closeModal}
          cursor="pointer"
        />

        <p className="people-modal-one-heading">Add People</p>
        <hr style={{ margin: "25px 0" }} />
        <form onSubmit={handleSubmit} className="add-form">
          <div>
            <label htmlFor="fname">First Name</label>
            <input
              required
              type="text"
              id="fname"
              name="fname"
              value={fname}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <label htmlFor="lname">Last Name</label>
            <input
              required
              type="text"
              id="lname"
              name="lname"
              value={lname}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              required
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <label htmlFor="company">Company</label>
            <input
              required
              type="text"
              id="company"
              name="company"
              value={company}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <label htmlFor="title">Title</label>
            <input
              required
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div>
            <label htmlFor="country">Country</label>
            <input
              required
              type="text"
              id="country"
              name="country"
              value={country}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <button type="submit" className="people-submit-btn center-component">
            Continue
          </button>
        </form>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => ({
  modalIsOpen: state.people.modalIsOpenThree,
});

const mapDispatchToPrope = (dispatch) => ({
  closeModal: () => dispatch(closePeopleModalThree()),
  setPeople: (people) => dispatch(submitPeopleModalTwo(people)),
});

export default connect(mapStateToProps, mapDispatchToPrope)(AddPeople);
