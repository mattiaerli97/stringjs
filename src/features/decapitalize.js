import { sliceAndModifyChar } from '../common/index';

export const deCapitalizeFirst = (str) => sliceAndModifyChar(str, true, false);

export const deCapitalizeLast = (str) => sliceAndModifyChar(str, false, false);
