import FilterCard from "./FilterCard";
import { filterOptions } from "../constants/FilterOptions";
import { useState, type ChangeEvent, type KeyboardEvent } from "react";
import useFilterContext from "../hooks/FilterContextHook";

function sortFilters() {
  filterOptions.sort((a, b) => a.priority - b.priority);
}

export default function FilterCardList() {
  const copyButtonDefaultText = "Copy";
  sortFilters();

  const [filterSearch, setFilterSearch] = useState("");
  const [filterResults, setFilterResults] = useState(filterOptions);
  const [copyButtonText, setCopyButtonText] = useState(copyButtonDefaultText);

  const { getFilters, clearFilters } = useFilterContext();
  const filters = getFilters();

  const findInFilterOptions = (
    valueToSearch: string,
    arrayToSearch = filterOptions
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
      setFilterResults(filterOptions);
      return;
    }

    setFilterResults(() => {
      return filterOptions.filter((filter) => {
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

  const getFilterRegex = () => {
    if (filters.length === 0) return "";

    const mustMatch: string[] = [];
    const mustMatchName: string[] = [];
    const mustNotMatch: string[] = [];

    // exclude characters that are only part of text used as number ranges:  - ( )
    // also exclude numbers because in the game you will get lower numbers on lower difficulty maps
    const charactersToIgnore = new RegExp(`[0-9\-\(\)\n]`);

    for (const filter of filterOptions) {
      if (filters.includes(filter.name)) {
        /*
        adding in ^ and $ for regex matching later
        pushing name seperately because we want to avoid using it if possible

        changing everything to lowercase to simplify matching and in the game the regex search is case-insensitive
        */
        mustMatch.push(`^${filter.text}$`.toLowerCase());
        mustMatchName.push(`^${filter.name}$`.toLowerCase());
      } else {
        mustNotMatch.push(`^${filter.text}$^${filter.name}$`.toLowerCase());
      }
    }

    // brute force calculating because i'm too dumb to figure out a math formula that's better
    let regexOutputs: string[] = [];
    let regexStringFound = "";

    const findMyMatch = (thisMustMatch: string) => {
      const minimumAmountOfCharacters = 4; // start search at 4 character long matches to avoid false matches from randomly generated map names in the game
      let matchesFound = 0;
      let maxMatchesFound = -1;

      // form i long strings to search
      for (let i = minimumAmountOfCharacters; i < thisMustMatch.length; ++i) {
        // loop through each character of the string
        for (let j = 0; j < thisMustMatch.length - i + 1; ++j) {
          const stringSearch = thisMustMatch.slice(j, j + i);
          if (stringSearch.search(charactersToIgnore) !== -1) {
            continue;
          }

          matchesFound = 0;

          if (
            !mustNotMatch.some((thisMustNotMatch) => {
              return thisMustNotMatch.includes(stringSearch);
            })
          ) {
            for (const eachMustMatch of mustMatch) {
              if (eachMustMatch.includes(stringSearch)) {
                matchesFound++;
              }
            }
            if (matchesFound > maxMatchesFound) {
              regexStringFound = stringSearch;
              maxMatchesFound = matchesFound;
            }
          }
        }
      }

      if (regexStringFound) {
        if (!regexOutputs.includes(regexStringFound))
          regexOutputs.push(regexStringFound);
      }
    };

    for (const [index, thisMustMatch] of mustMatch.entries()) {
      regexStringFound = "";

      for (const regexOutput of regexOutputs) {
        if (thisMustMatch.includes(regexOutput)) {
          regexStringFound = ".";
          break;
        }
      }
      if (regexStringFound) continue;

      findMyMatch(thisMustMatch);

      if (!regexStringFound) findMyMatch(mustMatchName[index]); // try matching with the name
      if (!regexStringFound) return "ERROR! failed to find regex match";
    }

    return `"!${regexOutputs.join("|").replaceAll("+", "\\+")}"`;
  };

  const handleCopy = async () => {
    const filterRegex = getFilterRegex();
    if (!filterRegex) return;

    try {
      await navigator.clipboard.writeText(filterRegex);
      setCopyButtonText("✔ Copied");
      setTimeout(() => {
        setCopyButtonText(copyButtonDefaultText);
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
