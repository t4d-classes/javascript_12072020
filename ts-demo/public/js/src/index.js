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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE1BQU0sS0FBSyxHQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQztBQUczRCw2Q0FBNkM7QUFFN0MsbUZBQW1GO0FBRW5GLHVCQUF1QjtBQUV2Qix5Q0FBeUM7QUFDekMsd0NBQXdDO0FBRXhDLGtDQUFrQztBQUNsQyx1Q0FBdUM7QUFDdkMsaURBQWlEO0FBQ2pELFNBQVM7QUFFVCxzQ0FBc0M7QUFDdEMsZ0RBQWdEO0FBQ2hELFNBQVM7QUFFVCwrQkFBK0I7QUFDL0IsTUFBTTtBQUVOLGlDQUFpQztBQUNqQyxnQ0FBZ0M7QUFDaEMsTUFBTTtBQUVOLGtDQUFrQztBQUNsQywrQkFBK0I7QUFDL0IsTUFBTTtBQUVOLElBQUk7QUFHSixNQUFNLENBQUMsR0FBRyxJQUFJLE9BQU8sQ0FBUyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtJQUVoRCxVQUFVLENBQUMsR0FBRyxFQUFFO1FBQ2QsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2QsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7QUFFZCxDQUFDLENBQUMsQ0FBQztBQUVILENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7SUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3RCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRTtJQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ2hELENBQUMsQ0FBQyxDQUFDO0FBRUgsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgZGVsYXkgPSAoKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwKSArIDUwMDtcblxuXG4vLyB0eXBlIEZ1bGZpbGxtZW50Rm48Uz4gPSAoZGF0YTogUykgPT4gdm9pZDtcblxuLy8gdHlwZSBBc3luY09wPFI+ID0gKHJlc29sdmU6IEZ1bGZpbGxtZW50Rm48Uj4sIHJlamVjdDogRnVsZmlsbG1lbnRGbjxSPikgPT4gdm9pZDtcblxuLy8gY2xhc3MgTXlQcm9taXNlPFQ+IHtcblxuLy8gICByZXNvbHZlRm5zOiBGdWxmaWxsbWVudEZuPFQ+W10gPSBbXTtcbi8vICAgcmVqZWN0Rm5zOiBGdWxmaWxsbWVudEZuPFQ+W10gPSBbXTtcblxuLy8gICBjb25zdHJ1Y3RvcihmbjogQXN5bmNPcDxUPikge1xuLy8gICAgIGNvbnN0IHJlc29sdmVGbiA9IChkYXRhOiBUKSA9PiB7XG4vLyAgICAgICB0aGlzLnJlc29sdmVGbnMuZm9yRWFjaChmbiA9PiBmbihkYXRhKSk7XG4vLyAgICAgfTtcblxuLy8gICAgIGNvbnN0IHJlamVjdEZuID0gKGRhdGE6IFQpID0+IHtcbi8vICAgICAgIHRoaXMucmVqZWN0Rm5zLmZvckVhY2goZm4gPT4gZm4oZGF0YSkpO1xuLy8gICAgIH07XG5cbi8vICAgICBmbihyZXNvbHZlRm4sIHJlamVjdEZuKTtcbi8vICAgfVxuXG4vLyAgIHRoZW4oZm46IEZ1bGZpbGxtZW50Rm48VD4pIHtcbi8vICAgICB0aGlzLnJlc29sdmVGbnMucHVzaChmbik7XG4vLyAgIH1cblxuLy8gICBjYXRjaChmbjogRnVsZmlsbG1lbnRGbjxUPikge1xuLy8gICAgIHRoaXMucmVqZWN0Rm5zLnB1c2goZm4pO1xuLy8gICB9XG5cbi8vIH1cblxuXG5jb25zdCBwID0gbmV3IFByb21pc2U8c3RyaW5nPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgcmVqZWN0KCdhJyk7XG4gIH0sIGRlbGF5KCkpO1xuXG59KTtcblxucC50aGVuKHJlc3VsdCA9PiB7XG4gIGNvbnNvbGUubG9nKHJlc3VsdCk7XG59KS5jYXRjaChyZXN1bHQgPT4ge1xuICBjb25zb2xlLmxvZygnc29tZXRoaW5nIHdlbnQgd3Jvbmc6ICcsIHJlc3VsdCk7XG59KTtcblxuY29uc29sZS5sb2coJ3dhaXRpbmcuLi4nKTtcblxuXG5cblxuIl19