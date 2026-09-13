import type { Dispatch, SetStateAction } from "react";
import { FaStar } from "react-icons/fa";
import { Bounce, toast } from "react-toastify";

import type { Tptechnology } from "../types/technology";

interface TptechnologyCardProps {
  tech: Tptechnology;
  selectedTech: Tptechnology[];
  setSelectedTech: Dispatch<SetStateAction<Tptechnology[]>>;
}

const TechnologyCard = ({
  tech,
  selectedTech,
  setSelectedTech,
}: TptechnologyCardProps) => {
  const isSelected = selectedTech.some((selected) => selected.id === tech.id);

  const handleAddToStack = () => {
    const alreadyAdded = selectedTech.some(
      (selected) => selected.id === tech.id,
    );

    if (alreadyAdded) {
      toast.warning(`${tech.name} is already in your stack`, {
        position: "top-right",
        autoClose: 3000,
        transition: Bounce,
      });

      return;
    }

    const sameCategory = selectedTech.some(
      (selected) => selected.category === tech.category,
    );

    if (sameCategory) {
      toast.warning(`You already selected a ${tech.category} technology`, {
        position: "top-right",
        autoClose: 3000,
        transition: Bounce,
      });

      return;
    }

    setSelectedTech([...selectedTech, tech]);

    toast.success(`${tech.name} added to your stack`, {
      position: "top-right",
      autoClose: 3000,
      transition: Bounce,
    });
  };

  return (
    <div className="card bg-white w-full shadow-sm text-black p-5 border border-gray-100">
      <figure className="flex justify-between items-start pb-3">
        <img
          src={tech.icon}
          className="w-10 h-10 object-contain"
          alt={tech.name}
        />

        <div className="badge leading-none">{tech.badge}</div>
      </figure>

      <div className="card-body p-0">
        <h2 className="card-title text-lg">{tech.name}</h2>

        <p className="text-gray-500 text-sm min-h-[60px]">{tech.description}</p>

        <div className="flex items-center justify-between gap-1 mt-2">
          <div className="badge bg-gray-100 text-black border-0 text-xs">
            {tech.category}
          </div>

          <div className="badge bg-white text-gray-500 border-0 text-xs">
            {tech.difficulty}
          </div>

          <div className="badge bg-white text-gray-800 font-semibold border-0 text-xs">
            <FaStar className="text-yellow-400" />
            {tech.rating}
          </div>
        </div>

        <button
          onClick={handleAddToStack}
          disabled={isSelected}
          className="btn btn-neutral w-full mt-4 disabled:bg-gray-400 disabled:text-gray-700 disabled:opacity-100"
        >
          {isSelected ? "✓ Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
};

export default TechnologyCard;
