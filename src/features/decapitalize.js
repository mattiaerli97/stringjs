import {
  sliceAndModifyChar,
  checkAndUpperLower, checkByIndex,
} from '../common/index';

export const deCapitalizeFirst = (str) => sliceAndModifyChar(str, true, false);

export const deCapitalizeLast = (str) => sliceAndModifyChar(str, false, false);

export const deCapitalizeByIndex = (str, idx) => checkByIndex(str, idx, false);

export const deCapitalizeByLetter = (str, letter) => checkAndUpperLower(str, letter, false);
