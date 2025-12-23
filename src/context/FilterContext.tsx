import { createContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

export type FilterContextType = {
  toggleFilter: (filterName: string) => void;
  isInFilter: (filterName: string) => boolean;
  getFilters: () => string[];
};

export const FilterContext = createContext<FilterContextType | null>(null);

export default function FilterProvider({ children }: { children: ReactNode }) {
  const [filters, setFilters] = useState<string[]>([]);

  useEffect(() => {
    const savedFilters = localStorage.getItem("filters");
    if (savedFilters) {
      setFilters(JSON.parse(savedFilters));
      console.log(`Loaded filters: ${savedFilters}
        filters=${filters}`);
    } else {
      console.log("No filters to load");
    }
  }, []);

  useEffect(() => {
    const saveFilterString = JSON.stringify(filters);
    localStorage.setItem("filters", saveFilterString);
    console.log(`Saved filters ${saveFilterString}
      filter=${filters}
      ${JSON.parse(saveFilterString)}`);
  }, [filters]);

  const toggleFilter = (filterName: string) => {
    if (!filters) return;

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

  const value: FilterContextType = {
    toggleFilter,
    isInFilter,
    getFilters,
  };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
}
