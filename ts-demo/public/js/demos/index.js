"use strict";
const delay = () => Math.floor(Math.random() * 1000) + 500;
// type FulfillmentFn<S> = (data: S) => void;
// type AsyncOp<R> = (resolve: FulfillmentFn<R>, reject: FulfillmentFn<R>) => void;
// class MyPromise<T> {
//   resolveFns: FulfillmentFn<T>[] = [];
//   rejectFns: FulfillmentFn<T>[] = [];
//   constructor(fn: AsyncOp<T>) {
//     const resolveFn = (data: T) => {
//       this.resolveFns.forEach(fn => fn(data));
//     };
//     const rejectFn = (data: T) => {
//       this.rejectFns.forEach(fn => fn(data));
//     };
//     fn(resolveFn, rejectFn);
//   }
//   then(fn: FulfillmentFn<T>) {
//     this.resolveFns.push(fn);
//   }
//   catch(fn: FulfillmentFn<T>) {
//     this.rejectFns.push(fn);
//   }
// }
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('a');
    }, delay());
});
p.then(result => {
    console.log(result);
}).catch(result => {
    console.log('something went wrong: ', result);
});
console.log('waiting...');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9kZW1vcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsTUFBTSxLQUFLLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDO0FBRzNELDZDQUE2QztBQUU3QyxtRkFBbUY7QUFFbkYsdUJBQXVCO0FBRXZCLHlDQUF5QztBQUN6Qyx3Q0FBd0M7QUFFeEMsa0NBQWtDO0FBQ2xDLHVDQUF1QztBQUN2QyxpREFBaUQ7QUFDakQsU0FBUztBQUVULHNDQUFzQztBQUN0QyxnREFBZ0Q7QUFDaEQsU0FBUztBQUVULCtCQUErQjtBQUMvQixNQUFNO0FBRU4saUNBQWlDO0FBQ2pDLGdDQUFnQztBQUNoQyxNQUFNO0FBRU4sa0NBQWtDO0FBQ2xDLCtCQUErQjtBQUMvQixNQUFNO0FBRU4sSUFBSTtBQUdKLE1BQU0sQ0FBQyxHQUFHLElBQUksT0FBTyxDQUFTLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO0lBRWhELFVBQVUsQ0FBQyxHQUFHLEVBQUU7UUFDZCxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDZCxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztBQUVkLENBQUMsQ0FBQyxDQUFDO0FBRUgsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtJQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDdEIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFO0lBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDaEQsQ0FBQyxDQUFDLENBQUM7QUFFSCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCBkZWxheSA9ICgpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDApICsgNTAwO1xuXG5cbi8vIHR5cGUgRnVsZmlsbG1lbnRGbjxTPiA9IChkYXRhOiBTKSA9PiB2b2lkO1xuXG4vLyB0eXBlIEFzeW5jT3A8Uj4gPSAocmVzb2x2ZTogRnVsZmlsbG1lbnRGbjxSPiwgcmVqZWN0OiBGdWxmaWxsbWVudEZuPFI+KSA9PiB2b2lkO1xuXG4vLyBjbGFzcyBNeVByb21pc2U8VD4ge1xuXG4vLyAgIHJlc29sdmVGbnM6IEZ1bGZpbGxtZW50Rm48VD5bXSA9IFtdO1xuLy8gICByZWplY3RGbnM6IEZ1bGZpbGxtZW50Rm48VD5bXSA9IFtdO1xuXG4vLyAgIGNvbnN0cnVjdG9yKGZuOiBBc3luY09wPFQ+KSB7XG4vLyAgICAgY29uc3QgcmVzb2x2ZUZuID0gKGRhdGE6IFQpID0+IHtcbi8vICAgICAgIHRoaXMucmVzb2x2ZUZucy5mb3JFYWNoKGZuID0+IGZuKGRhdGEpKTtcbi8vICAgICB9O1xuXG4vLyAgICAgY29uc3QgcmVqZWN0Rm4gPSAoZGF0YTogVCkgPT4ge1xuLy8gICAgICAgdGhpcy5yZWplY3RGbnMuZm9yRWFjaChmbiA9PiBmbihkYXRhKSk7XG4vLyAgICAgfTtcblxuLy8gICAgIGZuKHJlc29sdmVGbiwgcmVqZWN0Rm4pO1xuLy8gICB9XG5cbi8vICAgdGhlbihmbjogRnVsZmlsbG1lbnRGbjxUPikge1xuLy8gICAgIHRoaXMucmVzb2x2ZUZucy5wdXNoKGZuKTtcbi8vICAgfVxuXG4vLyAgIGNhdGNoKGZuOiBGdWxmaWxsbWVudEZuPFQ+KSB7XG4vLyAgICAgdGhpcy5yZWplY3RGbnMucHVzaChmbik7XG4vLyAgIH1cblxuLy8gfVxuXG5cbmNvbnN0IHAgPSBuZXcgUHJvbWlzZTxzdHJpbmc+KChyZXNvbHZlLCByZWplY3QpID0+IHtcblxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICByZWplY3QoJ2EnKTtcbiAgfSwgZGVsYXkoKSk7XG5cbn0pO1xuXG5wLnRoZW4ocmVzdWx0ID0+IHtcbiAgY29uc29sZS5sb2cocmVzdWx0KTtcbn0pLmNhdGNoKHJlc3VsdCA9PiB7XG4gIGNvbnNvbGUubG9nKCdzb21ldGhpbmcgd2VudCB3cm9uZzogJywgcmVzdWx0KTtcbn0pO1xuXG5jb25zb2xlLmxvZygnd2FpdGluZy4uLicpO1xuXG5cblxuXG4iXX0=