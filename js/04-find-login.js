/*
 * Напиши скрипт поиска логина
 * - Если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
 * - Если нашли логин, вывести сообщение 'Пользователь [логин] найден.'
 *
 * - Сначала через for
 * - Потом через for...of
 * - Логика break
 * - Метод includes() с тернарным оператором
 */

const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
const loginToFind = 'aj4xth3m4n';
// let message = `Пользователь ${loginToFind} не найден.`;

// 1)перебираем цикл
// for (let i = 0; i < logins.length; i += 1) {
//   const login = logins[i];


//   console.log('Login: ', login);
//   console.log(`${login} === ${loginToFind}: `, login === loginToFind);

// 2)проверяем условие
//   if (login === loginToFind) {
//     console.log('Ура, равны!!!');
//     message = `Пользователь ${loginToFind} найден.`;
// 3)останавливаем цикл, если совпадает
//     break;
//   }
// }
// console.log(message);


// поиск от обратного(записываем сообщение"пользователь не найден"стр.14)
// затем перебираем цикл через for...of
// for (const login of logins) {
//   console.log('Login: ', login);
//   console.log(`${login} === ${loginToFind}: `, login === loginToFind);

// проверяем условие
//   if (login === loginToFind) {
//     console.log('Ура, равны!!!');
//     message = `Пользователь ${loginToFind} найден.`;
// останавливаем цикл
//     break;
//   }
// }

// console.log(message);


// самый лучший вариант с includes (декларативный код-абстракция)
// содержит ли цикл loginToFind
const message = logins.includes(loginToFind)
  ? `Пользователь ${loginToFind} найден.`
  : `Пользователь ${loginToFind} не найден.`;

console.log(message);


 