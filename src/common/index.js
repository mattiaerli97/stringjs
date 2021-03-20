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
    if (isString(letter)) {
      return str[i] === letter;
    } if (isArray(letter)) {
      return letter.includes(str[i]);
    } if (isFunction(letter)) {
      return letter(str[i]);
    }
    return false;
  };
  for (let i = 0; i < str.length; i += 1) {
    s += (machLetter(i) ? transformChar(str, i, isUppercase) : str[i]);
  }
  return s;
};

const upperAndLowerWord = (v, isUppercase) => (
  isUppercase
    ? sliceAndModifyChar(v, true, true)
    : sliceAndModifyChar(v, true, false));

export const checkWords = (str, words, sep, isUppercase) => {
  const separator = sep || ' ';
  let splitWords = str.split(separator);
  if (!words) {
    splitWords = splitWords.map((v) => upperAndLowerWord(v, isUppercase));
  } else if (isString(words)) {
    splitWords = splitWords.map((v) => (v === words ? upperAndLowerWord(v, isUppercase) : v));
  } else if (isArray(words)) {
    splitWords = splitWords.map((v) => (words.includes(v) ? upperAndLowerWord(v, isUppercase) : v));
  } else {
    splitWords = splitWords.map((v) => (words(v) ? upperAndLowerWord(v, isUppercase) : v));
  }
  return splitWords.join(separator);
};

export const checkWordsByIndex = (str, idx, sep, isUppercase) => {
  const separator = sep || ' ';
  let splitWords = str.split(separator);
  if (!idx) {
    splitWords = splitWords.map((v) => upperAndLowerWord(v, isUppercase));
  } else if (isNumber(idx)) {
    splitWords[idx] = upperAndLowerWord(splitWords[idx], isUppercase);
  } else if (isArray(idx)) {
    splitWords = splitWords.map((v, i) => (idx.includes(i)
      ? upperAndLowerWord(v, isUppercase)
      : v));
  } else {
    splitWords = splitWords.map((v, i) => (idx(i) ? upperAndLowerWord(v, isUppercase) : v));
  }
  return splitWords.join(separator);
};
