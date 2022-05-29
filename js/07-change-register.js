/*
 * Напиши скрипт который заменяет регистр каждого символа в строке на противоположный.
 * Например, если строка «JavaScript», то на выходе должена быть строка «jAVAsCRIPT».
 */

const string = 'JavaScript';
const letters = string.split('');/*строку разбивает посимвольно*/
let invertedString = '';

console.log(letters);

for (const letter of letters) { /*посивольно перебирает массив*/
  console.log(letter);

  // if (letter === letter.toLowerCase()) {/*берем каждый символ и меняем на противоположный регистр */
  //   console.log('Эта буква в нижнем регистре!!! - ', letter);

  //   invertedString += letter.toUpperCase(); /*в верхнем регистре*/
  // } else {
  //   console.log('Эта буква в верхнет регистре!!! - ', letter);
  //   invertedString += letter.toLowerCase();
  // }

  const isEqual = letter === letter.toLowerCase(); /* сравниваем переменные */

  invertedString += isEqual ? letter.toUpperCase() : letter.toLowerCase(); /* в зависимости от значения isEqual присваеваем либо верхний либо нижний регистр*/
}

console.log('invertedString: ', invertedString);
