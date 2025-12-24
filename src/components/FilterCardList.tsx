import FilterCard from "./FilterCard";
import { filterOptions } from "../constants/FilterOptions";
import { useState, useEffect, type KeyboardEvent } from "react";
import useFilterContext from "../hooks/FilterContextHook";

function sortFilters() {
  filterOptions.sort((a, b) => a.priority - b.priority);
}

export default function FilterCardList() {
  sortFilters();

  const [filterSearch, setFilterSearch] = useState("");
  const [filterResults, setFilterResults] = useState(filterOptions);
  const [copyButtonText, setCopyButtonText] = useState("Copy");

  const { getFilters, clearFilters } = useFilterContext();
  const filters = getFilters();

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

  const clearFilterSearch = () => setFilterSearch("");

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      clearFilterSearch();
    }
  };

  const getFilterRegex = () => {
    /*
         TODO add in regex stuff
          */
    if (filters.length === 0) return "";

    return `"${filters.join(", ")}"`;
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(getFilterRegex());
      setCopyButtonText("✔ Copied");
      setTimeout(() => {
        setCopyButtonText("Copy");
      }, 1000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const handleReset = () => {
    clearFilterSearch();
    clearFilters();
  };

  return (
    <>
      <div className="filter-output sticky top-0 z-50 mb-5 bg-gray-900 rounded-lg border">
        <div className="regex-result m-5 min-h-6">{getFilterRegex()}</div>
        <div className="filter-controls text-left flex">
          <button
            className="btn-copy cursor-pointer m-3  px-5 py-3 bg-linear-to-b from-green-700 to-green-900 rounded-lg shadow-md hover:from-green-800"
            onClick={handleCopy}
          >
            {copyButtonText}
          </button>

          <input
            type="text"
            className="filter-card-search grow border-3 border-blue-400 rounded-lg mt-3 mb-3 placeholder-gray-500 px-4 py-3 bg-gray-100 text-gray-900"
            placeholder="Search modifiers..."
            value={filterSearch}
            onChange={(e) => {
              setFilterSearch(e.target.value);
            }}
            onKeyDown={handleKeyDown}
          />

          <button
            className="btn-reset cursor-pointer m-3 px-5 py-3 bg-linear-to-b from-red-700 to-red-900 rounded-lg shadow-md hover:from-red-800"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>
      <div className="filter-card-list">
        {filterResults.map((filterResult) => (
          <FilterCard
            key={filterResult.name}
            name={filterResult.name}
            priority={filterResult.priority}
            text={filterResult.text}
            benefits={filterResult.benefits}
          />
        ))}
      </div>
    </>
  );
}
