import { combineReducers } from "redux";
import navigationReducer from "./navigation/navigationReducer";
import startModalReducer from "./startModal/startModalReducer";
import secondModalReducer from "./secondModal/secondModalReducer";
import campaignReducer from "./campaign/campaignReducer";
import peopleReducer from "./people/peopleReducer";

const rootReducer = combineReducers({
  navigation: navigationReducer,
  startModal: startModalReducer,
  secondModal: secondModalReducer,
  campaign: campaignReducer,
  people: peopleReducer,
});

export default rootReducer;
