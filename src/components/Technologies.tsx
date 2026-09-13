import { use, useState } from "react";

import type { Tptechnology } from "../types/technology";

import AvailableTechnologies from "./AvailableTechnologies";
import YourStack from "./YourStack";

interface TechnologiesProps {
  techInfo: Promise<Tptechnology[]>;
}

const Technologies = ({ techInfo }: TechnologiesProps) => {
  const technologies = use(techInfo);

  const [selectedTech, setSelectedTech] = useState<Tptechnology[]>([]);

  return (
    <div className="container mx-auto">
      <div className="mb-6">
        <h2 className="font-bold text-4xl text-black mb-2">
          Explore the <span className="text-pink-600">Technologies</span>
        </h2>

        <p className="pb-5 text-gray-400 text-sm">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <AvailableTechnologies
            technologies={technologies}
            selectedTech={selectedTech}
            setSelectedTech={setSelectedTech}
          />
        </div>

        <div className="lg:col-span-1">
          <YourStack
            selectedTech={selectedTech}
            setSelectedTech={setSelectedTech}
          />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
