import useFilterContext from "../hooks/FilterContextHook";

export default function FilterOutput() {
  const { getFilters } = useFilterContext();
  const filters = getFilters();

  return <div className="filter-output">{filters.join(", ")}</div>;
}
