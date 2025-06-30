const MinusIcon = ({ condition = "default" }) => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="30" height="30" rx="8" fill="#DEE2E6" />
      <rect
        style={{ opacity: condition !== "default" ? 0.3 : 1 }}
        x="9"
        y="16"
        width="2"
        height="12"
        transform="rotate(-90 9 16)"
        fill="#212529"
      />
    </svg>
  );
};

export default MinusIcon;
