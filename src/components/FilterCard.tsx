import useFilterContext from "../hooks/FilterContextHook";
import type { FilterOptionsType } from "../constants/FilterOptions";

export default function FilterCard({
  name,
  priority,
  text,
}: FilterOptionsType) {
  const { toggleFilter, isInFilter } = useFilterContext();
  const isChecked = isInFilter(name);
  const handleToggle = () => toggleFilter(name);

  return (
    <div className="filter-card">
      <label>
        <input type="checkbox" onChange={handleToggle} checked={isChecked} />
        <span className={`priority-${priority}`}>
          {text} [<i>{name}</i>]
        </span>
      </label>
    </div>
  );
}
