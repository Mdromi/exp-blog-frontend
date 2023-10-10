import React from "react";
import { useSelector } from "react-redux";
import { AnyAction } from "redux";

type RenderErrorProps = {
  errorKey: string;
  errorName: string;
};

const RenderError: React.FC<RenderErrorProps> = ({ errorKey, errorName }) => {
  
  const currentState = useSelector((state: AnyAction) => state.Auth);
  
  const error = currentState[errorName][errorKey];

  return error ? <small className="text-error">{error}</small> : null;
};

export default RenderError;
