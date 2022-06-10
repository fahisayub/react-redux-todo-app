import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import { todoReducer } from "../todo/todo.reducer";
import thunk from "redux-thunk";
import { authReducer } from "../auth/auth.reducer";

const rootReducer=combineReducers({
    todo:todoReducer,
    auth:authReducer,
});


    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    export const store = legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));



