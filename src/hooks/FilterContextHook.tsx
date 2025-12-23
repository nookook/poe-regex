import { FilterContext } from "../context/FilterContext";
import { useContext } from "react";

export default function useFilterContext() {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("FilterContext was null");
  }

  return context;
}
