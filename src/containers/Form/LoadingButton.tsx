import React from "react";

type LoadingButtonProps = {
  buttonText: string;
};

const LoadingButton: React.FC<LoadingButtonProps> = ({ buttonText }) => {
  return (
    <button type="button" className="flex  w-full justify-center rounded-md base-200 bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-focus focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 disabled:bg-primary-focus" disabled>
      <svg
        className="margin: auto; background: rgb(241, 242, 243); display: block; shape-rendering: auto;"
        width="30px"
        height="30px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <circle
          cx="50"
          cy="50"
          fill="none"
          stroke="#85a2b6"
          stroke-width="10"
          r="35"
          stroke-dasharray="164.93361431346415 56.97787143782138"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            repeatCount="indefinite"
            dur="1s"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
          ></animateTransform>
        </circle>
      </svg>
      <span className="p-1 text-base-100 text-sm font-semibold">{buttonText}</span>
    </button>
  );
};

export default LoadingButton;
