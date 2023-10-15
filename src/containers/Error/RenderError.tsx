import React from "react";
import { useSelector } from "react-redux";
import { AnyAction } from "redux";

type RenderErrorProps = {
  errorKey: string;
  errorName: string;
};

const RenderError: React.FC<RenderErrorProps> = ({ errorKey, errorName }) => {
  const currentState = useSelector((state: AnyAction) => state.Auth);
  
  // Check if currentState[errorName] exists before accessing its properties
  const error = currentState[errorName] ? currentState[errorName][errorKey] : null;

  return error ? <small className="text-error">{error}</small> : null;
};

export default RenderError;
