import { combineReducers } from "redux";
import logger from "redux-logger";

import TodoReducer from "./todo/redux/reducer";

export default function($ngReduxProvider) {
    "ngInject";
    $ngReduxProvider.createStoreWith(
        combineReducers({
            todos: TodoReducer,
        }),
        [logger]
    );
}
