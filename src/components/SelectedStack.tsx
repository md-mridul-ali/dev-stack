import { type Dispatch, type SetStateAction } from "react";
import type { IStack } from "../types/stackTypes";
import Select from "./Select";
import { toast } from "react-toastify";

interface ICount {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
  selectedStack: IStack[];
  setSelectedStack: Dispatch<SetStateAction<IStack[]>>;
  removeStack: (stack: IStack) => void;
}

const SelectedStack = ({ selectedStack, setSelectedStack, removeStack }: ICount) => {

  const removeAllStack = () => {
  setSelectedStack([]);

  toast.success("All technologies removed successfully!");
};

  return (
    <div className="">
      <h2 className="text-lg font-bold text-[#0F172A]">Your Stack</h2>
      <p className="text-[#94A3B8]">
        {selectedStack.length === 0
          ? "No technologies selected yet."
          : `${selectedStack.length}Technology Selected`}
      </p>
      {selectedStack.length === 0 ? (
        <div className="px-10 py-6 border-2 border-dashed mt-4 mb-4 rounded-xl border-gray-300 text-[#94A3B8]">
          <p>Your stack is empty.</p>
        </div>
      ) : (
        selectedStack.map((stack: IStack) => (
          <Select
            key={stack.id}
            stack={stack}
            selectedStack={selectedStack}
            removeStack={removeStack}
          />
        ))
      )}
      {selectedStack.length > 0 && (
        <button
          onClick={removeAllStack}
          className="btn btn-block rounded-xl mt-8 border-2 border-[#D82C20] bg-white text-[#D82C20]"
        >
          Remove All
        </button>
      )}
    </div>
  );
};

export default SelectedStack;
