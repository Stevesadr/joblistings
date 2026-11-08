import React from "react";
import { useDispatch } from "react-redux";
import remove from "/images/icon-remove.svg";
import { removeItems } from "../../../redux/feature/filterslice";

const Filcard = (props) => {
  const dispatch = useDispatch();
  const removeHandler = () => {
    dispatch(removeItems(props.item));
  };
  return (
    <div className="bg-normallight text-light font-bold  rounded-lg md:px-2 flex items-center gap-1">
      <div className="">{props.item}</div>
      <div className="bg-light w-full h-full rounded-r-sm hover:bg-verydarklight cursor-pointer">
        <img
          src={remove}
          alt="remove"
          className="w-full h-full p-1 "
          onClick={removeHandler}
        />
      </div>
    </div>
  );
};

export default Filcard;
