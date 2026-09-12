import React from "react";
import type { IStack } from "../types/stackTypes";
import { BsFillStarFill } from "react-icons/bs";

const StackCard = ({ stack }: { stack: IStack }) => {
  return (
    <div className="bg-[#F1F5F9] p-4 rounded-xl">
      <div className="flex justify-between items-center">
        <img className="h-[40px] w-[40px]" src={stack.icon} alt="logo"></img>
        <button className="bg-[#E0F2FE] text-[#0EA5E9] rounded-4xl py-1 px-5">{stack.badge}</button>
      </div>
      <h3 className="text=[16px]">{stack.name}</h3>
      <p className="text-[#64748B] font-normal">{stack.description}</p>
      <div className="flex justify-between items-center mt-2">
        <div className="p-1 bg-[#dde0e5f1] rounded">
          <button className="text-[#475569]">{stack.category}</button>
        </div>
        <div>
          <button>{stack.difficulty}</button>
        </div>
        <div className="flex justify-between items-center">
          <BsFillStarFill className="text-[#FBBF24]"></BsFillStarFill>
          <button className="ml-2">{stack.rating}</button>
        </div>
      </div>
     <div className="mt-6">
      <button className="btn btn-block rounded-xl bg-[#0A0F1D] text-white ">Add to Stack</button>
    </div>
    </div>
  );
};

export default StackCard;
