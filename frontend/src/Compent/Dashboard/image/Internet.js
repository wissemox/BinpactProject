import * as React from "react";

function Internet(props) {
  return (
    <svg viewBox="0 0 36 32" width="1em" height="1em" {...props}>
      <path
        d="M17.04 29.87h1.26c7.04-.3 12.55-6.04 12.55-13.09 0-7.06-5.51-12.8-12.55-13.09h-1.25l-.01.01c-6.96.36-12.41 6.1-12.41 13.08s5.45 12.72 12.41 13.09zm-7.92-4.61c.83-.6 1.73-1.12 2.68-1.54.9 1.88 2.15 3.55 3.73 4.96-2.42-.46-4.67-1.66-6.41-3.42zm8.11 3.49a15.047 15.047 0 01-4.49-5.42c1.44-.52 2.94-.82 4.49-.89v6.31zm0-7.32c-1.68.07-3.33.4-4.9.98-.6-1.49-.95-3.06-1.05-4.69h5.94v3.71zm0-4.73h-5.97c.01-1.67.28-3.29.82-4.85 1.65.65 3.38 1.02 5.16 1.09v3.76zm2.54 12a15.62 15.62 0 003.86-5.17c1.02.41 1.99.94 2.88 1.57-1.81 1.9-4.17 3.16-6.74 3.6zm7.41-4.37c-.98-.69-2.04-1.28-3.16-1.73.6-1.55.95-3.2 1.05-4.89h4.73c-.19 2.43-1.09 4.71-2.62 6.62zm.38-14.6c1.47 2.04 2.26 4.44 2.27 6.96h-4.74c-.01-1.73-.29-3.42-.83-5.04 1.17-.5 2.28-1.14 3.3-1.92zm-.63-.79c-.94.71-1.95 1.3-3.02 1.77-.9-2.22-2.33-4.23-4.15-5.84a11.9 11.9 0 017.17 4.07zm-8.68-4.02c2.11 1.62 3.74 3.74 4.73 6.16-1.52.54-3.11.84-4.73.87V4.92zm0 8.04c1.74-.03 3.44-.35 5.08-.93.5 1.5.75 3.07.76 4.67h-5.84v-3.74zm0 4.76h5.8c-.09 1.57-.42 3.09-.98 4.53-1.55-.52-3.17-.8-4.82-.83v-3.7zm0 4.71c1.51.03 3 .28 4.42.75-1 2.12-2.52 4-4.42 5.46v-6.21zM17.23 4.81v7.12c-1.65-.08-3.26-.42-4.79-1.03 1.01-2.39 2.67-4.49 4.79-6.09zm-1.69.08a15.952 15.952 0 00-4.03 5.61c-1-.47-1.94-1.06-2.81-1.74 1.8-2.02 4.2-3.38 6.84-3.87zM8.06 9.55c.96.75 1.99 1.39 3.08 1.91-.59 1.68-.89 3.45-.9 5.25h-4.6c.02-2.61.85-5.08 2.42-7.16zm-2.38 8.17h4.59c.1 1.76.48 3.46 1.12 5.07-1.05.46-2.04 1.04-2.96 1.71-1.6-1.94-2.55-4.27-2.75-6.78z"
        fill="#316aac"
      />
    </svg>
  );
}

const MemoInternet = React.memo(Internet);
export default MemoInternet;
