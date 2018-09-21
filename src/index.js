import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { createStore, applyMiddleware } from "redux"; // this will allow us to create a global store that stores our state

import App from "./Components/App";

import rootReducer from "./reducers";

const store = createStore(rootReducer); // creating a global store. It takes reducer as argument. It also takes other arguments like middleware

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
