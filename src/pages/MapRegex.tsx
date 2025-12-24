import FilterProvider from "../context/FilterContext";
import FilterCardList from "../components/FilterCardList";
import FilterOutput from "../components/FilterOutput";
import "../css/style.css";

export default function MapRegex() {
  return (
    <main className="w-full">
      <FilterProvider>
        <FilterOutput />

        <FilterCardList />
      </FilterProvider>
    </main>
  );
}
