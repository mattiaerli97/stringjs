// eslint-disable-next-line import/prefer-default-export
export const sliceAndModifyChar = (str, isFirst, isUppercase) => {
  const strLength = str.length;

  let modifiedChar = isFirst ? str.charAt(0) : str.charAt(strLength - 1);
  modifiedChar = isUppercase ? modifiedChar.toUpperCase() : modifiedChar.toLowerCase();

  return isFirst ? modifiedChar + str.slice(1) : str.slice(0, strLength - 1) + modifiedChar;
};
