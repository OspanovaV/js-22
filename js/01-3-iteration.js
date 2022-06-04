/*
 * Перебор через for...in и 
Object.keys - возвращает массив ключей
Object.values - возвращает массив значений
Object.entries
 */

const feedback = {
  good: 5,
  neutral: 10,
  bad: 3,
};

let totalFeedback = 0; /*создадим переменну для хранения общего количества фитбеков*/

// const keys = Object.keys(feedback); /*это конструктор Object (получи массив ключей из обьекта feedback)*/

// console.log(keys);

// for (const key of keys) { /*перебираем массив с ключами*/
//   console.log(key); /*получаем название ключа*/
//   console.log(feedback[key]); /*получаем значение ключа*/

//   totalFeedback += feedback[key]; /*общее количество фитбеков*/
// }

// console.log('totalFeedback: ', totalFeedback);

// const values = Object.values(feedback); /*возвращает массив значений ключей*/

// console.log(values);

// for (const value of values) { /*перебираем массив с значениями ключей*/
//   console.log(value);

//   totalFeedback += value; /*сумма фитбеков*/
// }

// console.log('totalFeedback: ', totalFeedback); 


/*автопроверка*/
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }


// console.log(keys);
// console.log(values);