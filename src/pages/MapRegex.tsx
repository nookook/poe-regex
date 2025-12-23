import FilterProvider from "../context/FilterContext";
import FilterCardList from "../components/FilterCardList";
import FilterOutput from "../components/FilterOutput";

export default function MapRegex() {
  return (
    <main>
      <FilterProvider>
        <FilterOutput />

        <FilterCardList />
      </FilterProvider>
    </main>
  );
}
