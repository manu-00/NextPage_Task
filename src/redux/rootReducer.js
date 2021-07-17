import { combineReducers } from "redux";

import cartReducer from "./Cart/cart.reducer";
import tableReducer from "./Table/table.reducer";

const rootReducer=combineReducers({
cart:cartReducer,
courses:tableReducer
});

export default rootReducer;