# POE REGEX

[https://nookook.github.io/poe-regex/](https://nookook.github.io/poe-regex/)

Path of Exile (PoE) is an online game featuring an option to search your stash using regex strings.

This page allows users to select what map modifiers they don't want to keep. It will then generate a short regex string to match all the selected options, but not match any of the unselected ones. Each match must be at least 4 characters long and not use complex regex notations to avoid false positives because in the game, maps are generated with random names and could get flagged by the regex. The code will make minor efforts at minimizing the size of the regex and combine similar choices together in the same regex.

(example:
"Monsters reflect 18% of Physical Damage" returns "!f ph" and
"Monsters reflect 18% of Elemental Damage" returns "!tal d",
but choosing both will return "!rs r").

Users can then copy+paste the regex string directly into the game's search feature.

This project was made using React, TypeScript and Tailwind.
