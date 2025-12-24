import FilterProvider from "../context/FilterContext";
import FilterCardList from "../components/FilterCardList";
import "../css/style.css";

export default function MapRegex() {
  return (
    <main className="w-full">
      <FilterProvider>
        <FilterCardList />
      </FilterProvider>
    </main>
  );
}
