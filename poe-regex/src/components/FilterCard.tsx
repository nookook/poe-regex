export default function FilterCard({
  name,
  isChecked,
  priority,
  text,
}: {
  name: string;
  isChecked: boolean;
  priority: 1 | 2 | 3 | 4 | 5;
  text: string;
}) {
  function onFilterClick() {
    // TODO recalculate filter regex
  }

  return (
    <div>
      <label className="">
        <input type="checkbox" onChange={onFilterClick} checked={isChecked} />
        <span className={`priority-${priority}`}>
          {text} [<i>{name}</i>]
        </span>
      </label>
    </div>
  );
}
