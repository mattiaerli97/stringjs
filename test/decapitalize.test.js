import {
    deCapitalizeFirst, deCapitalizeLast, deCapitalizeByIndex, deCapitalizeByLetter,
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
      expect(deCapitalizeByIndex('TEST', (i) => { return i === 2 || i === 3 })).toBe('TEst');
    });

    test('With String and Object (Not Allowed => Returns Input String)', () => {
      expect(deCapitalizeByIndex('TEST', {})).toBe('TEST');
    });
  })
  
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
      expect(deCapitalizeByLetter('TEST', (l) => { return l === 'E' || l === 'S' })).toBe('TesT');
    });

    test('With String and Object (Not Allowed => Returns Input String)', () => {
      expect(deCapitalizeByLetter('TEST', {})).toBe('TEST');
    });
  })
  