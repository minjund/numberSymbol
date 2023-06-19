# Number_Symbols

`Number Symbols` displays symbols according to the number of digits.

If the second argument is set to true, ['K', 'M', 'G', 'T', 'P', 'E', 'Z'] is displayed according to the number of digits.

The default return value consists of only String Type and false.

# Install
Install with npm:
```
npm i number_symbol
```

## Usage

1. The default setting is to put a comma every 3 digits.<br>
   The result comes out regardless of String type or Int type.
```js
var Symbol = require('number_symbols')
Symbol(1233) // 1,233
Symbol('1233', true) // 1K
```
2. Returns 0 if the input value is empty or null.
```js
var Symbol = require('number_symbols')
Symbol('', true) // '0'
Symbol(null, true) // '0'
```
3. When a character comes in, you can return false or enter the 4th value to make a custom return.
```js
var Symbol = require('number_symbols')
Symbol('1233abc', false, 1) // false
Symbol('1ab2bc', false, 1) // false
Symbol('ab2bc', false, 1) // false
Symbol('ab2bc', false, 1, '-') // -
Symbol('1ab2bc', false, 1, '??') // ??
```
4. If the second argument is set to true, ['K', 'M', 'G', 'T', 'P', 'E', 'Z'] is displayed according to the number of digits.
```js
var Symbol = require('number_symbols');
Symbol(1233, true) // 1K
Symbol('1233', true) // 1K
Symbol(1233, false) // 1,233
Symbol('1233', false) // 1,233
```
5. If the second is set to true and the third is greater than 0, decimal points are displayed as much as that factor. If false, a decimal point is displayed.
```js
var Symbol = require('number_symbols');

Symbol(1233, true, 1) // "1.2K"
Symbol('1233', true, 2) // "1.23K"
Symbol('1233', true, 3) // "1.233K"

Symbol(1233, false) // "1,233"
Symbol(1233, false, 1) // "1233.0"
Symbol(1233, false, 2) // "1233.00"

Symbol(1233.12, false, 2) // "1,233.12"
Symbol(123.12, false, 2) // "123.12"
Symbol(1233.12, true, 2) // "1.23K"
```
6. afterDotLength can be input up to max 100 and returns false from 101 or higher.
```js
var Symbol = require('number_symbols');

Symbol(1233, true, 101) // false
Symbol(1233, true, 99) // 1233K
Symbol(1233, true, 4) // 1233K
Symbol(1233, true, 3) // 1.233K
```