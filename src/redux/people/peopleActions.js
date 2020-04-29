import { peopleDone } from "../navigation/navigationActions";
import { setPeople } from "../campaign/campaignActions";

export const openPeopleModalOne = () => ({
  type: "OPEN_PEOPLE_MODAL_ONE",
});

export const openPeopleModalTwo = () => ({
  type: "OPEN_PEOPLE_MODAL_TWO",
});

export const openPeopleModalThree = () => ({
  type: "OPEN_PEOPLE_MODAL_THREE",
});
export const submitPeopleModalOne = () => {
  return (dispatch) => {
    dispatch(closePeopleModalOne());
    dispatch(openPeopleModalTwo());
  };
};

export const submitPeopleModalOneForThree = () => {
  return (dispatch) => {
    dispatch(closePeopleModalOne());
    dispatch(openPeopleModalThree());
  };
};

export const closePeopleModalOne = () => ({
  type: "CLOSE_PEOPLE_MODAL_ONE",
});

export const closePeopleModalTwo = () => ({
  type: "CLOSE_PEOPLE_MODAL_TWO",
});

export const closePeopleModalThree = () => ({
  type: "CLOSE_PEOPLE_MODAL_THREE",
});

export const submitPeopleModalTwo = (people) => {
  return (dispatch) => {
    dispatch(setPeople(people));
    dispatch(closePeopleModalTwo());
    dispatch(peopleDone());
    //do any additional work
  };
};

export const setCsvUploaded = () => ({
  type: "CSV_UPLOADED",
});

export const setCsvName = (name) => ({
  type: "SET_CSV_NAME",
  payload: name,
});
