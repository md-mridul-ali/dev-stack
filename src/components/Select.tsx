
import type { IStack } from "../types/stackTypes";
import { ImCross } from "react-icons/im";
import { toast } from 'react-toastify';
interface ISelect {
  stack: IStack;
  selectedStack: IStack[];
  removeStack: (stack: IStack) => void;
}

const Select = ({ stack, removeStack }: ISelect) => {

  const handleRemove = () => {
    removeStack(stack);
    toast.success(`Successfully ${stack.name} removed from your stack!`);
  };

  return (
    <div>
      <div className="mt-5 border-2 border-gray-200 rounded-lg p-4 flex justify-between items-center">
        <div className="flex ">
          <img className="w-[40px] h-[40px] mr-3" src={stack.icon}></img>
          <div>
            <h4 className="font-bold">{stack.name}</h4>
            <p className="text-[#64748B]">{stack.category}</p>
          </div>
        </div>
        <div>
          <button onClick={handleRemove} className="text-[#64748B]">
            <ImCross></ImCross>
          </button>
        </div>
      </div>

    </div>
  );
};

export default Select;
