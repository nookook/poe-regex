import FilterCard from "../components/FilterCard";

const filterOptions = [
  // prefixes
  { name: "Ceremonial", isChecked: false, text: "Area contains many Totems" },
  {
    name: "Antagonist's",
    isChecked: false,
    text: "(20—30)% increased number of Rare Monsters",
  },
  {
    name: "Chaining",
    isChecked: false,
    text: "Monsters' skills Chain 2 additional times",
  },
  { name: "Hexproof", isChecked: false, text: "Monsters are Hexproof" },
  {
    name: "Hexwarded",
    isChecked: false,
    text: "60% less effect of Curses on Monsters",
  },
  {
    name: "Twinned",
    isChecked: false,
    text: "Area contains two Unique Bosses",
  },
  { name: "Unwavering", isChecked: false, text: "(25—30)% more Monster Life" },
  {
    name: "Splitting",
    isChecked: false,
    text: "Monsters fire 2 additional Projectiles",
  },
  {
    name: "Armoured",
    isChecked: false,
    text: "+40% Monster Physical Damage Reduction",
  },
  { name: "Fecund", isChecked: false, text: "(40—49)% more Monster Life" },
  {
    name: "Savage",
    isChecked: false,
    text: "(22—25)% increased Monster Damage",
  },
  {
    name: "Burning",
    isChecked: false,
    text: "Monsters deal (90—110)% extra Physical Damage as Fire",
  },
  {
    name: "Freezing",
    isChecked: false,
    text: "Monsters deal (90—110)% extra Physical Damage as Cold",
  },
  {
    name: "Shocking",
    isChecked: false,
    text: "Monsters deal (90—110)% extra Physical Damage as Lightning",
  },
  {
    name: "Profane",
    isChecked: false,
    text: "Monsters gain (31—35)% of their Physical Damage as Extra Chaos Damage",
  },
  {
    name: "Fleet",
    isChecked: false,
    text: "(25—30)% increased Monster Movement Speed\n(35—45)% increased Monster Attack Speed\n(35—45)% increased Monster Cast Speed",
  },
  {
    name: "Punishing",
    isChecked: false,
    text: "Monsters reflect 18% of Physical Damage",
  },
  {
    name: "Mirrored",
    isChecked: false,
    text: "Monsters reflect 18% of Elemental Damage",
  },
  {
    name: "Overlord's",
    isChecked: false,
    text: "Unique Boss deals 25% increased Damage\nUnique Boss has 30% increased Attack and Cast Speed",
  },
  {
    name: "Titan's",
    isChecked: false,
    text: "Unique Boss has 35% increased Life\nUnique Boss has 70% increased Area of Effect",
  },
  {
    name: "Empowered",
    isChecked: false,
    text: "Monsters have a 20% chance to Ignite, Freeze and Shock on Hit",
  },
  {
    name: "Unstoppable",
    isChecked: false,
    text: "Monsters cannot be Taunted\nMonsters' Action Speed cannot be modified to below Base Value\nMonsters' Movement Speed cannot be modified to below Base Value",
  },
  {
    name: "Conflagrating",
    isChecked: false,
    text: "All Monster Damage from Hits always Ignites",
  },
  {
    name: "Resistant",
    isChecked: false,
    text: "+25% Monster Chaos Resistance\n+40% Monster Elemental Resistances",
  },
  {
    name: "Impervious",
    isChecked: false,
    text: "Monsters have a 50% chance to avoid Poison, Impale, and Bleeding",
  },
  {
    name: "Impaling",
    isChecked: false,
    text: "Monsters' Attacks have 60% chance to Impale on Hit",
  },
  {
    name: "Oppressive",
    isChecked: false,
    text: "Monsters have +60% chance to Suppress Spell Damage",
  },
  {
    name: "Buffered",
    isChecked: false,
    text: "Monsters gain (40—49)% of Maximum Life as Extra Maximum Energy Shield",
  },
  { name: "Enthralled", text: "Unique Bosses are Possessed" },
  // suffixes
  { name: "", isChecked: false, text: "" },
];

const loadFilters = () => {
  for (const filterOption of filterOptions) {
    filterOption["isChecked"] = false;
  }
};

const FilterCardList = () => {
  loadFilters();

  return (
    <div className="filterOptions">
      {filterOptions.map((filterOption) => (
        <FilterCard
          name={filterOption.name}
          text={filterOption.text}
          isChecked={!!filterOption.isChecked}
        />
      ))}
    </div>
  );
};

export default FilterCardList;
