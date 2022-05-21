/*
 * Длина строки, свойство length
 */
// const message = 'В этой строке 26 символов.';
// console.log(message.length);

/*
 * Конкатенация строк
 */
const firstName = 'Chelsy';
const lastName = 'Emerald';
const fullName = firstName + ' ' + lastName;

// console.log(fullName);

/*
 * Напиши скрипт который выведет строку в формате:
 * «Гость x y поселяется в z номер q»,
 * подставив вместо x y z q значения переменных
 */

const room = 716;
const type = 'VIP';

// const welcomeMsg =
//   'Гость ' +
//   firstName +
//   ' ' +
//   lastName +
//   ' поселяется в ' +
//   type +
//   ' номер ' +
//   room;

const welcomeMsg = `Гость ${firstName} ${lastName} поселяется в ${type} номер ${room}`;
// console.log(welcomeMsg);

/*
 * Шаблонные строки (template strings)
 * Возвращаемся к составлению строки поселения в отель
 */

const quantity = 15;
const orderMsg = `Вы заказываете ${quantity} холодильников.`;

// console.log(orderMsg);

/*
 * Нормализация с методом toLowerCase()
 */

// const brand = 'Samsung';
// const normalizedBrand = brand.toLowerCase();
// console.log(normalizedBrand); //sansung


// let brand = prompt('Давай бренд');
// brand = brand.toLowerCase();
// console.log(brand);

// let brand = 'SamSUnG';
// console.log(brand[4]);
// console.log(brand.slice(1).toLowerCase());

brand = brand[0] + brand.slice(1).toLowerCase();
// console.log(brand); //Sunsung (первую букву 0 не меняем, а последующие в нижнем регистре) 

/*
 * Поиск в строке с методом includes()
 */
const blacklistedWord1 = 'спам';
const blacklistedWord2 = 'распродажа';

const string1 = 'Привет, я принц Абдул, это не спам, предлагаю тебе миллион!';
const string2 = 'Самая большая РАСПРОДАЖА этой недели, не пропустите!';
const string3 = 'Рекламная кампания #fatlivesmatter';

console.log(string1.includes(blacklistedWord1));
console.log(string1.includes(blacklistedWord2));

console.log(string2.includes(blacklistedWord1));
// приведем string2 к нижнему регистру
const normalizedString2 = string2.toLowerCase();
console.log(normalizedString2.includes(blacklistedWord2));

console.log(string3.includes(blacklistedWord1));
console.log(string3.includes(blacklistedWord2));


// автопроверка
/*
 * Напиши скрипт который выведет строку в формате:
 * "You picked <имя товара>, price per item is <цена товара> credits",
 * подставив вместо <имя товара>  и <цена товара> значения переменных
 */

const productName = "Droid";
const pricePerItem = 3500;

// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;

// console.log(message);

/*
 * Напиши скрипт который выведет строку в формате:
 * ""You ordered droids worth <total price> credits. Delivery (<delivery fee> credits) is included in total price.",
 */
const orderedQuantity = 6;
const pricePerDroid = 800;
const deliveryFee = 50;
const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;

const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
console.log(message);


/* Объяви функцию sayHi, внутри которой добавь console.log() со строкой "Hello, this is my first function!". 
После объявления вызови функцию sayHi */
// 1. Объявление функции sayHi
function sayHi() {
    // Тело функции
    console.log("Hello, this is my first function!");
}
// 2. Вызовы функции sayHi
sayHi();