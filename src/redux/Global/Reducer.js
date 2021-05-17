const StepGlobal = localStorage.getItem("StepGlobal") || 0;
const FinalStatus = localStorage.getItem("FinalStatus") || false;
const Auto = JSON.parse(localStorage.getItem("Auto")) || "";

const initialState = {
  StepGlobal: StepGlobal,
  FinalStatus: FinalStatus,
  Auto: Auto,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SIDEBAR":
      localStorage.setItem("StepGlobal", action.payload);
      return {
        ...state,
        StepGlobal: action.payload,
      };
    case "FINAL":
      localStorage.setItem("FinalStatus", action.payload);
      return {
        ...state,
        FinalStatus: action.payload,
      };
    case "AUTO":
      localStorage.setItem("Auto", JSON.stringify(action.payload));
      return {
        ...state,
        Auto: action.payload,
      };
    default:
      return state;
  }
};
