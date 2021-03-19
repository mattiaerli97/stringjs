import {
  sliceAndModifyChar,
  checkAndUpperLower,
  checkByIndex,
  checkWords,
  checkWordsByIndex,
} from '../common/index';

export const deCapitalizeFirst = (str) => sliceAndModifyChar(str, true, false);

export const deCapitalizeLast = (str) => sliceAndModifyChar(str, false, false);

export const deCapitalizeByIndex = (str, idx) => checkByIndex(str, idx, false);

export const deCapitalizeByLetter = (str, letter) => checkAndUpperLower(str, letter, false);

export const deCapitalizeWords = (str, sep, words) => checkWords(str, sep, words, false);

export const deCapitalizeWordsByIndex = (str, sep, idx) => checkWordsByIndex(str, sep, idx, false);
