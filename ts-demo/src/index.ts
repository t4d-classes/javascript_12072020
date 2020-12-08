
const delay = () => Math.floor(Math.random() * 1000) + 500;

type MyFetch = <T>(url: string) => Promise<T>;

const myFetch: MyFetch = <S>(url: string) => {

  return new Promise<S>(resolve => {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange', () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
      }

    });
    xhr.open('GET', url);
    xhr.send();
  });

};

type Color = {
  id: number;
  name: string;
  hexcode: string;
}

myFetch<Color[]>('http://localhost:3000/api/colors')
  .then((colors) => {
    console.log(colors);
  });