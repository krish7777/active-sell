const INITIAL_STATE = {
  modalIsOpenOne: false,
  modalIsOpenTwo: false,
  modalIsOpenThree: false,
  csvUploaded: false,
  csvName: "",
};

const peopleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "OPEN_PEOPLE_MODAL_ONE":
      return { ...state, modalIsOpenOne: true };
    case "OPEN_PEOPLE_MODAL_TWO":
      return { ...state, modalIsOpenTwo: true };
    case "CSV_UPLOADED":
      return { ...state, csvUploaded: true };
    case "CLOSE_PEOPLE_MODAL_ONE":
      return { ...state, modalIsOpenOne: false };
    case "CLOSE_PEOPLE_MODAL_TWO":
      return { ...state, modalIsOpenTwo: false };
    case "OPEN_PEOPLE_MODAL_THREE":
      return { ...state, modalIsOpenThree: true };
    case "CLOSE_PEOPLE_MODAL_THREE":
      return { ...state, modalIsOpenThree: false };
    case "SET_CSV_NAME":
      return { ...state, csvName: action.payload };

    default:
      return state;
  }
};

export default peopleReducer;
