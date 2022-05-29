/*
 * Делаем slug в URL из названия статьи (например на dev.to)
 * Заголовок статьи состоит только из букв и пробелов
 *
 * - Нормализируем строку
 * - Разбиваем по словам
 * - Сшиваем в строку с разделителями
 */

// Должно получиться top-10-benefits-of-react-framework
const title = 'Top 10 benefits of React framework';

const normalizedTitle = title.toLowerCase(); /*нормализируем(приводим к нижнему регистру)*/
// console.log(normalizedTitle);

const words = normalizedTitle.split(' '); /*строку разбивает по пробелу*/
// console.log(words);

const slug = words.join('-'); /*строку сшивает по тире*/
// console.log(slug);


// запишем все одной строкой декларативным кодом (абстракция)
// (на нормализированной строке.toLowerCase() вызываем метод split(' ') и сшиваем по тире.join('-')  )
const slug1 = title.toLowerCase().split(' ').join('-');

console.log(slug1);
