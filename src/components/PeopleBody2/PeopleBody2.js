import React from "react";
import { connect } from "react-redux";
import { openPeopleModalOne } from "../../redux/people/peopleActions";

import PeopleCard from "../PeopleCard/PeopleCard";

import { openPeopleModalThree } from "../../redux/people/peopleActions";

const PeopleBody2 = (props) => {
  const {
    selectedPeople,

    openModal,
  } = props;

  return (
    <div className="people-body">
      <div className="people-functions">
        <div className="center-component filter-btn">Filters</div>
        <div className="center-component search-btn">Search</div>
        <div className="center-component add-btn" onClick={openModal}>
          + Add People
        </div>
      </div>
      <div className="people-heading">
        <div className="start-component people-name">Name</div>
        <div className="start-component people-field">Email</div>
        <div className="start-component people-field">Company</div>
        <div className="start-component people-field">Title</div>
        <div className="start-component people-field">Country</div>
      </div>
      {selectedPeople.length > 0 && (
        <div>
          {selectedPeople.map((people, i) => (
            <PeopleCard key={i} people={people} />
          ))}
        </div>
      )}
    </div>
  );
};

const mapStatetoProps = (state) => ({
  shouldModalShow: state.navigation.peopleDone,
  selectedPeople: state.campaign.selectedPeople,
});

const mapDispatchToProps = (dispatch) => ({
  openPeopleModalOne: () => dispatch(openPeopleModalOne()),
  openModal: () => dispatch(openPeopleModalThree()),
});

export default connect(mapStatetoProps, mapDispatchToProps)(PeopleBody2);
