export type FilterOptionsType = {
  name: string;
  priority: 1 | 2 | 3 | 4 | 5; // 1 = most dangerous
  text: string;
};

export const filterOptions: FilterOptionsType[] = [
  // prefixes
  { name: "Ceremonial", priority: 5, text: "Area contains many Totems" },
  {
    name: "Antagonist's",
    priority: 5,
    text: "(20-30)% increased number of Rare Monsters",
  },
  {
    name: "Chaining",
    priority: 3,
    text: "Monsters' skills Chain 2 additional times",
  },
  { name: "Hexproof", priority: 3, text: "Monsters are Hexproof" },
  {
    name: "Hexwarded",
    priority: 4,
    text: "60% less effect of Curses on Monsters",
  },
  {
    name: "Twinned",
    priority: 5,
    text: "Area contains two Unique Bosses",
  },
  { name: "Unwavering", priority: 5, text: "(25-30)% more Monster Life" },
  {
    name: "Splitting",
    priority: 2,
    text: "Monsters fire 2 additional Projectiles",
  },
  {
    name: "Armoured",
    priority: 3,
    text: "+40% Monster Physical Damage Reduction",
  },
  { name: "Fecund", priority: 5, text: "(40-49)% more Monster Life" },
  {
    name: "Savage",
    priority: 4,
    text: "(22-25)% increased Monster Damage",
  },
  {
    name: "Burning",
    priority: 2,
    text: "Monsters deal (90-110)% extra Physical Damage as Fire",
  },
  {
    name: "Freezing",
    priority: 2,
    text: "Monsters deal (90-110)% extra Physical Damage as Cold",
  },
  {
    name: "Shocking",
    priority: 2,
    text: "Monsters deal (90-110)% extra Physical Damage as Lightning",
  },
  {
    name: "Profane",
    priority: 2,
    text: "Monsters gain (31-35)% of their Physical Damage as Extra Chaos Damage",
  },
  {
    name: "Fleet",
    priority: 2,
    text: `(25-30)% increased Monster Movement Speed
    (35-45)% increased Monster Attack Speed
    (35-45)% increased Monster Cast Speed`,
  },
  {
    name: "Punishing",
    priority: 1,
    text: "Monsters reflect 18% of Physical Damage",
  },
  {
    name: "Mirrored",
    priority: 1,
    text: "Monsters reflect 18% of Elemental Damage",
  },
  {
    name: "Overlord's",
    priority: 2,
    text: `Unique Boss deals 25% increased Damage
    Unique Boss has 30% increased Attack and Cast Speed`,
  },
  {
    name: "Titan's",
    priority: 2,
    text: `Unique Boss has 35% increased Life
    Unique Boss has 70% increased Area of Effect`,
  },
  {
    name: "Empowered",
    priority: 5,
    text: "Monsters have a 20% chance to Ignite, Freeze and Shock on Hit",
  },
  {
    name: "Unstoppable",
    priority: 5,
    text: `Monsters cannot be Taunted
    Monsters' Action Speed cannot be modified to below Base Value
    Monsters' Movement Speed cannot be modified to below Base Value`,
  },
  {
    name: "Conflagrating",
    priority: 5,
    text: "All Monster Damage from Hits always Ignites",
  },
  {
    name: "Resistant",
    priority: 2,
    text: `+25% Monster Chaos Resistance
    +40% Monster Elemental Resistances`,
  },
  {
    name: "Impervious",
    priority: 4,
    text: "Monsters have a 50% chance to avoid Poison, Impale, and Bleeding",
  },
  {
    name: "Impaling",
    priority: 4,
    text: "Monsters' Attacks have 60% chance to Impale on Hit",
  },
  {
    name: "Oppressive",
    priority: 3,
    text: "Monsters have +60% chance to Suppress Spell Damage",
  },
  {
    name: "Buffered",
    priority: 3,
    text: "Monsters gain (40-49)% of Maximum Life as Extra Maximum Energy Shield",
  },
  { name: "Enthralled", priority: 2, text: "Unique Bosses are Possessed" },
  // suffixes
  { name: "", priority: 5, text: "" },
];
