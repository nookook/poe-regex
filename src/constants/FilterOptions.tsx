export type FilterOptionsType = {
  name: string;
  priority: 1 | 2 | 3 | 4 | 5; // 1 = most dangerous
  text: string;
  benefits: string;
};

export const filterOptions: FilterOptionsType[] = [
  // prefixes
  {
    name: "Ceremonial",
    priority: 5,
    text: "Area contains many Totems",
    benefits: `10% increased Quantity of Items found in this Area
6% increased Rarity of Items found in this Area
4% increased Pack size`,
  },
  {
    name: "Antagonist's",
    priority: 5,
    text: "(20-30)% increased number of Rare Monsters",
    benefits: `13% increased Quantity of Items found in this Area
8% increased Rarity of Items found in this Area
5% increased Pack size`,
  },
  {
    name: "Chaining",
    priority: 3,
    text: "Monsters' skills Chain 2 additional times",
    benefits: `16% increased Quantity of Items found in this Area
9% increased Rarity of Items found in this Area
6% increased Pack size`,
  },
  {
    name: "Hexproof",
    priority: 3,
    text: "Monsters are Hexproof",
    benefits: `16% increased Quantity of Items found in this Area
9% increased Rarity of Items found in this Area
6% increased Pack size`,
  },
  {
    name: "Hexwarded",
    priority: 4,
    text: "60% less effect of Curses on Monsters",
    benefits: `13% increased Quantity of Items found in this Area
8% increased Rarity of Items found in this Area
5% increased Pack size`,
  },
  {
    name: "Twinned",
    priority: 5,
    text: "Area contains two Unique Bosses",
    benefits: `19% increased Quantity of Items found in this Area
11% increased Rarity of Items found in this Area
7% increased Pack size`,
  },
  {
    name: "Unwavering",
    priority: 5,
    text: "(25-30)% more Monster Life",
    benefits: `13% increased Quantity of Items found in this Area
8% increased Rarity of Items found in this Area
5% increased Pack size`,
  },
  {
    name: "Splitting",
    priority: 2,
    text: "Monsters fire 2 additional Projectiles",
    benefits: `19% increased Quantity of Items found in this Area
11% increased Rarity of Items found in this Area
7% increased Pack size`,
  },
  {
    name: "Armoured",
    priority: 3,
    text: "+40% Monster Physical Damage Reduction",
    benefits: `13% increased Quantity of Items found in this Area
8% increased Rarity of Items found in this Area
5% increased Pack size`,
  },
  {
    name: "Fecund",
    priority: 5,
    text: "(40-49)% more Monster Life",
    benefits: `13% increased Quantity of Items found in this Area
8% increased Rarity of Items found in this Area
5% increased Pack size`,
  },
  {
    name: "Savage",
    priority: 4,
    text: "(22-25)% increased Monster Damage",
    benefits: `19% increased Quantity of Items found in this Area
11% increased Rarity of Items found in this Area
7% increased Pack size`,
  },
  {
    name: "Burning",
    priority: 2,
    text: "Monsters deal (90-110)% extra Physical Damage as Fire",
    benefits: `16% increased Quantity of Items found in this Area
9% increased Rarity of Items found in this Area
6% increased Pack size`,
  },
  {
    name: "Freezing",
    priority: 2,
    text: "Monsters deal (90-110)% extra Physical Damage as Cold",
    benefits: `16% increased Quantity of Items found in this Area
9% increased Rarity of Items found in this Area
6% increased Pack size`,
  },
  {
    name: "Shocking",
    priority: 2,
    text: "Monsters deal (90-110)% extra Physical Damage as Lightning",
    benefits: `16% increased Quantity of Items found in this Area
9% increased Rarity of Items found in this Area
6% increased Pack size`,
  },
  {
    name: "Profane",
    priority: 2,
    text: "Monsters gain (31-35)% of their Physical Damage as Extra Chaos Damage",
    benefits: `16% increased Quantity of Items found in this Area
9% increased Rarity of Items found in this Area
6% increased Pack size`,
  },
  {
    name: "Fleet",
    priority: 2,
    text: `(25-30)% increased Monster Movement Speed
(35-45)% increased Monster Attack Speed
(35-45)% increased Monster Cast Speed`,
    benefits: `19% increased Quantity of Items found in this Area
11% increased Rarity of Items found in this Area
7% increased Pack size`,
  },
  {
    name: "Punishing",
    priority: 1,
    text: "Monsters reflect 18% of Physical Damage",
    benefits: `10% increased Quantity of Items found in this Area
6% increased Rarity of Items found in this Area
4% increased Pack size`,
  },
  {
    name: "Mirrored",
    priority: 1,
    text: "Monsters reflect 18% of Elemental Damage",
    benefits: `10% increased Quantity of Items found in this Area
6% increased Rarity of Items found in this Area
4% increased Pack size`,
  },
  {
    name: "Overlord's",
    priority: 2,
    text: `Unique Boss deals 25% increased Damage
Unique Boss has 30% increased Attack and Cast Speed`,
    benefits: `16% increased Quantity of Items found in this Area
9% increased Rarity of Items found in this Area
6% increased Pack size`,
  },
  {
    name: "Titan's",
    priority: 2,
    text: `Unique Boss has 35% increased Life
Unique Boss has 70% increased Area of Effect`,
    benefits: `13% increased Quantity of Items found in this Area
8% increased Rarity of Items found in this Area
5% increased Pack size`,
  },
  {
    name: "Empowered",
    priority: 5,
    text: "Monsters have a 20% chance to Ignite, Freeze and Shock on Hit",
    benefits: `13% increased Quantity of Items found in this Area
8% increased Rarity of Items found in this Area
5% increased Pack size`,
  },
  {
    name: "Unstoppable",
    priority: 5,
    text: `Monsters cannot be Taunted
Monsters' Action Speed cannot be modified to below Base Value
Monsters' Movement Speed cannot be modified to below Base Value`,
    benefits: `10% increased Quantity of Items found in this Area
6% increased Rarity of Items found in this Area
4% increased Pack size`,
  },
  {
    name: "Conflagrating",
    priority: 5,
    text: "All Monster Damage from Hits always Ignites",
    benefits: `10% increased Quantity of Items found in this Area
6% increased Rarity of Items found in this Area
4% increased Pack size`,
  },
  {
    name: "Resistant",
    priority: 2,
    text: `+25% Monster Chaos Resistance
+40% Monster Elemental Resistances`,
    benefits: `13% increased Quantity of Items found in this Area
8% increased Rarity of Items found in this Area
5% increased Pack size`,
  },
  {
    name: "Impervious",
    priority: 4,
    text: "Monsters have a 50% chance to avoid Poison, Impale, and Bleeding",
    benefits: `10% increased Quantity of Items found in this Area
6% increased Rarity of Items found in this Area
4% increased Pack size`,
  },
  {
    name: "Impaling",
    priority: 4,
    text: "Monsters' Attacks have 60% chance to Impale on Hit",
    benefits: `16% increased Quantity of Items found in this Area
9% increased Rarity of Items found in this Area
6% increased Pack size`,
  },
  {
    name: "Oppressive",
    priority: 3,
    text: "Monsters have +60% chance to Suppress Spell Damage",
    benefits: `13% increased Quantity of Items found in this Area
8% increased Rarity of Items found in this Area
5% increased Pack size`,
  },
  {
    name: "Buffered",
    priority: 3,
    text: "Monsters gain (40-49)% of Maximum Life as Extra Maximum Energy Shield",
    benefits: `13% increased Quantity of Items found in this Area
8% increased Rarity of Items found in this Area
5% increased Pack size`,
  },
  {
    name: "Enthralled",
    priority: 2,
    text: "Unique Bosses are Possessed",
    benefits: `16% increased Quantity of Items found in this Area
9% increased Rarity of Items found in this Area
6% increased Pack size`,
  },
  {
    name: "Skeletal",
    priority: 5,
    text: "Area is inhabited by Skeletons",
    benefits: `13% increased Quantity of Items found in this Area
8% increased Rarity of Items found in this Area
5% increased Pack size`,
  },
  {
    name: "Capricious",
    priority: 5,
    text: "Area is inhabited by Goatmen",
    benefits: `13% increased Quantity of Items found in this Area
8% increased Rarity of Items found in this Area
5% increased Pack size`,
  },
  {
    name: "Slithering",
    priority: 5,
    text: "Area is inhabited by Sea Witches and their Spawn",
    benefits: `13% increased Quantity of Items found in this Area
8% increased Rarity of Items found in this Area
5% increased Pack size`,
  },
  {
    name: "Undead",
    priority: 5,
    text: "Area is inhabited by Undead",
    benefits: `13% increased Quantity of Items found in this Area
8% increased Rarity of Items found in this Area
5% increased Pack size`,
  },
  {
    name: "Emanant",
    priority: 5,
    text: "Area is inhabited by ranged monsters",
    benefits: `13% increased Quantity of Items found in this Area
8% increased Rarity of Items found in this Area
5% increased Pack size`,
  },
  {
    name: "Feral",
    priority: 5,
    text: "Area is inhabited by Animals",
    benefits: `16% increased Quantity of Items found in this Area
9% increased Rarity of Items found in this Area
6% increased Pack size`,
  },
  {
    name: "Demonic",
    priority: 5,
    text: "Area is inhabited by Demons",
    benefits: `13% increased Quantity of Items found in this Area
8% increased Rarity of Items found in this Area
5% increased Pack size`,
  },
  {
    name: "Bipedal",
    priority: 5,
    text: "Area is inhabited by Humanoids",
    benefits: `13% increased Quantity of Items found in this Area
8% increased Rarity of Items found in this Area
5% increased Pack size`,
  },
  {
    name: "Solar",
    priority: 5,
    text: "Area is inhabited by Solaris fanatics",
    benefits: `13% increased Quantity of Items found in this Area
8% increased Rarity of Items found in this Area
5% increased Pack size`,
  },
  {
    name: "Lunar",
    priority: 5,
    text: "Area is inhabited by Lunaris fanatics",
    benefits: `13% increased Quantity of Items found in this Area
8% increased Rarity of Items found in this Area
5% increased Pack size`,
  },
  {
    name: "Haunting",
    priority: 5,
    text: "Area is inhabited by Ghosts",
    benefits: `13% increased Quantity of Items found in this Area
8% increased Rarity of Items found in this Area
5% increased Pack size`,
  },
  {
    name: "Feasting",
    priority: 5,
    text: "Area is inhabited by Cultists of Kitava",
    benefits: `16% increased Quantity of Items found in this Area
9% increased Rarity of Items found in this Area
6% increased Pack size`,
  },
  {
    name: "Multifarious",
    priority: 5,
    text: "Area has increased monster variety",
    benefits: `10% increased Quantity of Items found in this Area
6% increased Rarity of Items found in this Area
4% increased Pack size`,
  },
  {
    name: "Abhorrent",
    priority: 5,
    text: "Area is inhabited by Abominations",
    benefits: `16% increased Quantity of Items found in this Area
9% increased Rarity of Items found in this Area
6% increased Pack size`,
  },

  // suffixes

  //{ name: "", priority: 5, text: "", benefits: `` },
];
