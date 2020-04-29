import { showCampaignSteps } from "../navigation/navigationActions";

export const openStartModal2 = (heading, subtitle) => ({
  payload: { heading, subtitle },
  type: "OPEN_START_MODAL",
});

export const openStartModal = (heading, subtitle) => {
  return (dispatch) => {
    dispatch(showCampaignSteps());
    dispatch(openStartModal2(heading, subtitle));
  };
};

export const closeStartModal = () => ({
  type: "CLOSE_START_MODAL",
});
