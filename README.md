# Number_Symbols

`Number Symbols` displays symbols according to the number of digits.
<br>
If `isSymbol` is set to true, ['K', 'M', 'G', 'T', 'P', 'E', 'Z'] is displayed according to the number of digits.

## Usage
```js
var Symbol = require('number_symbols');
var key = Symbol(1234, 0, true);
console.log(key); // 123K
```