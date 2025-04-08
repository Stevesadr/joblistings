import React from "react";
import { useDispatch } from "react-redux";
import { addItems } from "../../../redux/feature/filterslice";
const Requirement = (props) => {
  const dispatch = useDispatch();
  const addItemHandler = () => {
    dispatch(addItems(props.children));
  };
  return (
    <div
      className="bg-normallight text-light font-bold p-1 cursor-pointer hover:bg-light hover:text-minlight rounded-lg md:px-2"
      onClick={addItemHandler}
    >
      {props.children}
    </div>
  );
};

export default Requirement;
