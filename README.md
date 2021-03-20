# stringjs

<b>stringjs</b> is a library that introduces useful and easy functions to manipulate strings in JavaScript

&nbsp;

![example workflow](https://github.com/mattiaerli97/stringjs/actions/workflows/main.yml/badge.svg)
[![codecov](https://codecov.io/gh/mattiaerli97/stringjs/branch/master/graph/badge.svg?token=I5B2S8N1BW)](https://codecov.io/gh/mattiaerli97/stringjs)
![dependencies](https://status.david-dm.org/gh/mattiaerli97/stringjs.svg)
![devdependencies](https://status.david-dm.org/gh/mattiaerli97/stringjs.svg?type=dev)
[![CodeFactor](https://www.codefactor.io/repository/github/mattiaerli97/stringjs/badge)](https://www.codefactor.io/repository/github/mattiaerli97/stringjs)

&nbsp;

## Features

- import this package in your project
- choose a string and the right function in this library
- now you have your formatted string!

&nbsp;

## Installation

<code>npm install --save stringjs</code>

or

<code>yarn add stringjs</code>

&nbsp;

## How To Import and Use

<code>const stringjs = require('stringjs')</code>  

or

<code>import stringjs from 'stringjs'</code>  

&nbsp;

After this import you can use any function provided in the [section below](#Functions-and-Methods) with this call structure  

<code>stringjs.capitalizeFirst()</code>

&nbsp;

## Functions and Methods

| Method | Parameters | Output |
| ------ | ----- | ------ |
| [capitalizeFirst](#capitalizeFirst) | <ol><li><code>string</code></li></ol> | The string with the first letter capitalized |
| [capitalizeLast](#capitalizeLast) | <ol><li><code>string</code></li></ol> | The string with the last letter capitalized |
| [capitalizeByIndex](#capitalizeByIndex) | <ol><li><code>string</code></li><li><code>number</code>, <code>array</code> or <code>function<code></li></ol> | The string with the letter in the index provided (zero-based) capitalized. <ul><li>In case the provided second parameter is an <code>array</code> of integers, the string is capitalized in all the index positions</li><li>In case the provided second parameter is a <code>function</code>, the function is used to test if the index matches the boolean condition of the function and then makes that character in uppercase</li></ul> If the index is greater then the string's length, returns the string as provided |
| [capitalizeByLetter](#capitalizeByLetter) | <ol><li><code>string</code></li><li><code>string (char)</code>, <code>array</code> or <code>function<code></li></ol> | Converts in uppercase all the occurencies of the letter provided <ul><li>In case the provided second parameter is an <code>array</code> of characters, all the letters included in the array are converted in uppercase</li><li>In case the provided second parameter is a <code>function</code>, the function is used to test if the letter matches the boolean condition of the function and then makes that characters in uppercase</li></ul> |
| [capitalizeWords](#capitalizeWords) |<ol><li><code>string</code></li><li><code>string</code>, <code>array</code> or <code>function<code></li><li>string (char)</li></ol> | Capitalize all the words in a sentence or some specific words, even if separated with particular characters (third parameter)<ul><li>In case the provided second parameter is a <code>string</code> only that word is capitalized</li><li>In case the provided second parameter is an <code>array</code> of strings, all the words included in the array are capitalized</li><li>In case the provided second parameter is a <code>function</code>, the function is used to test if the word matches the boolean condition of the function and then capitalizes that word</li></ul> |
| [capitalizeWordsByIndex](#capitalizeWordsByIndex) | <ol><li><code>string</code></li><li><code>number</code>, <code>array</code> or <code>function<code></li><li>string (char)</li></ol> | Capitalize all the words in a sentence or some specific words by index provided, even if separated with particular characters (third parameter) <ul><li>In case the provided second parameter is a <code>number</code> only the word at that index is capitalized</li><li>In case the provided second parameter is an <code>array</code> of integers, all the words at the indexes included in the array are capitalized</li><li>In case the provided second parameter is a <code>function</code>, the function is used to test if the index of the word matches the boolean condition of the function and then capitalizes that word</li></ul> |
| [deCapitalizeFirst](#deCapitalizeFirst) | <ol><li><code>string</code></li></ol> | The string with the first letter decapitalized |
| [deCapitalizeLast](#deCapitalizeLast) | <ol><li><code>string</code></li></ol> | The string with the last letter decapitalized |
| [deCapitalizeByIndex](#deCapitalizeByIndex) | <ol><li><code>string</code></li><li><code>number</code>, <code>array</code> or <code>function<code></li></ol> | The string with the letter in the index provided (zero-based) capitalized. <ul><li>In case the provided second parameter is an <code>array</code> of integers, the string is decapitalized in all the index positions</li><li>In case the provided second parameter is a <code>function</code>, the function is used to test if the index matches the boolean condition of the function and then makes that character in lowercase</li></ul> If the index is greater then the string's length, returns the string as provided |
| [deCapitalizeByLetter](#deCapitalizeByLetter) | <ol><li><code>string</code></li><li><code>string (char)</code>, <code>array</code> or <code>function<code></li></ol> | Converts in lowercase all the occurencies of the letter provided <ul><li>In case the provided second parameter is an <code>array</code> of characters, all the letters included in the array are converted in lowercase</li><li>In case the provided second parameter is a <code>function</code>, the function is used to test if the letter matches the boolean condition of the function and then makes that characters in lowercase</li></ul> |
| [deCapitalizeWords](#deCapitalizeWords) |<ol><li><code>string</code></li><li><code>string</code>, <code>array</code> or <code>function<code></li><li>string (char)</li></ol> | Decapitalize all the words in a sentence or some specific words, even if separated with particular characters (third parameter)<ul><li>In case the provided second parameter is a <code>string</code> only that word is decapitalized</li><li>In case the provided second parameter is an <code>array</code> of strings, all the words included in the array are decapitalized</li><li>In case the provided second parameter is a <code>function</code>, the function is used to test if the word matches the boolean condition of the function and then decapitalizes that word</li></ul> |
| [deCapitalizeWordsByIndex](#deCapitalizeWordsByIndex) | <ol><li><code>string</code></li><li><code>number</code>, <code>array</code> or <code>function<code></li><li>string (char)</li></ol> | Decapitalize all the words in a sentence or some specific words by index provided, even if separated with particular characters (third parameter) <ul><li>In case the provided second parameter is a <code>number</code> only the word at that index is decapitalized</li><li>In case the provided second parameter is an <code>array</code> of integers, all the words at the indexes included in the array are decapitalized</li><li>In case the provided second parameter is a <code>function</code>, the function is used to test if the index of the word matches the boolean condition of the function and then decapitalizes that word</li></ul> |

&nbsp;

## Working Examples
### capitalizeFirst
```js
stringjs.capitalizeFirst('my cool string') // My cool string
```

### capitalizeLast
```js
stringjs.capitalizeLast('my cool string') // my cool strinG
```

### capitalizeByIndex
```js
stringjs.capitalizeByIndex('my cool string', 3) // my Cool string

stringjs.capitalizeByIndex('my cool string', 50) // my cool string

stringjs.capitalizeByIndex('my cool string', [0, 1, 5, 20, 6, 13]) // MY coOL strinG

stringjs.capitalizeByIndex('my cool string', (i) => { return i === 3 || i === 5 }) // my CoOl string
```

### capitalizeByLetter
```js
stringjs.capitalizeByLetter('test', 't') // TesT

stringjs.capitalizeByLetter('test', ['t', 'e']) // TEsT

stringjs.capitalizeByLetter('test', (l) => { return l === 'e' || l === 's' }) // tESt
```

### capitalizeWords
```js
stringjs.capitalizeWords('test words') // Test Words

stringjs.capitalizeWords('test-words', null, '-') // Test-Words

stringjs.capitalizeWords('test words', 'words') // test Words

stringjs.capitalizeWords('test capitalize words', ['test', 'words']) // Test capitalize Words

stringjs.capitalizeWords('test capitalize words', (w) => { return w.includes('t') } // Test Capitalize words
```

### capitalizeWordsByIndex
```js
stringjs.capitalizeWordsByIndex('test words') // Test Words

stringjs.capitalizeWordsByIndex('test-words', null, '-') // Test-Words

stringjs.capitalizeWordsByIndex('test words', 1) // test Words

stringjs.capitalizeWordsByIndex('test capitalize words', [1, 2]) // test Capitalize Words

stringjs.capitalizeWordsByIndex('test capitalize words', (i) => { return i > 1 }) // test capitalize Words
```

### deCapitalizeFirst
```js
stringjs.deCapitalizeFirst('TEST') // tEST
```

### deCapitalizeLast
```js
stringjs.deCapitalizeLast('TEST') // TESt
```

### deCapitalizeByIndex
```js
stringjs.deCapitalizeByIndex('MY COOL STRING', 3) // MY cOOL STRING

stringjs.deCapitalizeByIndex('MY COOL STRING', 50) // MY COOL STRING

stringjs.deCapitalizeByIndex('MY COOL STRING', [0, 1, 5, 20, 6, 13]) // my COol STRINg

stringjs.deCapitalizeByIndex('MY COOL STRING', (i) => { return i === 3 || i === 5 }) // MY cOoL STRING
```

### deCapitalizeByLetter
```js
stringjs.deCapitalizeByLetter('TEST', 'T') // tESt

stringjs.deCapitalizeByLetter('TEST', ['T', 'E']) // teSt

stringjs.deCapitalizeByLetter('TEST', (l) => { return l === 'E' || l === 'S' }) // TesT
```

### deCapitalizeWords
```js
stringjs.deCapitalizeWords('TEST WORDS') // tEST wORDS

stringjs.deCapitalizeWords('TEST-WORDS', null, '-') // tEST-wORDS

stringjs.deCapitalizeWords('TEST WORDS', 'WORDS') // TEST wORDS

stringjs.deCapitalizeWords('TEST DECAPITALIZE WORDS', ['TEST', 'WORDS']) // tEST DECAPITALIZE wORDS

stringjs.deCapitalizeWords('TEST DECAPITALIZE WORDS', (w) => { return w.includes('T') } // tEST dECAPITALIZE WORDS
```

### deCapitalizeWordsByIndex
```js
stringjs.deCapitalizeWordsByIndex('TEST WORDS') // tEST wORDS

stringjs.deCapitalizeWordsByIndex('TEST-WORDS', null, '-') // tEST-wORDS

stringjs.deCapitalizeWordsByIndex('TEST WORDS', 1) // TEST wORDS

stringjs.deCapitalizeWordsByIndex('TEST DECAPITALIZE WORDS', [1, 2]) // TEST dECAPITALIZE wORDS

stringjs.deCapitalizeWordsByIndex('TEST DECAPITALIZE WORDS', (i) => { return i > 1 }) // TEST DECAPITALIZE wORDS

&nbsp;

## License

MIT