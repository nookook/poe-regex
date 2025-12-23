type Filter = {
  name: string;
  text: string;
  isChecked: boolean;
};

const FilterCard = (filter: Filter) => {
  function onFilterClick() {
    // TODO recalculate filter regex
  }

  return (
    <div>
      <label className="">
        <input
          type="checkbox"
          onChange={onFilterClick}
          checked={filter.isChecked}
        />
        <span>{filter.text}</span>
      </label>
    </div>
  );
};

export default FilterCard;
