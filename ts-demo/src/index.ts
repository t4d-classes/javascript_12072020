

const nums = [1, 2, 3, 4, 5];

const mySymbol = Symbol('this is my cool symbol');

const randomNums = {
  _counter: 0,
  [Symbol.iterator]: function () {
    this._counter = 0;
    return {
      next: () => {
        this._counter++;
        return {
          value: Math.random(),
          done: this._counter > 9,
        };
      },
    };
  },
  [mySymbol]: 'some data',
};

// for (let num of nums) {
//   console.log(num);
// }

for (let num of randomNums) {
  console.log(num);
}

console.log(randomNums[mySymbol]);
console.log(mySymbol);
