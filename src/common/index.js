import {
  isString, isArray, isFunction, isNumber, transformChar,
} from '../utils/index';

export const sliceAndModifyChar = (str, isFirst, isUppercase) => {
  const strLength = str.length;

  let modifiedChar = isFirst ? str.charAt(0) : str.charAt(strLength - 1);
  modifiedChar = isUppercase ? modifiedChar.toUpperCase() : modifiedChar.toLowerCase();

  return isFirst ? modifiedChar + str.slice(1) : str.slice(0, strLength - 1) + modifiedChar;
};

export const checkByIndex = (str, idx, isUppercase) => {
  const getCharToLowerUpper = (index) => {
    let c = str.charAt(index);
    c = isUppercase
      ? c.toUpperCase()
      : c.toLowerCase();

    return c;
  };

  const strLength = str.length;
  if (isNumber(idx)) {
    switch (idx) {
      case 0:
        return isUppercase
          ? sliceAndModifyChar(str, true, true)
          : sliceAndModifyChar(str, true, false);
      case strLength - 1:
        return isUppercase
          ? sliceAndModifyChar(str, false, true)
          : sliceAndModifyChar(str, false, false);
      default:
        return str.slice(0, idx) + getCharToLowerUpper(idx) + str.slice(idx + 1, strLength);
    }
  } else if (isArray(idx)) {
    let s = str;
    idx.map((i) => {
      switch (i) {
        case 0:
          s = isUppercase ? sliceAndModifyChar(s, true, true) : sliceAndModifyChar(s, true, false);
          break;
        case strLength - 1:
          s = isUppercase
            ? sliceAndModifyChar(s, false, true)
            : sliceAndModifyChar(s, false, false);
          break;
        default:
          s = i > strLength
            ? s
            : s.slice(0, i) + getCharToLowerUpper(i) + s.slice(i + 1, strLength);
          break;
      }
      return i;
    });
    return s;
  } else if (isFunction(idx)) {
    let s = '';
    for (let i = 0; i < str.length; i += 1) {
      s += (idx(i) ? transformChar(str, i, isUppercase) : str[i]);
    }
    return s;
  } else {
    return str;
  }
};

export const checkAndUpperLower = (str, letter, isUppercase) => {
  let s = '';
  const machLetter = (i) => {
    let booleanCondition = false;
    if (isString(letter)) {
      booleanCondition = str[i] === letter;
    } else if (isArray(letter)) {
      booleanCondition = letter.includes(str[i]);
    } else if (isFunction(letter)) {
      booleanCondition = letter(str[i]);
    } else {
      false;
    }
    return booleanCondition;
  };
  for (let i = 0; i < str.length; i += 1) {
    s += (machLetter(i) ? transformChar(str, i, isUppercase) : str[i]);
  }
  return s;
};
