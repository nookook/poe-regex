import FilterCard from "./FilterCard";
import { FILTER_OPTIONS } from "../constants/FilterOptions";
import { useState, type ChangeEvent, type KeyboardEvent } from "react";
import useFilterContext from "../hooks/FilterContextHook";
import * as CONSTANTS from "../constants/Constants";

function sortFilters() {
  FILTER_OPTIONS.sort((a, b) => a.priority - b.priority);
}

export default function FilterCardList() {
  sortFilters();

  const [filterSearch, setFilterSearch] = useState("");
  const [filterResults, setFilterResults] = useState(FILTER_OPTIONS);
  const [copyButtonText, setCopyButtonText] = useState(
    CONSTANTS.COPY_BUTTON_DEFAULT_TEXT
  );

  const { filterRegex, clearFilters } = useFilterContext();

  const findInFilterOptions = (
    valueToSearch: string,
    arrayToSearch = FILTER_OPTIONS
  ) => {
    for (const element of arrayToSearch) {
      if (
        element.name
          .toLowerCase()
          .includes(valueToSearch.trim().toLowerCase()) ||
        element.text.toLowerCase().includes(valueToSearch.trim().toLowerCase())
      ) {
        return true;
      }
    }

    return false;
  };

  const updateFilterResults = (newValue: string) => {
    if (newValue.trim().length === 0) {
      setFilterResults(FILTER_OPTIONS);
      return;
    }

    setFilterResults(() => {
      return FILTER_OPTIONS.filter((filter) => {
        return findInFilterOptions(newValue, [filter]);
      });
    });
  };

  const clearFilterSearch = () => {
    setFilterSearch("");
    updateFilterResults("");
  };

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setFilterSearch(newValue);
    updateFilterResults(newValue);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      clearFilterSearch();
    }
  };

  const handleCopy = async () => {
    if (!filterRegex) return;

    try {
      await navigator.clipboard.writeText(filterRegex);
      setCopyButtonText(CONSTANTS.COPY_BUTTON_COPIED_TEXT);
      setTimeout(() => {
        setCopyButtonText(CONSTANTS.COPY_BUTTON_DEFAULT_TEXT);
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
        <div className="regex-result m-5 min-h-6">{filterRegex}</div>
        <div className="filter-controls text-left flex">
          <button
            className="btn-copy cursor-pointer m-3  px-5 py-3 bg-linear-to-b from-green-700 to-green-900 rounded-lg shadow-md hover:from-green-800"
            onClick={handleCopy}
          >
            {copyButtonText}
          </button>

          <input
            type="text"
            id="filter-card-search"
            className="filter-card-search grow border-3 border-blue-400 rounded-lg mt-3 mb-3 placeholder-gray-500 px-4 py-3 bg-gray-100 text-gray-900"
            placeholder="Search modifiers..."
            value={filterSearch}
            onChange={handleFilterChange}
            onKeyDown={handleKeyDown}
            spellCheck={false}
          />

          <button
            className="btn-reset cursor-pointer m-3 px-5 py-3 bg-linear-to-b from-red-700 to-red-900 rounded-lg shadow-md hover:from-red-800"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>

      <h2 className="text-left text-2xl mb-3">
        Don't include these modifiers:
      </h2>

      <div className="filter-card-list">
        {filterResults.length > 0 ? (
          filterResults.map((filterResult) => (
            <FilterCard
              key={filterResult.name}
              name={filterResult.name}
              priority={filterResult.priority}
              text={filterResult.text}
              benefits={filterResult.benefits}
            />
          ))
        ) : (
          <h3 className="text-lg italic">No search results</h3>
        )}
      </div>
    </>
  );
}
