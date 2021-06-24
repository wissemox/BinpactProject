import * as React from "react";

function Impression(props) {
  return (
    <svg
      id="prefix__Layer_1"
      x={0}
      y={0}
      viewBox="0 0 46 43"
      xmlSpace="preserve"
      width="1em"
      height="1em"
      {...props}
    >
      <style>
        {
          ".prefix__st0{fill:#e9e7ff}.prefix__st1{fill:#8280fd}.prefix__st4{fill:#fff8ff}"
        }
      </style>
      <path
        className="prefix__st0"
        d="M10.29 40c.01.56.46 1 1.01 1h24.19s1.23.21.81-2.42v-4.89s5.01.56 5.56-.97c0 0 1.21-.91.94-3.91l-.03-15.85s-.35-3.02-3.62-2.83l-2.85-.01v-7.3s.04-.9-1.24-.81H11.12s-.86-.02-.86 1.25v6.88H5.82s-1.98.4-2.02 2.74l.1 19.18s.38 1.6 2.5 1.6l3.77-.01.12 6.35z"
      />
      <path
        className="prefix__st1"
        d="M39.55 33.69H36.3c-.45 0-.81-.36-.81-.81v-.06c0-.46.38-.83.84-.81 1.66.06 5.01.52 4.85-.76-.42-.35.97-20.46-.81-19.5H6.25c-.45 0-.81.36-.81.81v18.68c-.14 1.27 3.19.83 4.85.77.46-.02.84.35.84.81v.01c0 .44-.35.81-.8.81-2.37.02-6.61.72-6.51-2.4V12.56c0-1.34 1.09-2.44 2.44-2.44h33.3a3.25 3.25 0 013.25 3.25v17.06c-.01 1.8-1.47 3.26-3.26 3.26z"
      />
      <path
        className="prefix__st1"
        d="M35.49 41H11.12c-.45 0-.81-.36-.81-.81V28c0-.45.36-.81.81-.81h24.37c.45 0 .81.36.81.81v12.18c0 .45-.36.82-.81.82zm-22.75-1.63h21.12c.45 0 .81-.36.81-.81v-8.94c0-.45-.36-.81-.81-.81H12.74c-.45 0-.81.36-.81.81v8.94c0 .45.37.81.81.81zM35.49 11.75H11.12c-.45 0-.81-.36-.81-.81V2.82c0-.45.36-.81.81-.81h24.37c.45 0 .81.36.81.81v8.12c0 .45-.36.81-.81.81zm-22.75-1.62h21.12c.45 0 .81-.36.81-.81V4.44c0-.45-.36-.81-.81-.81H12.74c-.45 0-.81.36-.81.81v4.87c0 .46.37.82.81.82z"
      />
      <path
        className="prefix__st1"
        d="M37.11 28.81H9.5c-.45 0-.81-.36-.81-.81 0-.45.36-.81.81-.81h27.62c.45 0 .81.36.81.81 0 .45-.37.81-.82.81zM33.05 15.81h-.81c-.45 0-.81-.36-.81-.81 0-.45.36-.81.81-.81h.81c.45 0 .81.36.81.81 0 .45-.36.81-.81.81zM37.93 15.81h-.81c-.45 0-.81-.36-.81-.81 0-.45.36-.81.81-.81h.81c.45 0 .81.36.81.81 0 .45-.37.81-.81.81zM31.43 32.87H15.18c-.45 0-.81-.36-.81-.81 0-.45.36-.81.81-.81h16.25c.45 0 .81.36.81.81 0 .45-.36.81-.81.81zM31.43 37.75H15.18c-.45 0-.81-.36-.81-.81 0-.45.36-.81.81-.81h16.25c.45 0 .81.36.81.81 0 .44-.36.81-.81.81z"
      />
      <path
        d="M-189.71 96.42c-1.13 66.2-99.6 66.19-100.73 0 1.13-66.2 99.6-66.19 100.73 0z"
        fill="#fbffff"
      />
      <path
        d="M236.76-55.84c-.65 38.18-57.45 38.18-58.09 0 .65-38.19 57.44-38.18 58.09 0z"
        fill="#6c98c7"
      />
      <path
        className="prefix__st4"
        d="M208.78-44.15c-16.69-.09-16.68-25.44 0-25.52 16.68.09 16.68 25.43 0 25.52zm0-24.04c-14.62-.2-14.63 22.75 0 22.55 14.63.2 14.63-22.75 0-22.55z"
      />
      <path
        className="prefix__st4"
        d="M208.78-40.56c-.41 0-.74-.33-.74-.74v-31.22c0-.41.33-.74.74-.74s.74.33.74.74v31.22c.01.41-.33.74-.74.74z"
      />
      <path
        className="prefix__st4"
        d="M224.39-56.17h-31.22c-.41 0-.74-.33-.74-.74s.33-.74.74-.74h31.22c.96-.02.97 1.49 0 1.48z"
      />
    </svg>
  );
}

const MemoImpression = React.memo(Impression);
export default MemoImpression;