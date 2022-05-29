/*
 * Напиши скрипт поиска самого маленького числа в массиве,
 * при условии что числа уникальные (не повторяются).
 */

const numbers = [51, 18, 13, 24, 7, 85, 19];
let smallestNumber = numbers[0];/*допустим первое число самое маленькое*/

for (const number of numbers) { /*перебираем весь цикл*/
  if (number < smallestNumber) { /*сравниваем*/
    smallestNumber = number; /*если да,то перезаписываем маленькое число*/  }
}

console.log('smallestNumber: ', smallestNumber);
