import * as React from "react";

function Notifacation(props) {
  return (
    <svg viewBox="0 0 67 55" width="1em" height="1em" {...props}>
      <path
        d="M32.25 51a5.64 5.64 0 01-5.64-5.64h11.28A5.64 5.64 0 0132.25 51zM51.3 39.71h0c0 2.08-1.69 2.22-3.77 2.22H16.97c-2.08 0-3.77-.14-3.77-2.22v-.36c0-1.5.88-2.78 2.15-3.39l1.2-10.34c0-7.57 5.42-12.35 12.48-15.38V6.23c0-1.78 1.45-3.23 3.23-3.23s3.23 1.45 3.23 3.23v4.01c7.13 1.49 12.48 7.81 12.48 15.38l1.2 10.34c1.27.61 2.14 1.89 2.14 3.39v.36z"
        fill="#e9e7ff"
        stroke="#8280fd"
        strokeWidth={2}
        strokeMiterlimit={10}
      />
    </svg>
  );
}

const MemoNotifacation = React.memo(Notifacation);
export default MemoNotifacation;
