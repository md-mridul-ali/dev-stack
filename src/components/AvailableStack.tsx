import React, { use } from "react";
import type { IStack } from "../types/stackTypes";
import StackCard from "./StackCard";
import SelectedStack from "./SelectedStack";
// import "./App.css";

interface stackProps {
  stackPromise: Promise<IStack[]>;
}

const AvailableStack = ({ stackPromise }: stackProps) => {
  const stacks = use(stackPromise);
  console.log(stacks);

  return (
    // <div>
    //   <div className="mb-8">
    //     <h2 className="text-[#0F172A] text-[36px] font-extrabold">
    //       Explore the
    //       <span className="bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
    //         Technologies
    //       </span>
    //     </h2>
    //     <p className="text-[#64748B] text-[#16px]">Pick one technology per category to build your ideal stack.</p>
    //   </div>
    //   <div className="grid grid-cols-14 gap-4 container mx-auto">
    //     <div className="col-span-11 grid grid-cols-3 gap-4">
    //       {stacks.map((stack: IStack) => (
    //         <StackCard stack={stack}></StackCard>
    //       ))}
    //     </div>
    //     <div className="col-span-3 px-4 py-6 border-2 border-gray-300 rounded-xl">
    //       <SelectedStack></SelectedStack>
    //     </div>
    //   </div>
    // </div>
    <div>
      <div className="mb-8">
        <h2 className="text-[#0F172A] text-3xl sm:text-4xl font-extrabold">
          Explore the{" "}
          <span className="bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>
        <p className="text-[#64748B] text-base sm:text-[16px] mt-2">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 xl:col-span-9 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {stacks.map((stack: IStack) => (
            <StackCard key={stack.id} stack={stack} />
          ))}
        </div>
        <div className="lg:col-span-4 xl:col-span-3 px-4 py-6 border-2 border-gray-300 rounded-xl">
          <SelectedStack />
        </div>
      </div>
    </div>
  );
};

export default AvailableStack;
