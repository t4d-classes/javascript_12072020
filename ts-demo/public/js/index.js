"use strict";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE1BQU0sS0FBSyxHQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQztBQUUzRCxxQkFBcUI7QUFDckIsd0JBQXdCO0FBRXhCLHlCQUF5QjtBQUN6Qiw0QkFBNEI7QUFFNUIsNkJBQTZCO0FBQzdCLGdDQUFnQztBQUNoQyx1QkFBdUI7QUFFdkIsbUJBQW1CO0FBRW5CLGVBQWU7QUFFZixlQUFlO0FBRWYsK0VBQStFO0FBRS9FLFFBQVE7QUFDUiw4QkFBOEI7QUFDOUIsbUVBQW1FO0FBQ25FLHFEQUFxRDtBQUVyRCxTQUFTLE9BQU87SUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQzFCLENBQUM7QUFFRCxVQUFVLENBQUMsR0FBRyxFQUFFO0lBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNuQixDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztBQUVaLFVBQVUsQ0FBQyxHQUFHLEVBQUU7SUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ25CLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0FBRVosVUFBVSxDQUFDLEdBQUcsRUFBRTtJQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDbkIsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IGRlbGF5ID0gKCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMCkgKyA1MDA7XG5cbi8vIHNldFRpbWVvdXQoKCkgPT4ge1xuLy8gICAgIGNvbnNvbGUubG9nKCdhJyk7XG5cbi8vICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbi8vICAgICAgICAgY29uc29sZS5sb2coJ2InKTtcblxuLy8gICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjJyk7XG4vLyAgICAgICAgIH0sIGRlbGF5KCkpO1xuXG4vLyAgICAgfSwgZGVsYXkoKSk7XG5cbi8vIH0sIGRlbGF5KCkpO1xuXG4vLyBMYWIgRXhlcmNpc2VcblxuLy8gcnVuIHRoZSBhbGxEb25lIGZ1bmN0aW9uLCBhZnRlciBhbGwgdGhyZWUgc2V0VGltZW91dCBjYWxsYmFja3MgaGF2ZSBleGVjdXRlZFxuXG4vLyBSdWxlc1xuLy8gMS4gWW91IG1heSBub3QgdXNlIHByb21pc2VzXG4vLyAyLiBBbGwgdGhyZWUgY2FsbHMgdG8gJ3NldFRpbWVvdXQnIG11c3QgYmUgZG9uZSBpbiB0aGUgc2FtZSB0YXNrXG4vLyAzLiBObyBhZGRpdGlvbmFsIGNhbGxzIHRvIHNldFRpbWVvdXQgYXJlIHBlcm1pdHRlZFxuXG5mdW5jdGlvbiBhbGxEb25lKCkge1xuICBjb25zb2xlLmxvZygnYWxsIGRvbmUnKTtcbn1cblxuc2V0VGltZW91dCgoKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdhJyk7XG59LCBkZWxheSgpKTtcblxuc2V0VGltZW91dCgoKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdiJyk7XG59LCBkZWxheSgpKTtcblxuc2V0VGltZW91dCgoKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdjJyk7XG59LCBkZWxheSgpKTtcblxuIl19