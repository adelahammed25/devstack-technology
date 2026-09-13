import type { Dispatch, SetStateAction } from "react";
import { Bounce, toast } from "react-toastify";

import type { Tptechnology } from "../types/technology";

import StackCard from "./StackCard";

interface IYourStackProps {
  selectedTech: Tptechnology[];
  setSelectedTech: Dispatch<SetStateAction<Tptechnology[]>>;
}

const YourStack = ({ selectedTech, setSelectedTech }: IYourStackProps) => {
  const handleRemoveAll = () => {
    if (selectedTech.length === 0) {
      return;
    }

    setSelectedTech([]);

    toast.success("All technologies removed from your stack", {
      position: "top-right",
      autoClose: 3000,
      transition: Bounce,
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sticky top-28">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="font-bold text-xl text-black">Your Stack</h2>

          <p className="text-lg text-gray-400">
            {selectedTech.length} Technology Selected
          </p>
        </div>
      </div>

      {selectedTech.length === 0 ? (
        <p className="text-sm text-gray-400 text-center py-8">
          No technologies selected yet.
        </p>
      ) : (
        <div className="space-y-3">
          {selectedTech.map((tech: Tptechnology, ind: number) => {
            return (
              <StackCard
                key={ind}
                tech={tech}
                selectedTech={selectedTech}
                setSelectedTech={setSelectedTech}
              />
            );
          })}
        </div>
      )}

      <button
        onClick={handleRemoveAll}
        disabled={selectedTech.length === 0}
        className="btn btn-outline btn-error w-full mt-5"
      >
        Remove All
      </button>
    </div>
  );
};

export default YourStack;
