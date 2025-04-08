import React from "react";
import New from "./ficher/New";
import Featured from "./ficher/Featured";
import Requirement from "./ficher/Requirement";
import { useSelector } from "react-redux";

const Card = (props) => {
  const fil = useSelector((state) => state.fil);
  const isMatched = () => {
    if (fil.length === 0) {
      return true;
    }
    return fil.every((filitem) => {
      return (
        props.item.languages.includes(filitem) ||
        filitem === props.item.level ||
        filitem === props.item.role
      );
    });
  };
  if (!isMatched()) {
    return null;
  }

  return (
    <div
      className={`text-black h-auto bg-minlight mb-9 shadow-xl rounded-sm relative px-5 md:h-32 md:flex ${
        props.item.postedAt === "1d ago" ? "border-l-3 border-light" : null
      } `}
    >
      <div className="h-8 md:h-full md:flex md:items-center md:justify-center">
        <img
          src={props.item.logo}
          alt="logo"
          className="w-12 absolute top-[-20px] left-6 md:static md:w-20"
        />
      </div>
      <div className="md:flex md:items-center md:justify-between md:w-full md:px-10">
        <div>
          <div className="flex items-center gap-4">
            <h3 className="text-light font-bold tracking-tight text-base">
              {props.item.company}
            </h3>
            {props.item.new === true && (
              <div>
                <New />
              </div>
            )}
            {props.item.featured === true && (
              <div>
                <Featured />
              </div>
            )}
          </div>
          <div className="font-bold my-2 text-verydarklight hover:text-light cursor-pointer">
            {props.item.position}
          </div>
          <div className="text-sm font-bold text-darklight">
            {props.item.postedAt} . {props.item.contract} .{" "}
            {props.item.location}
          </div>
        </div>
        <div className="border-b-1 border-darklight my-3"></div>
        <div className="flex gap-4 flex-wrap py-3">
          <Requirement>{props.item.role}</Requirement>
          <Requirement>{props.item.level}</Requirement>
          {props.item.languages.map((item, index) => (
            <Requirement key={index}>{item}</Requirement>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
