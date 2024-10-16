import { useReducer } from "react";

const reducer = (state, action) => {
  return {
    ...state,
    [action.name]: action.value,
  };
};

export default function useInputs(initialState) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onChange = (e) => {
    dispatch(e.target);
  };
  return [state, onChange];
}
