import {
  sliceAndModifyChar,
  checkAndUpperLower, checkByIndex,
} from '../common/index';

import {
  isString, isArray, isFunction, isNumber,
} from '../utils/index';

export const capitalizeFirst = (str) => sliceAndModifyChar(str, true, true);

export const capitalizeLast = (str) => sliceAndModifyChar(str, false, true);

export const capitalizeByIndex = (str, idx) => checkByIndex(str, idx, true);

export const capitalizeByLetter = (str, letter) => checkAndUpperLower(str, letter, true);

export const capitalizeWords = (str, sep, words) => {
  const separator = sep || ' ';
  const splitWords = str.split(separator);
  if (!words) {
    splitWords.map((v) => {
      const cap = capitalizeFirst(v);
      return cap;
    });
  } else if (isString(words)) {
    splitWords.map((v) => {
      const cap = v === words ? capitalizeFirst(v) : v;
      return cap;
    });
  } else if (isArray(words)) {
    splitWords.map((v) => (words.includes(v) ? capitalizeFirst(v) : v));
  } else if (isFunction(words)) {
    splitWords.map((v) => (words(v) ? capitalizeFirst(v) : v));
  }
  return splitWords.join(separator);
};

export const capitalizeWordsByIndex = (str, sep, idx) => {
  const separator = sep || ' ';
  if (!idx) {
    return str;
  } if (isNumber(idx)) {
    // capitalize the word at index contained in 'idx' (zero-based)
  } else if (isArray(idx)) {
    // capitalize all the words at indexes contained in 'idx'
  } else if (isFunction(idx)) {
    // capitalize all the words at indexes contained in 'idx' based on a boolean function
  }
};
