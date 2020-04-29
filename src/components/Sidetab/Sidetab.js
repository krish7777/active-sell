import React from "react";
import "./Sidetab.css";
import { ReactComponent as DashboardIcon } from "../../img/DashboardIcon.svg";
import { ReactComponent as CampaignsIcon } from "../../img/CampaignsIcon.svg";
import { ReactComponent as PeopleIcon } from "../../img/PeopleIcon.svg";
import { ReactComponent as SettingsIcon } from "../../img/SettingsIcon.svg";
import { ReactComponent as TemplatesIcon } from "../../img/TemplatesIcon.svg";
import { ReactComponent as ProfileIcon } from "../../img/ProfileIcon.svg";
import { connect } from "react-redux";
import { changeNavigation } from "../../redux/navigation/navigationActions";

const Sidetab = ({ curNav, setCurNav }) => {
  return (
    <div className="sidetab">
      <a href="https://www.activesell.io/" alt="ACtiveSell Logo">
        <div className="logo">
          <img
            className="logo2"
            src="https://landen.imgix.net/cm9rjuxusw6a/assets/kp1w1525.jpg?w=400"
            alt="logo"
          ></img>
        </div>
      </a>

      <div className="navOptions">
        <div
          onClick={() => setCurNav("Dashboard")}
          className={curNav === "Dashboard" ? "side-btn_active" : "side-btn"}
        >
          <DashboardIcon />
          <p>Dashboard</p>
        </div>

        <div
          onClick={() => setCurNav("People")}
          className={curNav === "People" ? "side-btn_active" : "side-btn"}
        >
          <PeopleIcon />
          <p>People</p>
        </div>
        <div
          onClick={() => setCurNav("Campaigns")}
          className={curNav === "Campaigns" ? "side-btn_active" : "side-btn"}
        >
          <CampaignsIcon />
          <p>Campaigns</p>
        </div>
        <div
          onClick={() => setCurNav("Templates")}
          className={curNav === "Templates" ? "side-btn_active" : "side-btn"}
        >
          <TemplatesIcon />
          <p>Templates</p>
        </div>
        <div
          onClick={() => setCurNav("Settings")}
          className={curNav === "Settings" ? "side-btn_active" : "side-btn"}
        >
          <SettingsIcon />
          <p>Settings</p>
        </div>
      </div>
      <div style={{ position: "absolute", bottom: 0, width: "15vw" }}>
        <hr style={{ width: "80%", margin: "auto" }} />
        <div className="lastButton">
          <div className="side-btn">
            <ProfileIcon />
            <p>Profile</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  curNav: state.navigation.currentNav,
});

const mapDispatchToProps = (dispatch) => ({
  setCurNav: (nav) => dispatch(changeNavigation(nav)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidetab);
