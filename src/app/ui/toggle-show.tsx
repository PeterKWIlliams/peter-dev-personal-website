import { FC } from "react";

interface readMoreProps {
  action: "SHOW MORE" | "SHOW LESS";
  handleClick: () => void;
}

const ToggleShow: FC<readMoreProps> = ({ action, handleClick }) => {
  return (
    <button
      className="col-span-2 h-auto   w-auto border-2  border-solid border-black px-2 py-1 sm:col-span-4"
      onClick={handleClick}
    >
      {action} ...
    </button>
  );
};

export default ToggleShow;
