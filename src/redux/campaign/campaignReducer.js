const INITIAL_STATE = {
  showCampaignSteps: false,
  selectedSequence: "",
  selectedSchedule: "",
  selectedPeople: [],
};

const campaignReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SHOW_CAMPAIGN_STEPS": {
      return { ...state, showCampaignSteps: true };
    }

    case "SELECT_SEQUENCE":
      return {
        ...state,
        selectedSequence: action.payload,
      };

    case "SELECT_SCHEDULE":
      return {
        ...state,
        selectedSchedule: action.payload,
      };

    case "SET_PEOPLE":
      return {
        ...state,
        selectedPeople: [...state.selectedPeople, ...action.payload],
      };

    // case "SET_SCHEDULE_STEP":
    //   return {
    //     ...state,
    //     scheduleStep: true,
    //   };

    // case "SET_PEOPLE_STEP":
    //   return { ...state, peopleStep: true };

    // case "SET_SETTINGS_STEP":
    //   return {
    //     ...state,
    //     settingsStep: true,
    //   };

    // case "SET_REVIEW_STEP":
    //   return { ...state, reviewStep: true };

    // case "UNSET_SCHEDULE_STEP":
    //   return {
    //     ...state,
    //     scheduleStep: false,
    //   };

    // case "UNSET_PEOPLE_STEP":
    //   return { ...state, peopleStep: false };

    // case "UNSET_SETTINGS_STEP":
    //   return {
    //     ...state,
    //     settingsStep: false,
    //   };

    // case "UNSET_REVIEW_STEP":
    //   return { ...state, reviewStep: false };

    default:
      return state;
  }
};

export default campaignReducer;
