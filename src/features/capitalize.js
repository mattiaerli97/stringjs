import {
  sliceAndModifyChar,
  checkAndUpperLower,
  checkByIndex,
  checkWords,
  checkWordsByIndex,
} from '../common/index';

export const capitalizeFirst = (str) => sliceAndModifyChar(str, true, true);

export const capitalizeLast = (str) => sliceAndModifyChar(str, false, true);

export const capitalizeByIndex = (str, idx) => checkByIndex(str, idx, true);

export const capitalizeByLetter = (str, letter) => checkAndUpperLower(str, letter, true);

export const capitalizeWords = (str, sep, words) => checkWords(str, sep, words, true);

export const capitalizeWordsByIndex = (str, sep, idx) => checkWordsByIndex(str, sep, idx, true);
