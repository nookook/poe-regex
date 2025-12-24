import useFilterContext from "../hooks/FilterContextHook";
import type { FilterOptionsType } from "../constants/FilterOptions";

export default function FilterCard({
  name,
  priority,
  text,
  benefits,
}: FilterOptionsType) {
  const { toggleFilter, isInFilter } = useFilterContext();
  const isChecked = isInFilter(name);
  const handleToggle = () => toggleFilter(name);

  return (
    <div className="filter-card">
      <label
        className="filter-card-label cursor-pointer flex p-2 border-1 border-gray-500"
        title={benefits}
      >
        <input
          type="checkbox"
          onChange={handleToggle}
          checked={isChecked}
          className="filter-checkbox appearance-none"
        />
        <span
          className={`priority-${priority} flex-1 text-left whitespace-pre-wrap`}
        >
          {text}
        </span>
        <span className="text-right italic text-gray-400">[{name}]</span>
      </label>
    </div>
  );
}
