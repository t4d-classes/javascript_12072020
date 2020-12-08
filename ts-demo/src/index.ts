
const delay = () => Math.floor(Math.random() * 1000) + 500;

// setTimeout(() => {
//     console.log('a');

//     setTimeout(() => {
//         console.log('b');

//         setTimeout(() => {
//             console.log('c');
//         }, delay());

//     }, delay());

// }, delay());

// Lab Exercise

// run the allDone function, after all three setTimeout callbacks have executed

// Rules
// 1. You may not use promises
// 2. All three calls to 'setTimeout' must be done in the same task
// 3. No additional calls to setTimeout are permitted

function allDone() {
  console.log('all done');
}

setTimeout(() => {
  console.log('a');
}, delay());

setTimeout(() => {
  console.log('b');
}, delay());

setTimeout(() => {
  console.log('c');
}, delay());

