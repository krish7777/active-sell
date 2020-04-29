const INITIAL_STATE = {
  heading: "Campaign",
  subtitle: "sequence",
  modalIsOpen: false,
};

const startModalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "OPEN_START_MODAL":
      return {
        ...state,
        modalIsOpen: true,
        heading: action.payload.heading,
        subtitle: action.payload.subtitle,
      };
    case "CLOSE_START_MODAL":
      return {
        ...state,
        modalIsOpen: false,
      };
    default:
      return state;
  }
};

export default startModalReducer;
