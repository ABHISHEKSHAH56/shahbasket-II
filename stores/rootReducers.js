import { combineReducers } from "redux";
import tabReducer from "./Reducers";
import shopReducer from "./Shopping/shopping-reducer";

export default combineReducers({
        address: tabReducer,
        shop: shopReducer

})