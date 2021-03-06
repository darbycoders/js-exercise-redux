import { createStore, actionCreator } from "./redux.js";

function reducer(state = {}, { type, payload }) {
  switch (type) {
    case "init":
      return {
        ...state,
        count: payload.count
      };
    case "inc":
      return {
        ...state,
        count: state.count + 1
      };
    case "reset":
      return {
        ...state,
        count: 0
      };
    default:
      return { ...state };
  }
}

const logger = (store) => (next) => (action) => { // 미들웨어
  console.log("logger: ", action.type);
  next(action);
};

const monitor = (store) => (next) => (action) => { // 미들웨어
  setTimeout(() => {
    console.log("monitor: ", action.type);
    next(action);
  }, 2000);
};

const store = createStore(reducer, [logger, monitor]);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({
  type: "init",
  payload: {
    count: 1
  }
});

store.dispatch({
  type: "inc"
});

const Reset = () => store.dispatch(actionCreator("reset"));
const Increment = () => store.dispatch(actionCreator("inc"));

Increment();
Reset();
Increment();