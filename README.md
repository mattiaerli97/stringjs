# StringJs

StringJs is a library that introduces useful and easy functions to manipulate strings in JavaScript

&nbsp;

## Features

- import this package in your project
- choose a string and the right function in this library
- now you have your formatted string!

&nbsp;

## Installation

Installation steps

&nbsp;

## How To Import and Use

<code>const stringjs = require('stringjs')</code>  

After this import you can use any function provided in the [section below](#Functions-and-Methods) in this way  

<code>stringjs.capitalizeFirst()</code>

&nbsp;

## Functions and Methods

| Method | Input | Output |
| ------ | ----- | ------ |
| [capitalizeFirst](#capitalizeFirst) | a <code>string</code> | The string with the first letter capitalized |
| [capitalizeLast](#capitalizeLast) | a <code>string</code> | The string with the last letter capitalized |
| [capitalizeByIndex](#capitalizeByIndex) | a <code>string</code> and a parameter of type <code>number</code>, <code>array</code> or <code>function<code> | The string with the letter in the index provided (zero-based) capitalized. <ul><li>In case the provided second parameter is an <code>array</code> of integers, the string is capitalized in all the index positions</li><li>In case the provided second parameter is a <code>function</code>, the function is used to test if the index matches the boolean condition of the function and then makes that character in uppercase</li></ul> If the index is greater then the string's length, returns the string as provided |
| [capitalizeByLetter](#capitalizeByLetter) | a <code>string</code> and a parameter of type <code>number</code>, <code>array</code> or <code>function<code> | Converts in uppercase all the occurencies of the letter provided <ul><li>In case the provided second parameter is an <code>array</code> of characters, all the letters included in the array are converted in uppercase</li><li>In case the provided second parameter is a <code>function</code>, the function is used to test if the letter matches the boolean condition of the function and then makes that character in uppercase</li></ul>

&nbsp;

## Working Examples
### capitalizeFirst
```js
stringjs.capitalizeFirst('my cool string')

// OUTPUT: My cool string
```

### capitalizeLast
```js
stringjs.capitalizeLast('my cool string')

// OUTPUT: my cool strinG
```

### capitalizeByIndex
```js
stringjs.capitalizeByIndex('my cool string', 3)

// OUTPUT: my Cool string



stringjs.capitalizeByIndex('my cool string', 50)

// OUTPUT: my cool string



stringjs.capitalizeByIndex('my cool string', [0, 1, 5, 20, 6, 13])

// OUTPUT: MY coOL strinG



stringjs.capitalizeByIndex('my cool string', (i) => { return i === 3 || i === 5 })

// OUTPUT: my CoOl string
```

### capitalizeByLetter
```js
stringjs.capitalizeByLetter('test', 't')

// OUTPUT: TesT



stringjs.capitalizeByLetter('test', ['t', 'e'])

// OUTPUT: TEsT



stringjs.capitalizeByLetter('test', (l) => { return l === 'e' || l === 's' })

// OUTPUT: tESt
```

&nbsp;

## License

MIT