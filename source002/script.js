

// decimal.js install
let Decimal = require('decimal.js');

for (let i = 0; i < 10; i++) {
  console.log(Decimal(i).div(3).toString());
}
