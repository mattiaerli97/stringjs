import {
  isString, isArray, isFunction, isNumber,
} from '../utils/index';
import { sliceAndModifyChar } from '../common/index';

export const capitalizeFirst = (str) => sliceAndModifyChar(str, true, true);

export const capitalizeLast = (str) => sliceAndModifyChar(str, false, true);

export const capitalizeByIndex = (str, idx) => {
  const strLength = str.length;
  let charToUppercase = '';
  if (isNumber(idx)) {
    switch (idx) {
      case 0:
        return capitalizeFirst(str);
      case strLength - 1:
        return capitalizeLast(str);
      default:
        charToUppercase = str.charAt(idx).toUpperCase();
        return str.slice(0, idx) + charToUppercase + str.slice(idx + 1, strLength);
    }
  } else if (isArray(idx)) {
    let s = str;
    idx.map((i) => {
      switch (i) {
        case 0:
          s = capitalizeFirst(s);
          break;
        case strLength - 1:
          s = capitalizeLast(s);
          break;
        default:
          charToUppercase = s.charAt(i).toUpperCase();
          s = i > strLength ? s : s.slice(0, i) + charToUppercase + s.slice(i + 1, strLength);
          break;
      }
      return i;
    });
    return s;
  } else if (isFunction(idx)) {
    let s = '';
    for (let i = 0; i < str.length; i += 1) {
      s += (idx(i) ? str[i].toUpperCase() : str[i]);
    }
    return s;
  }
  return str;
};

export const capitalizeByLetter = (str, letter) => {
  let s = '';
  const machLetter = (i) => {
    let booleanCondition = false;
    if (isString(letter)) {
      booleanCondition = str[i] === letter;
    } else if (isArray(letter)) {
      booleanCondition = letter.includes(str[i]);
    } else if (isFunction(letter)) {
      booleanCondition = letter(str[i]);
    }
    return booleanCondition;
  };
  for (let i = 0; i < str.length; i += 1) {
    s += (machLetter(i) ? str[i].toUpperCase() : str[i]);
  }
  return s;
};
