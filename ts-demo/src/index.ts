import { log } from './lib.js';

log('hello, world!');

setTimeout(() => {
  log('test');
}, 2000);

function identity<T>(a: T) {
  return a;
}

let t = identity(2);

console.log(t);
