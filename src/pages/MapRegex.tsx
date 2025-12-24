import FilterProvider from "../context/FilterContext";
import FilterCardList from "../components/FilterCardList";
import "../css/style.css";

export default function MapRegex() {
  return (
    <main className="w-full">
      <h1 className="text-4xl mb-6 text-left">
        <img
          className="inline h-12 mr-3"
          src="https://www.poewiki.net/images/9/9c/Mirror_of_Kalandra_inventory_icon.png"
        />
        PoE Map Modifier Regex Generator
        <div className="border mt-1"></div>
      </h1>
      <FilterProvider>
        <FilterCardList />
      </FilterProvider>
    </main>
  );
}
