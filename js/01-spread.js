/*
 * Операция spread (распыление)- берем коллекцию и разделяем на отдельные элементы (распаковывает в другую коллекцию)
 * - Array.prototype.concat() и аналог через spread
 */

//сделай новый массив(обьедини эти массивы в один)
// const numbers = [1, 2, 3].concat([4, 5, 6], [7, 8, 9]); // [1,2,3,4,5,6,7,8,9] (с помощью .concat)
// const numbers = [...[1, 2, 3], ...[4, 5, 6], ...[7, 8, 9]]; // [1,2,3,4,5,6,7,8,9] (с помощью spread(распыления))

const numbers = [
  1000,
  ...[1, 2, 3],
  5000,
  ...[4, 5, 6],
  7000,
  ...[7, 8, 9],
  9000,
];

// console.log(numbers);

/*
 * Поиск самой маленькой или большой температуры (числа)
 */

const temps = [18, 14, 12, 21, 17, 29, 24];

// console.log(Math.max(1, 4, 17, 5, 6));
// console.log(Math.min(...temps));
// console.log(temps);

/*
 * Передача сложных типов при распылении
 */

// const a = [{ x: 1 }, { y: 2 }, { z: 3 }];

// const b = [...a]; //в новый пустой массив распыляю поэлементно массив а

// console.log('a: ', a);
// console.log('b: ', b);

// console.log(a[0] === b[0]);
// console.log(a === b);

// a[0].x = 1000;

// console.log('a: ', a);
// console.log('b: ', b);

/*
 * Сшиваем несколько массивов в один через spread
 */
const lastWeekTemps = [1, 2, 3];
const currentTemps = [4, 5, 6];
const nextWeekTemps = [7, 8, 9];

const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];
// console.log(allTemps);

/*
 * Распыление объектов
 * - Object.prototype.assign() и spread
 */

const a = { x: 1, y: 2 };
const b = { x: 0, z: 3 };

// const c = Object.assign({name: 'Mango' }, a, b);

const c = { //в обьекте перезаписываются свойства
  ...a, //распыляем а (x: 1, y: 2)
  x: 10, //применяем свойство обьекта x (x: 10, y: 2)
  ...b, //распыляем b (x: 0, y: 2, z: 3)
  y: 20,//применяем свойство обьекта y (x: 0, y: 20, z: 3)
};

// console.log(c); // в итоге получаем(x: 0, y: 20, z: 3)

//настройки по умолчанию
const defaultSettings = {
  theme: 'light',
  showNotifications: true,
  hideSidebar: false,
};
//мои настройки
const userSettings = {
  showNotifications: false,
  hideSidebar: true,
};
//рапыляем по умолчанию и мои
const finalSettings = {
  ...defaultSettings,
  ...userSettings,
};
//получаем
console.log(finalSettings); //(theme: 'light', showNotifications: false, hideSidebar: true)


const first = { propA: 5, propB: 10 };
const second = { propC: 15 };
const third = { propC: 20,...second, ...first };
console.log(third);