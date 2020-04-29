const INITIAL_STATE = {
  contentName: "",
  modalIsOpen: false,
  contents: [],
  // selectedSequence: "",
  // selectedSchedule: "",
  scheduleContents: [
    "Local TimeZone",
    "New York timezone",
    "London timezone",
    "Paris timezone",
    "S.Fransico timezone",
    "Tokyo timezone",
    "Custom template 1",
    "Custom template 2",
  ],
  sequenceContents: [
    "Get new Clients",
    "Convert more visitors",
    "Tinder for sales",
    "Video on Emails",
    "Direct",
    "Honest and sorry",
    "Custom template 1",
    "Custom template 2",
  ],
};

const secondModalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "OPEN_SEQUENCE_MODAL":
      return {
        ...state,
        modalIsOpen: true,
        contentName: "sequence",
        contents: state.sequenceContents,
      };
    case "OPEN_SCHEDULE_MODAL":
      return {
        ...state,
        modalIsOpen: true,
        contentName: "schedule",
        contents: state.scheduleContents,
      };

    // case "SELECT_SEQUENCE":
    //   return {
    //     ...state,
    //     modalIsOpen: false,
    //     selectedSequence: action.payload,
    //   };

    // case "SELECT_SCHEDULE":
    //   return {
    //     ...state,
    //     modalIsOpen: false,
    //     selectedSchedule: action.payload,
    //   };

    case "CLOSE_SECOND_MODAL":
      return {
        ...state,
        modalIsOpen: false,
      };
    default:
      return state;
  }
};

export default secondModalReducer;
