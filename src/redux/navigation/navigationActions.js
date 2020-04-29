export const changeNavigation = (nav) => ({
  payload: nav,
  type: "CHANGE_NAVIGATION",
});

export const nextStep = () => ({
  type: "NEXT_STEP",
});

export const previousStep = () => ({
  type: "PREVIOUS_STEP",
});

export const showNextButtons = () => ({
  type: "SHOW_NEXT_BUTTONS",
});

export const hideNextButtons = () => ({
  type: "HIDE_NEXT_BUTTONS",
});

export const showCampaignSteps = () => ({
  type: "SHOW_CAMPAIGN_STEPS",
});

export const sequenceDone = () => ({
  type: "SEQUENCE_DONE",
});

export const scheduleDone = () => ({
  type: "SCHEDULE_DONE",
});

export const peopleDone = () => ({
  type: "PEOPLE_DONE",
});
