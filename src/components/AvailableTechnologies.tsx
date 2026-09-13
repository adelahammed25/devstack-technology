import type { Dispatch, SetStateAction } from "react";

import type { Tptechnology } from "../types/technology";

import TechnologyCard from "./TechnologyCard";

interface IAvailableTechProps {
  technologies: Tptechnology[];
  selectedTech: Tptechnology[];
  setSelectedTech: Dispatch<SetStateAction<Tptechnology[]>>;
}

const AvailableTechnologies = ({
  technologies,
  selectedTech,
  setSelectedTech,
}: IAvailableTechProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {technologies.map((tech: Tptechnology, ind: number) => {
        return (
          <TechnologyCard
            key={ind}
            tech={tech}
            selectedTech={selectedTech}
            setSelectedTech={setSelectedTech}
          />
        );
      })}
    </div>
  );
};

export default AvailableTechnologies;
