import {
  capitalizeFirst, capitalizeLast, capitalizeByIndex, capitalizeByLetter,
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
    expect(capitalizeByIndex('test', (i) => { return i === 2 || i === 3 })).toBe('teST');
  });

  test('With String and Object (Not Allowed => Returns Input String)', () => {
    expect(capitalizeByIndex('test', {})).toBe('test');
  });
})

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
    expect(capitalizeByLetter('test', (l) => { return l === 'e' || l === 's' })).toBe('tESt');
  });

  test('With String and Object (Not Allowed => Returns Input String)', () => {
    expect(capitalizeByLetter('test', {})).toBe('aaa');
  });
})
