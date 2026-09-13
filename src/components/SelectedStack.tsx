import { type Dispatch, type SetStateAction } from "react";
import type { IStack } from "../types/stackTypes";
import Select from "./Select";

interface ICount {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
  selectedStack: IStack[];
  setSelectedStack: Dispatch<SetStateAction<IStack[]>>;
}

const SelectedStack = ({ count, selectedStack }: ICount) => {
  //   console.log(selectedStack);

  return (
    <div className="">
      <h2 className="text-lg font-bold text-[#0F172A]">Your Stack</h2>
      <p className="text-[#94A3B8]">
        {count === 0
          ? "No technologies selected yet."
          : `${count}Technology Selected`}
      </p>
      {selectedStack.length === 0 ? (
        <div className="px-10 py-6 border-2 border-dashed mt-4 mb-4 rounded-xl border-gray-300 text-[#94A3B8]">
          <p>Your stack is empty.</p>
        </div>
      ) : (
        selectedStack.map((stack: IStack) => <Select stack={stack} selectedStack={selectedStack}/>)
      )}
    </div>
  );
};

export default SelectedStack;
