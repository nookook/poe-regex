import FilterCard from "./FilterCard";
import { filterOptions } from "../constants/FilterOptions";

function sortFilters() {
  filterOptions.sort((a, b) => a.priority - b.priority);
}

export default function FilterCardList() {
  sortFilters();

  return (
    <div className="filterOptions">
      {filterOptions.map((filterOption) => (
        <FilterCard
          key={filterOption.name}
          name={filterOption.name}
          priority={filterOption.priority}
          text={filterOption.text}
        />
      ))}
    </div>
  );
}
