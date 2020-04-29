import { closeStartModal } from "../startModal/startModalActions";
import {
  showNextButtons,
  sequenceDone,
  scheduleDone,
} from "../navigation/navigationActions";
import { selectSequence, selectSchedule } from "../campaign/campaignActions";

export const openSecondModal = (modalName) => {
  return (dispatch) => {
    dispatch(closeStartModal());
    if (modalName === "sequence") {
      dispatch({ type: "OPEN_SEQUENCE_MODAL" });
    } else {
      dispatch({ type: "OPEN_SCHEDULE_MODAL" });
    }
  };
};

export const selectOption = (option, contentName) => {
  return (dispatch) => {
    dispatch(showNextButtons());
    dispatch(closeSecondModal());
    if (contentName === "sequence") {
      dispatch(selectSequence(option));
      dispatch(sequenceDone());
    } else {
      dispatch(selectSchedule(option));
      dispatch(scheduleDone());
    }
  };
};

// export const selectSequence = (option) => ({
//   type: "SELECT_SEQUENCE",
//   payload: option,
// });

// export const selectSchedule = (option) => ({
//   type: "SELECT_SCHEDULE",
//   payload: option,
// });

export const closeSecondModal = () => ({
  type: "CLOSE_SECOND_MODAL",
});

//
