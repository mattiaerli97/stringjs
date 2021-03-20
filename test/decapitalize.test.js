import {
  deCapitalizeFirst,
  deCapitalizeLast,
  deCapitalizeByIndex,
  deCapitalizeByLetter,
  deCapitalizeWords,
  deCapitalizeWordsByIndex,
} from '../src/features/decapitalize';

test('deCapitalizeFirst', () => {
  expect(deCapitalizeFirst('TEST')).toBe('tEST');
});

test('deCapitalizeLast', () => {
  expect(deCapitalizeLast('TEST')).toBe('TESt');
});

describe('deCapitalizeByIndex: ', () => {
  test('With String and Integer', () => {
    expect(deCapitalizeByIndex('TEST', 0)).toBe('tEST');
    expect(deCapitalizeByIndex('TEST', 1)).toBe('TeST');
    expect(deCapitalizeByIndex('TEST', 2)).toBe('TEsT');
    expect(deCapitalizeByIndex('TEST', 3)).toBe('TESt');
    expect(deCapitalizeByIndex('TEST', 4)).toBe('TEST');
  });

  test('With String and Array of Integers', () => {
    expect(deCapitalizeByIndex('TEST', [0, 2, 3, 5])).toBe('tEst');
  });

  test('With String and Test Function', () => {
    expect(deCapitalizeByIndex('TEST', (i) => i === 2 || i === 3)).toBe('TEst');
  });

  test('With String and Object (Not Allowed => Returns Input String)', () => {
    expect(deCapitalizeByIndex('TEST', {})).toBe('TEST');
  });
});

describe('deCapitalizeByLetter: ', () => {
  test('With String and Integer', () => {
    expect(deCapitalizeByLetter('TEST', 'T')).toBe('tESt');
    expect(deCapitalizeByLetter('TEST', 'E')).toBe('TeST');
    expect(deCapitalizeByLetter('TEST', 'A')).toBe('TEST');
  });

  test('With String and Array of Integers', () => {
    expect(deCapitalizeByLetter('TEST', ['T', 'E'])).toBe('teSt');
  });

  test('With String and Test Function', () => {
    expect(deCapitalizeByLetter('TEST', (l) => l === 'E' || l === 'S')).toBe('TesT');
  });

  test('With String and Object (Not Allowed => Returns Input String)', () => {
    expect(deCapitalizeByLetter('TEST', {})).toBe('TEST');
  });
});

describe('deCapitalizeWords: ', () => {
  test('With Only The String', () => {
    expect(deCapitalizeWords('TEST WORDS')).toBe('tEST wORDS');
  });
  test('With String And a Separator', () => {
    expect(deCapitalizeWords('TEST-WORDS', null, '-')).toBe('tEST-wORDS');
  });
  test('With String And a Specific Word', () => {
    expect(deCapitalizeWords('TEST WORDS', 'WORDS')).toBe('TEST wORDS');
  });
  test('With String And an Array of Words', () => {
    expect(deCapitalizeWords('TEST DECAPITALIZE WORDS', ['TEST', 'WORDS'])).toBe('tEST DECAPITALIZE wORDS');
  });
  test('With String And a Function', () => {
    expect(deCapitalizeWords('TEST DECAPITALIZE WORDS', (w) => w.includes('T'))).toBe('tEST dECAPITALIZE WORDS');
  });
});

describe('deCapitalizeWordsByIndex: ', () => {
  test('With Only The String', () => {
    expect(deCapitalizeWordsByIndex('TEST WORDS')).toBe('tEST wORDS');
  });
  test('With String And a Separator', () => {
    expect(deCapitalizeWordsByIndex('TEST-WORDS', null, '-')).toBe('tEST-wORDS');
  });
  test('With String And a Specific Index', () => {
    expect(deCapitalizeWordsByIndex('TEST WORDS', 1)).toBe('TEST wORDS');
  });
  test('With String And an Array of Indexes', () => {
    expect(deCapitalizeWordsByIndex('TEST CAPITALIZE WORDS', [1, 2])).toBe('TEST cAPITALIZE wORDS');
  });
  test('With String And a Function', () => {
    expect(deCapitalizeWordsByIndex('TEST CAPITALIZE WORDS', (i) => i > 1)).toBe('TEST CAPITALIZE wORDS');
  });
});
