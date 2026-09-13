import type { Dispatch, SetStateAction } from "react";
import { Bounce, toast } from "react-toastify";
import { TbX } from "react-icons/tb";

import type { Tptechnology } from "../types/technology";

interface IStackCardProps {
  tech: Tptechnology;
  selectedTech: Tptechnology[];
  setSelectedTech: Dispatch<SetStateAction<Tptechnology[]>>;
}

const StackCard = ({
  tech,
  selectedTech,
  setSelectedTech,
}: IStackCardProps) => {
  const handleRemoveTech = (tech: Tptechnology) => {
    const restTech = selectedTech.filter(
      (selectedTech) => selectedTech.id !== tech.id,
    );

    setSelectedTech(restTech);

    toast.success(`${tech.name} removed from your stack`, {
      position: "top-right",
      autoClose: 3000,
      transition: Bounce,
    });
  };

  return (
    <div className="flex gap-2 justify-between items-center border border-gray-200 rounded-xl py-2 px-3">
      <div className="flex gap-2 items-center">
        <img
          src={tech.icon}
          alt={tech.name}
          className="h-[40px] w-[40px] object-contain"
        />

        <div>
          <h2 className="font-bold text-sm text-black">{tech.name}</h2>

          <p className="text-xs text-gray-400">{tech.category}</p>
        </div>
      </div>

      <span
        className="text-gray-400 font-bold cursor-pointer hover:text-red-500"
        onClick={() => handleRemoveTech(tech)}
      >
        <TbX />
      </span>
    </div>
  );
};

export default StackCard;
