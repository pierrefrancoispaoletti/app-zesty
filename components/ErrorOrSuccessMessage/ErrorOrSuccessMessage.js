import React from "react";
import { ErrorOrSuccessStyled } from "./error-or-success-message.style";

const ErrorOrSuccessMessage = ({ children, success, error }) => {
  return (
    (error || success) && (
      <ErrorOrSuccessStyled success={success} error={error}>
        {children}
      </ErrorOrSuccessStyled>
    )
  );
};

export default ErrorOrSuccessMessage;
