import {
  sliceAndModifyChar,
  checkAndUpperLower, checkByIndex,
} from '../common/index';

export const capitalizeFirst = (str) => sliceAndModifyChar(str, true, true);

export const capitalizeLast = (str) => sliceAndModifyChar(str, false, true);

export const capitalizeByIndex = (str, idx) => checkByIndex(str, idx, true);

export const capitalizeByLetter = (str, letter) => checkAndUpperLower(str, letter, true);
