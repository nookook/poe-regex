import FilterCard from "./FilterCard";
import { filterOptions } from "../constants/FilterOptions";
import { useState, useEffect } from "react";

function sortFilters() {
  filterOptions.sort((a, b) => a.priority - b.priority);
}

export default function FilterCardList() {
  sortFilters();

  const [filterSearch, setFilterSearch] = useState("");
  const [filterResults, setFilterResults] = useState(filterOptions);

  useEffect(() => {
    if (filterSearch.trim().length === 0) {
      setFilterResults(filterOptions);
      return;
    }

    setFilterResults(() => {
      return filterOptions.filter((filter) => {
        return (
          filter.name
            .toLowerCase()
            .includes(filterSearch.trim().toLowerCase()) ||
          filter.text.toLowerCase().includes(filterSearch.trim().toLowerCase())
        );
      });
    });
  }, [filterSearch]);

  return (
    <div className="filter-card-list">
      <input
        type="text"
        placeholder="Search modifiers..."
        value={filterSearch}
        onChange={(e) => {
          setFilterSearch(e.target.value);
        }}
      />

      {filterResults.map((filterResult) => (
        <FilterCard
          key={filterResult.name}
          name={filterResult.name}
          priority={filterResult.priority}
          text={filterResult.text}
        />
      ))}
    </div>
  );
}
