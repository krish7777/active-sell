import React from "react";
import "./App.css";
import Sidetab from "./components/Sidetab/Sidetab";
import Maintab from "./components/Maintab/Maintab";
import { connect } from "react-redux";
import StartModal from "./components/StartModal/StartModal";
import SecondModal from "./components/SecondModal/SecondModal";
import MainContent from "./components/MainContent/MainContent";
import PeopleModalOne from "./components/PeopleModalOne/PeopleModalOne";
import PeopleModalTwo from "./components/PeopleModalTwo/PeopleModalTwo";
import AddPeople from "./components/AddPeople/AddPeople";
import DefaultBody from "./components/DefaultBody/DefaultBody";
import PeopleBody2 from "./components/PeopleBody2/PeopleBody2";

const App = ({ curNav, peopleDone }) => {
  return (
    <div className="App">
      <Sidetab />
      <div className="main-content">
        <Maintab page={curNav} />
        {curNav === "Campaigns" ? (
          <MainContent />
        ) : curNav !== "People" ? (
          <DefaultBody />
        ) : peopleDone ? (
          <PeopleBody2 />
        ) : (
          <DefaultBody />
        )}
      </div>

      <StartModal />
      <SecondModal />
      <PeopleModalOne />
      <PeopleModalTwo />
      <AddPeople />
    </div>
  );
};

const mapStateToProps = (state) => ({
  curNav: state.navigation.currentNav,
  peopleDone: state.navigation.peopleDone,
});

export default connect(mapStateToProps)(App);
