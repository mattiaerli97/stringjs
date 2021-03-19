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

export const capitalizeWords = (str, words, sep) => {
  const separator = sep || ' ';
  let splitWords = str.split(separator);
  if (!words) {
    splitWords = splitWords.map((v) => capitalizeFirst(v));
  } else if (isString(words)) {
    splitWords = splitWords.map((v) => v === words && capitalizeFirst(v));
  } else if (isArray(words)) {
    splitWords = splitWords.map((v) => words.includes(v) && capitalizeFirst(v));
  } else if (isFunction(words)) {
    splitWords = splitWords.map((v) => words(v) && capitalizeFirst(v));
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
