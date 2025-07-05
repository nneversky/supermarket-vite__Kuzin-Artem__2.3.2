const PlusIcon = ({ condition = "default" }) => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="30" height="30" rx="8" fill="#DEE2E6" />
      <g clipPath="url(#clip0_1_475)">
        <path
          style={{ opacity: condition !== "default" ? 0.3 : 1 }}
          d="M16 9H14V14H9V16H14V21H16V16H21V14H16V9Z"
          fill="#212529"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_475">
          <rect
            width="12"
            height="12"
            fill="white"
            transform="translate(9 9)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default PlusIcon;
