export const selectSequence = (option) => ({
  type: "SELECT_SEQUENCE",
  payload: option,
});

export const selectSchedule = (option) => ({
  type: "SELECT_SCHEDULE",
  payload: option,
});

export const setPeople = (people) => ({
  type: "SET_PEOPLE",
  payload: people,
});
