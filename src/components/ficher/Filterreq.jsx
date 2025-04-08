import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Filcard from "./Filcard";
import { clearItems } from "../../../redux/feature/filterslice";

const Filterreq = () => {
  const fil = useSelector((state) => state.fil);
  const dispatch = useDispatch();
  const clearHandler = () => {
    dispatch(clearItems());
  };
  return (
    <div
      className={`min-h-20 max-h-32 overflow-scroll  bg-minlight p-4 rounded-lg shadow-sm flex items-start md:items-center justify-between `}
    >
      <div className={`flex flex-wrap gap-4 h-auto box-border`}>
        {fil.map((item) => {
          return <Filcard item={item} />;
        })}
      </div>
      <div className="flex self-center justify-self-center ">
        <label
          className="text-darklight font-secondfont relative w-fit cursor-pointer after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-light after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 hover:text-light"
          onClick={clearHandler}
        >
          Clear
        </label>
      </div>
    </div>
  );
};

export default Filterreq;
