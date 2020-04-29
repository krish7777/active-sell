const INITIAL_STATE = {
  currentNav: "People",
  currentStep: "sequence",
  nextButtons: false,
  sequenceDone: false,
  scheduleDone: false,
  peopleDone: false,
  sequenceStep: true,
  scheduleStep: false,
  peopleStep: false,
  settingsStep: false,
  reviewStep: false,
};

const navigationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CHANGE_NAVIGATION":
      return { ...state, currentNav: action.payload };

    case "NEXT_STEP": {
      if (state.currentStep === "sequence")
        return { ...state, currentStep: "schedule", scheduleStep: true };
      else if (state.currentStep === "schedule")
        return { ...state, currentStep: "people", peopleStep: true };
      else if (state.currentStep === "people")
        return { ...state, currentStep: "settings", settingsStep: true };
      else if (state.currentStep === "settings")
        return { ...state, currentStep: "review", reviewStep: true };
      else return state;
    }

    case "PREVIOUS_STEP": {
      if (state.currentStep === "schedule")
        return { ...state, currentStep: "sequence", scheduleStep: false };
      else if (state.currentStep === "people")
        return { ...state, currentStep: "schedule", peopleStep: false };
      else if (state.currentStep === "settings")
        return { ...state, currentStep: "people", settingsStep: false };
      else if (state.currentStep === "review")
        return { ...state, currentStep: "settings", reviewStep: false };
      else return state;
    }
    case "SHOW_NEXT_BUTTONS": {
      return { ...state, nextButtons: true };
    }
    case "HIDE_NEXT_BUTTONS": {
      return { ...state, nextButtons: false };
    }

    case "SEQUENCE_DONE": {
      return { ...state, sequenceDone: true };
    }
    case "SCHEDULE_DONE": {
      return { ...state, scheduleDone: true };
    }
    case "PEOPLE_DONE": {
      return { ...state, peopleDone: true };
    }

    default:
      return state;
  }
};

export default navigationReducer;
