import * as CONSTANTS from "../constants/Constants";
import { FILTER_OPTIONS } from "../constants/FilterOptions";

export default function RegexCalculation(filters: string[]) {
  if (filters.length === 0) {
    return "";
  }

  const mustMatch: string[] = [];
  const mustMatchName: string[] = [];
  const mustNotMatch: string[] = [];

  // exclude characters that are only part of text used as number ranges:  - ( )
  // also exclude numbers because in the game you will get lower numbers on lower difficulty maps
  const charactersToIgnore = new RegExp(
    CONSTANTS.REGEX_CHARACTERS_TO_IGNORE_IN_FILTER_OPTIONS
  );

  for (const filter of FILTER_OPTIONS) {
    if (filters.includes(filter.name)) {
      /*
        adding in ^ and $ for regex matching later
        pushing name seperately because we want to avoid using it if possible

        changing everything to lowercase to simplify matching and in the game the regex search is case-insensitive
        */
      mustMatch.push(`^${filter.text}$`.toLowerCase());
      mustMatchName.push(`^${filter.name}$`.toLowerCase());
    } else {
      mustNotMatch.push(`^${filter.text}$^${filter.name}$`.toLowerCase());
    }
  }

  // brute force calculating because i'm too dumb to figure out a math formula that's better
  let regexOutputs: string[] = [];
  let regexStringFound = "";

  const findMyMatch = (thisMustMatch: string) => {
    let matchesFound = 0;
    let maxMatchesFound = -1;

    // form i long strings to search
    for (
      let i = CONSTANTS.MINIMUM_AMOUNT_OF_CHARACTERS;
      i < thisMustMatch.length;
      ++i
    ) {
      // loop through each character of the string
      for (let j = 0; j < thisMustMatch.length - i + 1; ++j) {
        const stringSearch = thisMustMatch.slice(j, j + i);
        if (stringSearch.search(charactersToIgnore) !== -1) {
          continue;
        }

        matchesFound = 0;

        if (
          !mustNotMatch.some((thisMustNotMatch) => {
            return thisMustNotMatch.includes(stringSearch);
          })
        ) {
          for (const eachMustMatch of mustMatch) {
            if (eachMustMatch.includes(stringSearch)) {
              matchesFound++;
            }
          }
          if (matchesFound > maxMatchesFound) {
            regexStringFound = stringSearch;
            maxMatchesFound = matchesFound;
          }
        }
      }
    }

    if (regexStringFound) {
      if (!regexOutputs.includes(regexStringFound))
        regexOutputs.push(regexStringFound);
    }
  };

  for (const [index, thisMustMatch] of mustMatch.entries()) {
    regexStringFound = "";

    for (const regexOutput of regexOutputs) {
      if (thisMustMatch.includes(regexOutput)) {
        regexStringFound = ".";
        break;
      }
    }
    if (regexStringFound) continue;

    findMyMatch(thisMustMatch);

    if (!regexStringFound) findMyMatch(mustMatchName[index]); // try matching with the name
    if (!regexStringFound) {
      return CONSTANTS.ERROR_NO_REGEX_MATCH_FOUND;
    }
  }

  const regexOutput = `"!${regexOutputs.join("|").replaceAll("+", "\\+")}"`;
  return regexOutput;
}
