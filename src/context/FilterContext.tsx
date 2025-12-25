import { createContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import RegexCalculation from "../components/RegexCalculation";

export type FilterContextType = {
  toggleFilter: (filterName: string) => void;
  isInFilter: (filterName: string) => boolean;
  getFilters: () => string[];
  clearFilters: () => void;
  filterRegex: string;
};

export const FilterContext = createContext<FilterContextType | null>(null);

let hasClickedOnce = false;
export default function FilterProvider({ children }: { children: ReactNode }) {
  const [filters, setFilters] = useState<string[]>([]);
  const [filterRegex, setFilterRegex] = useState("");

  useEffect(() => {
    const savedFilters = localStorage.getItem("filters");
    if (savedFilters) setFilters(JSON.parse(savedFilters));
  }, []);

  useEffect(() => {
    setFilterRegex(RegexCalculation(filters));

    if (!hasClickedOnce) return;
    const saveFilterString = JSON.stringify(filters);
    localStorage.setItem("filters", saveFilterString);
  }, [filters]);

  const toggleFilter = (filterName: string) => {
    hasClickedOnce = true;

    if (isInFilter(filterName)) {
      setFilters((prev) => prev?.filter((filter) => filter !== filterName));
    } else {
      setFilters((prev) => [...prev, filterName]);
    }
  };

  const isInFilter = (filterName: string) => {
    return filters.some((filter) => filter === filterName);
  };

  const getFilters = () => {
    return filters;
  };

  const clearFilters = () => {
    setFilters([]);
  };

  const value: FilterContextType = {
    toggleFilter,
    isInFilter,
    getFilters,
    clearFilters,
    filterRegex,
  };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
}
