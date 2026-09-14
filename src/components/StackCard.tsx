import { useState, type Dispatch, type SetStateAction } from "react";
import type { IStack } from "../types/stackTypes";
import { BsFillStarFill } from "react-icons/bs";
import { toast } from 'react-toastify';

interface ICount{
  stack:IStack;
  count:number;
  setCount:Dispatch<SetStateAction<number>>;
  selectedStack:IStack[];
  setSelectedStack:Dispatch<SetStateAction<IStack[]>>
}

const StackCard = ({ stack, count, setCount, selectedStack, setSelectedStack}: ICount) => {
  const [isSelected, setIsSelected] = useState(false);

  //test

  function handleClick(stackData:IStack) {
    setCount(count + 1);
    setIsSelected(true)
    setSelectedStack([...selectedStack, stackData]);
    toast.success(`Successfully ${stack.name} added to your stack!`);
  }


  return (
    <div className={`p-4 rounded-xl ${isSelected === true ? "border-2 border-[#d91b7db2]" : "border-2 border-gray-300"}`}>
      <div className="flex justify-between items-center">
        <img className="h-[40px] w-[40px]" src={stack.icon} alt="logo"></img>
        <button className="bg-[#efa4cbb4] text-[#D91B7E] rounded-4xl py-1 px-5">
          {stack.badge}
        </button>
      </div>
      <h3 className="text=[16px]">{stack.name}</h3>
      <p className="text-[#64748B] font-normal">{stack.description}</p>
      <div className="flex justify-between items-center mt-2">
        <div className="px-4 py-1 bg-[#dde0e593] rounded">
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
        <button
          onClick={() => handleClick(stack)}
          // onClick={handleClick}
          className={`btn btn-block rounded-xl ${
            isSelected
              ? "bg-[#efa4cbb4] text-[#D91B7E]"
              : "bg-[#0A0F1D] text-white"
          }`}
          disabled={isSelected}
        >
          Add to Stack
        </button>
      </div>
    </div>
  );
};

export default StackCard;
