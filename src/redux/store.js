import { applyMiddleware, createStore } from "redux";
import reducers from "./reducers";
import createSagaMiddleware from "@redux-saga/core";
import sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(sagas);

export default store;
