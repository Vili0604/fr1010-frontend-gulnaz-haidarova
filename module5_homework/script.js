'use strict';
let fruit = new Map([
    ["apple","red"],
    ["pear","yellow"],
    ["banana","green"]
]);
fruit. forEach( (key) => {
    console.log(`$ {key} - x`);
});
fruit.forEach( (value) => {
    console.log(` ${value} - y`);
});
  


