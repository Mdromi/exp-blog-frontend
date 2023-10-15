// ForgotPasswordLink.tsx

import React from "react";

const ForgotPasswordLink: React.FC = () => (
  <div className="text-sm text-right mx-auto my-0">
    <a
      href="/forgotpassword"
      className="font-semibold text-primary hover:primary-focus"
    >
      Forgot password?
    </a>
  </div>
);

export default ForgotPasswordLink;
