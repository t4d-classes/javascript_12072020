
const delay = () => Math.floor(Math.random() * 1000) + 500;

const xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', () => {

  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(JSON.parse(xhr.responseText));
  }

});

xhr.open('GET', 'http://localhost:3000/api/colors');
xhr.send();

// Write some code such that if the following line of code
// was pasted into your code file, the line of code would
// work with no changes.
// Use the XHR code above to make the AJAX call, do not
// use the built-in fetch API

myFetch('http://localhost:3000/api/colors')
  .then((colors: any[]) => {
    console.log(colors);
  });