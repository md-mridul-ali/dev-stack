import React, { use } from "react";
import type { IStack } from "../types/stackTypes";
import StackCard from "./StackCard";
// import "./App.css";

interface stackProps {
  stackPromise: Promise<IStack[]>;
}

const AvailableStack = ({ stackPromise }: stackProps) => {
  const stacks = use(stackPromise);
  console.log(stacks);

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-[#0F172A] text-[36px] font-extrabold">
          Explore the
          <span className="bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>
        <p className="text-[#64748B] text-[#16px]">Pick one technology per category to build your ideal stack.</p>
      </div>
      <div className="grid grid-cols-14 bg-blue-500 gap-4 container mx-auto">
        {/* <h2>Explore the Technologies</h2> */}
        <div className="col-span-11 grid grid-cols-3 gap-4 bg-blue-300">
          {stacks.map((stack: IStack) => (
            <StackCard stack={stack}></StackCard>
          ))}
        </div>
        <div className="col-span-3 bg-gray-400"></div>
      </div>
    </div>
  );
};

export default AvailableStack;
