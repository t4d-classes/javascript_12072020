
const delay = () => Math.floor(Math.random() * 1000) + 500;

type MyFetch = <T>(url: string) => Promise<T>;

type AjaxError = {
  status: number;
  message: string;
}

const myFetch: MyFetch = <S>(url: string) => {

  return new Promise<S>((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange', () => {
      try {
        if (xhr.readyState === 4 && (xhr.status === 0 || xhr.status >= 400)) {
          reject({
            status: xhr.status,
            message: xhr.statusText,
          });
        }

        if (xhr.readyState === 4 && xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        }
      } catch (err) {
        reject({
          status: 0,
          message: err,
        });
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

myFetch<Color[]>('http://localhost:8000/api/colors')
  .then((colors) => {
    console.log(colors);
  })
  .catch(err => {
    const ajaxError = err as AjaxError;
    console.log('handled error');
    console.log(ajaxError.status, ajaxError.message);
  });