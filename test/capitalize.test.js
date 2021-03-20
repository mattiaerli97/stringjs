import {
  capitalizeFirst,
  capitalizeLast,
  capitalizeByIndex,
  capitalizeByLetter,
  capitalizeWords,
  capitalizeWordsByIndex,
} from '../src/features/capitalize';

test('capitalizeFirst', () => {
  expect(capitalizeFirst('test')).toBe('Test');
});

test('capitalizeLast', () => {
  expect(capitalizeLast('test')).toBe('tesT');
});

describe('capitalizeByIndex: ', () => {
  test('With String and Integer', () => {
    expect(capitalizeByIndex('test', 0)).toBe('Test');
    expect(capitalizeByIndex('test', 1)).toBe('tEst');
    expect(capitalizeByIndex('test', 2)).toBe('teSt');
    expect(capitalizeByIndex('test', 3)).toBe('tesT');
    expect(capitalizeByIndex('test', 4)).toBe('test');
  });

  test('With String and Array of Integers', () => {
    expect(capitalizeByIndex('test', [0, 2, 3, 5])).toBe('TeST');
  });

  test('With String and Test Function', () => {
    expect(capitalizeByIndex('test', (i) => i === 2 || i === 3)).toBe('teST');
  });

  test('With String and Object (Not Allowed => Returns Input String)', () => {
    expect(capitalizeByIndex('test', {})).toBe('test');
  });
});

describe('capitalizeByLetter: ', () => {
  test('With String and Integer', () => {
    expect(capitalizeByLetter('test', 't')).toBe('TesT');
    expect(capitalizeByLetter('test', 'e')).toBe('tEst');
    expect(capitalizeByLetter('test', 'a')).toBe('test');
  });

  test('With String and Array of Integers', () => {
    expect(capitalizeByLetter('test', ['t', 'e'])).toBe('TEsT');
  });

  test('With String and Test Function', () => {
    expect(capitalizeByLetter('test', (l) => l === 'e' || l === 's')).toBe('tESt');
  });

  test('With String and Object (Not Allowed => Returns Input String)', () => {
    expect(capitalizeByLetter('test', {})).toBe('test');
  });
});

describe('capitalizeWords: ', () => {
  test('With Only The String', () => {
    expect(capitalizeWords('test words')).toBe('Test Words');
  });
  test('With String And a Separator', () => {
    expect(capitalizeWords('test-words', null, '-')).toBe('Test-Words');
  });
  test('With String And a Specific Word', () => {
    expect(capitalizeWords('test words', 'words')).toBe('test Words');
  });
  test('With String And an Array of Words', () => {
    expect(capitalizeWords('test capitalize words', ['test', 'words'])).toBe('Test capitalize Words');
  });
  test('With String And a Function', () => {
    expect(capitalizeWords('test capitalize words', (w) => w.includes('t'))).toBe('Test Capitalize words');
  });
});

describe('capitalizeWordsByIndex: ', () => {
  test('With Only The String', () => {
    expect(capitalizeWordsByIndex('test words')).toBe('Test Words');
  });
  test('With String And a Separator', () => {
    expect(capitalizeWordsByIndex('test-words', null, '-')).toBe('Test-Words');
  });
  test('With String And a Specific Index', () => {
    expect(capitalizeWordsByIndex('test words', 1)).toBe('test Words');
  });
  test('With String And an Array of Indexes', () => {
    expect(capitalizeWordsByIndex('test capitalize words', [1, 2])).toBe('test Capitalize Words');
  });
  test('With String And a Function', () => {
    expect(capitalizeWordsByIndex('test capitalize words', (i) => i > 1)).toBe('test capitalize Words');
  });
});
